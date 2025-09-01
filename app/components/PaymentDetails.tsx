import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function PaymentDetails() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={tw`p-5`}>
        {/* Top Section - Card Info */}
        <View style={tw`bg-white rounded-xl p-4 shadow mb-5`}>
          <Text style={[tw`text-lg font-semibold mb-3`, { color: "#007CA5" }]}>•••• •••• •••• 0042</Text>
          <View style={tw`flex-row justify-between`}>
            <View style={tw`flex-1`}>
              <Text style={[tw`text-sm`, { color: "#007CA5" }]}>Card Holder Name</Text>
              <Text style={[tw`text-base font-medium mt-1`, { color: "#007CA5" }]}>Ann Smith</Text>
            </View>
            <View style={tw`flex-1`}>
              <Text style={[tw`text-sm`, { color: "#007CA5" }]}>Expiry Date</Text>
              <Text style={[tw`text-base font-medium mt-1`, { color: "#007CA5" }]}>04/28</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View style={tw`h-0.5 bg-gray-200 my-5`} />

        {/* Payment Details */}
        <View style={tw`bg-white rounded-xl p-4 shadow`}>
          <Text style={[tw`text-lg font-bold mb-4`, { color: "#007CA5" }]}>Payment Details</Text>

          <View style={tw`flex-row justify-between mb-3`}>
            <Text style={[tw`text-base`, { color: "#007CA5" }]}>Doctor Appointment</Text>
            <Text style={[tw`text-base font-medium`, { color: "#007CA5" }]}>Rs 3500.00</Text>
          </View>

          <View style={tw`flex-row justify-between mb-3`}>
            <Text style={[tw`text-base`, { color: "#007CA5" }]}>Tax</Text>
            <Text style={[tw`text-base font-medium`, { color: "#007CA5" }]}>Rs 500.00</Text>
          </View>

          <View style={tw`flex-row justify-between mb-3`}>
            <Text style={[tw`text-base`, { color: "#007CA5" }]}>Discount</Text>
            <Text style={[tw`text-base font-medium`, { color: "#007CA5" }]}>Rs 00.00</Text>
          </View>

          {/* Total */}
          <View style={tw`flex-row justify-between mt-5 pt-3 border-t border-gray-200`}>
            <Text style={[tw`text-lg font-bold`, { color: "#007CA5" }]}>Total</Text>
            <Text style={[tw`text-lg font-bold`, { color: "#007CA5" }]}>Rs 4000.00</Text>
          </View>
        </View>
      </ScrollView>

      {/* Pay Now Button */}
      <View style={tw`p-5 bg-white border-t border-gray-100`}>
        <TouchableOpacity style={tw`bg-[#007CA5] py-4 rounded-lg items-center shadow`}>
          <Text style={tw`text-lg font-bold text-white`}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
