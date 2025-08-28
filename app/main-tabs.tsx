import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppointmentScreen from './appointment';
import MyProfileScreen from './my-profile';

const tabs = [
  { label: 'Home', icon: 'home' },
  { label: 'Appointment', icon: 'clipboard' },
  { label: 'Chat', icon: 'chatbubble-ellipses' },
  { label: 'Profile', icon: 'person' },
];

export default function MainTabsScreen() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (idx: number) => {
    setActiveTab(idx);
    // Add navigation logic for each tab if needed
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {activeTab === 0 && (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 22, color: '#1186A6', fontWeight: '700' }}>Home Page</Text>
          </View>
        )}
        {activeTab === 1 && <AppointmentScreen />}
        {activeTab === 2 && (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 22, color: '#1186A6', fontWeight: '700' }}>Chat Page</Text>
          </View>
        )}
  {activeTab === 3 && <MyProfileScreen />}
      </View>
      <View style={styles.tabBar}>
        {tabs.map((tab, idx) => (
          <TouchableOpacity
            key={tab.label}
            style={styles.tab}
            onPress={() => handleTabPress(idx)}
          >
            <Ionicons
              name={
                tab.icon === 'home'
                  ? 'home'
                  : tab.icon === 'clipboard'
                  ? 'clipboard-outline'
                  : tab.icon === 'chatbubble-ellipses'
                  ? 'chatbubble-ellipses-outline'
                  : 'person-outline'
              }
              size={38}
              color={activeTab === idx ? '#1186A6' : '#1186A6'}
            />
            <Text style={[styles.tabLabel, activeTab === idx && styles.tabLabelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 24,
    paddingTop: 8,
    borderTopWidth: 0,
    backgroundColor: '#fff',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  tabLabel: {
    color: '#1186A6',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
  tabLabelActive: {
    fontWeight: '700',
  },
});
