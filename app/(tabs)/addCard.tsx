// AddCardScreen.tsx
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
    <ScrollView style={tw`flex-1 bg-gray-50`} contentContainerStyle={tw`p-5`}>
      {/* Title */}
      <Text style={[tw`text-2xl font-semibold mb-5`, { color: "#007CA5" }]}>Add Card</Text>

      {/* Summary Section with Card Image */}
      <View style={tw`bg-white rounded-xl p-5 mb-6 items-center justify-center shadow`}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
          }}
          style={tw`w-25 h-15`}
          resizeMode="contain"
        />
      </View>

      {/* Card Details Section */}
      <Text style={[tw`text-lg font-medium mb-3`, { color: "#007CA5" }]}>Card Details</Text>

      <View style={tw`bg-blue-50 rounded-lg p-3 mb-4 shadow`}>
        <Text style={[tw`text-base mb-2`, { color: "#007CA5" }]}>Card Holder Name</Text>
        <TextInput
          style={[tw`text-base border-b border-gray-200 py-1`, { color: "#007CA5" }]}
          value={cardHolder}
          onChangeText={setCardHolder}
          placeholder="Enter Card Holder Name"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={tw`bg-blue-50 rounded-lg p-3 mb-4 shadow`}>
        <Text style={[tw`text-base mb-2`, { color: "#007CA5" }]}>Card Number</Text>
        <TextInput
          style={[tw`text-base border-b border-gray-200 py-1`, { color: "#007CA5" }]}
          value={cardNumber}
          onChangeText={setCardNumber}
          placeholder="1234 5678 9012 3456"
          keyboardType="numeric"
          maxLength={16}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={tw`flex-row justify-between`}>
        <View style={tw`bg-blue-50 rounded-lg p-3 mb-4 flex-1 mr-2 shadow`}>
          <Text style={[tw`text-base mb-2`, { color: "#007CA5" }]}>Expiry Date</Text>
          <TextInput
            style={[tw`text-base border-b border-gray-200 py-1`, { color: "#007CA5" }]}
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholder="MM/YY"
            placeholderTextColor="#aaa"
          />
        </View>
        <View style={tw`bg-blue-50 rounded-lg p-3 mb-4 flex-1 ml-2 shadow`}>
          <Text style={[tw`text-base mb-2`, { color: "#007CA5" }]}>CVV</Text>
          <TextInput
            style={[tw`text-base border-b border-gray-200 py-1`, { color: "#007CA5" }]}
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

      {/* Save Card Option - Custom Checkbox */}
      <TouchableOpacity
        style={tw`flex-row items-center mb-6`}
        onPress={() => setSaveCard(!saveCard)}
      >
        <View style={[
          tw`w-5 h-5 border-2 rounded mr-3 bg-white border-blue-600`,
          saveCard && { backgroundColor: "#007CA5" }
        ]} />
        <Text style={[tw`text-base`, { color: "#007CA5" }]}>Save card for later</Text>
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity style={tw`bg-blue-600 py-4 rounded-lg items-center shadow`} onPress={handleSave}>
        <Text style={tw`text-white text-base font-semibold`}>Add Card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
