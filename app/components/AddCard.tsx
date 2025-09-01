import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function AddCard() {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const handleSave = () => {
    console.log({
      cardHolder,
      cardNumber,
      expiryDate,
      cvv,
      saveCard,
    });
    // integrate Firebase save logic here
  };

  return (
    <ScrollView style={tw`flex-1 bg-white`} contentContainerStyle={tw`p-6`}>
      {/* Title */}
      <Text style={[tw`text-2xl font-bold mb-6`, { color: "#007CA5" }]}>Add Card</Text>

      {/* Card Image Section */}
      <View style={tw`bg-white rounded-2xl shadow p-6 mb-6 items-center`}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
          }}
          style={tw`w-28 h-16`}
          resizeMode="contain"
        />
      </View>

      {/* Card Details Section */}
      <View style={tw`bg-white rounded-2xl shadow p-6 mb-6`}>
        <Text style={[tw`text-lg font-semibold mb-4`, { color: "#007CA5" }]}>Card Details</Text>

        <View style={tw`mb-4`}>
          <Text style={[tw`text-base mb-2`, { color: "#007CA5" }]}>Card Holder Name</Text>
          <TextInput
            style={[tw`text-base border-b border-gray-200 pb-1`, { color: "#007CA5" }]}
            value={cardHolder}
            onChangeText={setCardHolder}
            placeholder="Enter Card Holder Name"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={tw`mb-4`}>
          <Text style={[tw`text-base mb-2`, { color: "#007CA5" }]}>Card Number</Text>
          <TextInput
            style={[tw`text-base border-b border-gray-200 pb-1`, { color: "#007CA5" }]}
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            maxLength={16}
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={tw`flex-row gap-4`}>
          <View style={tw`flex-1`}>
            <Text style={[tw`text-base mb-2`, { color: "#007CA5" }]}>Expiry Date</Text>
            <TextInput
              style={[tw`text-base border-b border-gray-200 pb-1`, { color: "#007CA5" }]}
              value={expiryDate}
              onChangeText={setExpiryDate}
              placeholder="MM/YY"
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={tw`flex-1`}>
            <Text style={[tw`text-base mb-2`, { color: "#007CA5" }]}>CVV</Text>
            <TextInput
              style={[tw`text-base border-b border-gray-200 pb-1`, { color: "#007CA5" }]}
              value={cvv}
              onChangeText={setCvv}
              placeholder="***"
              secureTextEntry
              keyboardType="numeric"
              maxLength={3}
              placeholderTextColor="#aaa"
            />
          </View>
        </View>
      </View>

      {/* Save Card Option */}
      <View style={tw`flex-row items-center mb-6`}>
        <TouchableOpacity
          style={tw`w-5 h-5 border-2 rounded bg-white border-[#007CA5] mr-3 justify-center items-center`}
          onPress={() => setSaveCard(!saveCard)}
        >
          {saveCard && <View style={tw`w-3 h-3 rounded bg-[#007CA5]`} />}
        </TouchableOpacity>
        <Text style={[tw`text-base`, { color: "#007CA5" }]}>Save card for later</Text>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={tw`bg-[#007CA5] py-4 rounded-2xl items-center shadow`} onPress={handleSave}>
        <Text style={tw`text-white text-base font-bold`}>Add Card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}