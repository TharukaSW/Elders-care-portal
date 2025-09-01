import { Ionicons } from "@expo/vector-icons";
import type { StackNavigationProp } from '@react-navigation/stack';
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

type PaymentSuccessProps = {
  navigation: StackNavigationProp<any>;
};

export default function PaymentSuccess({ navigation }: PaymentSuccessProps) {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center px-5`}>
      {/* Success Icon */}
      <View style={tw`mb-8`}>
        <Ionicons name="checkmark-circle" size={120} color="#007CA5" />
      </View>

      {/* Success Message */}
      <Text style={[tw`text-2xl font-bold mb-12`, { color: "#007CA5" }]}>Payment Done</Text>

      {/* Buttons */}
      <View style={tw`w-full absolute bottom-10 px-5`}>
        <TouchableOpacity
          style={tw`bg-gray-100 py-4 rounded-xl items-center shadow`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[tw`text-base font-medium`, { color: "#007CA5" }]}>Back to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`bg-[#007CA5] py-4 rounded-xl items-center mt-3 shadow`}
          onPress={() => alert("Invoice Downloaded")}
        >
          <Text style={tw`text-base font-semibold text-white`}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
