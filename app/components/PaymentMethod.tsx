// PaymentMethodScreen.tsx
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
type RootStackParamList = {
  PaymentMethod: undefined;
  AddCard: undefined;
  // add other screens here if needed
};

export default function PaymentMethodScreen() {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const otherMethods = [
    { id: "paypal", label: "PayPal" },
    { id: "gpay", label: "Google Pay" },
    { id: "applepay", label: "Apple Pay" },
    { id: "ewallet", label: "E-wallet" },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={tw`p-5`}>
        {/* Title */}
        <Text style={tw`text-2xl font-semibold text-blue-600 mb-5`}>Payment Method</Text>

        {/* Credit & Debit Card Section */}
        <View style={tw`bg-white rounded-xl p-4 mb-5 shadow`}>
          <Text style={tw`text-lg font-medium text-blue-600 mb-3`}>Credit & Debit Card</Text>

          <View style={tw`flex-row items-center mb-3`}>
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" }}
              style={tw`w-12 h-8 mr-3`}
              resizeMode="contain"
            />
            <Text style={tw`text-blue-600 text-base`}>**** **** **** 1234</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("AddCard")}>
            <Text style={tw`text-blue-600 text-base font-medium`}>+ Add a new card</Text>
          </TouchableOpacity>
        </View>

        {/* Other Payment Methods */}
        <View style={tw`bg-white rounded-xl p-4 shadow`}>
          <Text style={tw`text-lg font-medium text-blue-600 mb-3`}>Other Payment Methods</Text>

          <FlatList
            data={otherMethods}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={tw`flex-row items-center py-3`}
                onPress={() => setSelectedMethod(item.id)}
              >
                {/* Radio Button */}
                <View style={tw`w-5 h-5 rounded-full border-2 border-blue-600 justify-center items-center mr-3`}>
                  {selectedMethod === item.id && <View style={tw`w-2.5 h-2.5 rounded-full bg-blue-600`} />}
                </View>
                <Text style={tw`text-blue-600 text-base`}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
