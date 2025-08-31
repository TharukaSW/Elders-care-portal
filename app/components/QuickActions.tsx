import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type QuickActionProps = {
  darkMode: boolean;
  onLocationClick?: () => void;
};

function QuickActions({ darkMode, onLocationClick }: QuickActionProps) {
  const actions = [
    {
      id: 1,
      title: 'Appointments',
      subtitle: 'Schedule Appointment',
      icon: 'calendar' as const,
      onPress: () => console.log('Appointments clicked'),
    },
    {
      id: 2,
      title: 'Messages',
      subtitle: 'Chat with care team',
      icon: 'chatbubble-ellipses' as const,
      onPress: () => console.log('Messages clicked'),
    },
    {
      id: 3,
      title: 'Profiles',
      subtitle: 'Elder Profiles',
      icon: 'people' as const,
      onPress: () => console.log('Profiles clicked'),
    },
    {
      id: 4,
      title: 'Financial',
      subtitle: 'Approve Requests',
      icon: 'card' as const,
      onPress: () => console.log('Financial clicked'),
    },
    {
      id: 5,
      title: 'Location',
      subtitle: 'Track Location',
      icon: 'location' as const,
      onPress: onLocationClick,
    },
    {
      id: 6,
      title: 'Health',
      subtitle: 'Health Records',
      icon: 'medical' as const,
      onPress: () => console.log('Health clicked'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, darkMode && styles.darkSectionTitle]}>
        Quick Actions
      </Text>
      <View style={styles.grid}>
        {actions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={[
              styles.actionCard,
              darkMode && styles.darkActionCard,
            ]}
            activeOpacity={0.7}
            onPress={action.onPress}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={action.icon as any} size={28} color="#4491B1" />
            </View>
            <Text style={[styles.actionTitle, darkMode && styles.darkActionTitle]}>
              {action.title}
            </Text>
            <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  darkSectionTitle: {
    color: '#E5E7EB',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    minHeight: 110,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  darkActionCard: {
    backgroundColor: '#374151',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(68, 145, 177, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    textAlign: 'center',
  },
  darkActionTitle: {
    color: '#fff',
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 2,
  },
});

export default QuickActions; 