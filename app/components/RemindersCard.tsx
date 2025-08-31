import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type RemindersCardProps = {
  darkMode: boolean;
};

function RemindersCard({ darkMode }: RemindersCardProps) {
  const reminders = [
    {
      id: 1,
      title: 'Remind about medication',
      schedule: '12:00 PM',
    },
    {
      id: 2,
      title: 'Schedule weekly check-up',
      schedule: 'This week',
    },
    {
      id: 3,
      title: 'Update health journal',
      schedule: 'Daily',
    },
  ];

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={[styles.header, darkMode && styles.darkHeader]}>
        <Text style={[styles.title, darkMode && styles.darkTitle]}>
          Health Reminders
        </Text>
      </View>
      
      {reminders.length > 0 ? (
        <View style={styles.remindersList}>
          {reminders.map((reminder) => (
            <View key={reminder.id} style={[styles.reminderItem, darkMode && styles.darkReminderItem]}>
              <Text style={[styles.reminderTitle, darkMode && styles.darkReminderTitle]}>
                {reminder.title}
              </Text>
              <Text style={styles.schedule}>{reminder.schedule}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="time" size={40} color="#9CA3AF" />
          <Text style={[styles.emptyTitle, darkMode && styles.darkEmptyTitle]}>
            No reminders set
          </Text>
          <Text style={styles.emptySubtitle}>
            Add health reminders here
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  darkContainer: {
    backgroundColor: '#374151',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  darkHeader: {
    borderBottomColor: '#4B5563',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  darkTitle: {
    color: '#fff',
  },
  remindersList: {
    paddingHorizontal: 16,
  },
  reminderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  darkReminderItem: {
    borderBottomColor: '#4B5563',
  },
  reminderTitle: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
  },
  darkReminderTitle: {
    color: '#D1D5DB',
  },
  schedule: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E88E5',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginTop: 8,
  },
  darkEmptyTitle: {
    color: '#fff',
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});

export default RemindersCard; 