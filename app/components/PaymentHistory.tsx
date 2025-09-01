import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";

const transactions = [
  { id: "1", name: "Dr. Suresh Perera", amount: "Rs. 5000.00" },
  { id: "2", name: "Dr. Suresh Perera", amount: "Rs. 3500.00" },
  { id: "3", name: "Dr. Suresh Perera", amount: "Rs. 4200.00" },
  { id: "4", name: "Dr. Suresh Perera", amount: "Rs. 6000.00" },
  { id: "5", name: "Dr. Suresh Perera", amount: "Rs. 2800.00" },
];

export default function PaymentHistory() {
  const renderItem = ({ item }: any) => (
    <View style={tw`bg-white rounded-2xl shadow-md p-4 mb-4`}>
      <Text style={[tw`text-base`, { color: "#007CA5" }]}>{item.name}</Text>
      <Text style={[tw`text-lg font-semibold mt-1`, { color: "#007CA5" }]}>
        Pay amount {item.amount}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`px-5 py-4`}>
        <Text style={[tw`text-2xl font-bold mb-4`, { color: "#007CA5" }]}>
          Payment History
        </Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
