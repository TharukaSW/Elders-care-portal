import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppointmentScreen from './appointment';
import ChatList from './components/ChatList';
import GuardianDashboard from './components/GuardianDashboard';
import MyProfileScreen from './my-profile';

const tabs = [
  { label: 'Home', icon: 'home' },
  { label: 'Appointment', icon: 'clipboard' },
  { label: 'Chat', icon: 'chatbubble-ellipses' },
  { label: 'Profile', icon: 'person' },
];

export default function MainTabsScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleTabPress = (idx: number) => {
    setActiveTab(idx);
    // Add navigation logic for each tab if needed
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {activeTab === 0 && (
          <GuardianDashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        )}
        {activeTab === 1 && <AppointmentScreen />}
        {activeTab === 2 && <ChatList onNavigateToHome={() => setActiveTab(0)} />}
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
