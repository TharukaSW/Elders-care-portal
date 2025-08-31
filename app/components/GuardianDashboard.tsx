import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppointmentsCard from './AppointmentsCard';
import EmergencySOS from './EmergencySOS';
import Header from './Header';
import MapScreen from './MapScreen';
import NotificationsCard from './NotificationsCard';
import QuickActions from './QuickActions';
import RemindersCard from './RemindersCard';

type GuardianDashboardProps = {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
};

function GuardianDashboard({
  darkMode = false,
  toggleDarkMode = () => {},
}: GuardianDashboardProps) {
  const [currentScreen, setCurrentScreen] = useState<'dashboard' | 'map'>('dashboard');

  const handleOpenMap = () => {
    setCurrentScreen('map');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  if (currentScreen === 'map') {
    return <MapScreen darkMode={darkMode} onBack={handleBackToDashboard} />;
  }

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.section}>
            <QuickActions darkMode={darkMode} onLocationClick={handleOpenMap} />
          </View>
          <View style={styles.section}>
            <AppointmentsCard darkMode={darkMode} />
          </View>
          <View style={styles.section}>
            <NotificationsCard darkMode={darkMode} />
          </View>
          <View style={styles.section}>
            <RemindersCard darkMode={darkMode} />
          </View>
        </View>
      </ScrollView>
      <EmergencySOS darkMode={darkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  darkContainer: {
    backgroundColor: '#111827',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  section: {
    marginTop: 24,
  },
});

export default GuardianDashboard; 