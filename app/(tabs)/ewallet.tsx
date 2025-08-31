import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const EWallet = () => {
  const recentTransactions = [
    { date: "2025-08-30", desc: "Top-up from Bank", amount: "+$50.00", type: "income" },
    { date: "2025-08-29", desc: "Doctor Appointment", amount: "-$25.50", type: "expense" },
    { date: "2025-08-28", desc: "Pharmacy", amount: "-$15.75", type: "expense" },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <ScrollView contentContainerStyle={tw`pb-5`}>
        {/* Header */}
        <View style={tw`px-5 py-4`}>
          <Text style={[tw`text-2xl font-bold mb-1`, { color: "#007CA5" }]}>E-wallet</Text>
          <Text style={[tw`text-base mb-1`, { color: "#007CA5" }]}>Digital Wallet</Text>
          <Text style={[tw`text-lg font-semibold`, { color: "#007CA5" }]}>Margaret Johnson</Text>
        </View>

        {/* Balance Card */}
        <View style={tw`mx-5 bg-white rounded-2xl shadow-md p-6`}>
          <Text style={[tw``, { color: "#007CA5" }]}>Available Balance</Text>
          <Text style={[tw`text-3xl font-bold mt-2`, { color: "#007CA5" }]}>$250.00</Text>
          <Text style={tw`text-sm text-gray-400 mt-2`}>
            Last Updated: Today, 2:30 PM
          </Text>
        </View>

        {/* Separator */}
        <View style={tw`h-0.5 bg-gray-200 my-6 mx-5`} />

        {/* Quick Actions */}
        <View style={tw`px-5`}>
          <Text style={[tw`text-lg font-semibold mb-3`, { color: "#007CA5" }]}>
            Quick Actions
          </Text>
          <View style={tw`flex-row justify-between`}>
            {/* Top-up Wallet */}
            <TouchableOpacity style={tw`flex-1 bg-white rounded-2xl shadow p-4 mr-2`}>
              <Text style={[tw`font-bold text-base`, { color: "#007CA5" }]}>
                Top-Up Wallet
              </Text>
              <Text style={tw`text-gray-500 text-sm mt-1`}>
                Add money to your wallet
              </Text>
            </TouchableOpacity>

            {/* Spend History */}
            <TouchableOpacity style={tw`flex-1 bg-white rounded-2xl shadow p-4 ml-2`}>
              <Text style={[tw`font-bold text-base`, { color: "#007CA5" }]}>
                Spend History
              </Text>
              <Text style={tw`text-gray-500 text-sm mt-1`}>
                View transaction history
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={tw`px-5 mt-6`}>
          <Text style={[tw`text-lg font-semibold mb-3`, { color: "#007CA5" }]}>
            Recent Transactions
          </Text>

          {recentTransactions.map((item, index) => (
            <View
              key={index}
              style={tw`flex-row justify-between items-center bg-white rounded-xl shadow-sm px-4 py-3 mb-3`}
            >
              <View>
                <Text style={tw`text-sm text-gray-500`}>{item.date}</Text>
                <Text style={[tw`text-base font-medium`, { color: "#007CA5" }]}>
                  {item.desc}
                </Text>
              </View>
              <Text
                style={[
                  tw`text-base font-bold`,
                  item.type === "income"
                    ? { color: "#16a34a" } // green-600
                    : { color: "#dc2626" } // red-600
                ]}
              >
                {item.amount}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EWallet;
