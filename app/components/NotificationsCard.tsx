import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type NotificationsCardProps = {
  darkMode: boolean;
};

function NotificationsCard({ darkMode }: NotificationsCardProps) {
  const notifications = [
    {
      id: 1,
      message: 'Expense request: $45 for medication',
      timeAgo: '1h ago',
    },
    {
      id: 2,
      message: "John&apos;s blood pressure reading is high",
      timeAgo: '3h ago',
    },
    {
      id: 3,
      message: 'Appointment confirmed with Dr. Smith',
      timeAgo: 'Yesterday',
    },
  ];

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={[styles.header, darkMode && styles.darkHeader]}>
        <Text style={[styles.title, darkMode && styles.darkTitle]}>
          Recent Notifications
        </Text>
      </View>
      
      {notifications.length > 0 ? (
        <View style={styles.notificationsList}>
          {notifications.map((notification) => (
            <View key={notification.id} style={[styles.notificationItem, darkMode && styles.darkNotificationItem]}>
              <View style={styles.notificationDot} />
              <View style={styles.notificationContent}>
                <Text style={[styles.notificationMessage, darkMode && styles.darkNotificationMessage]}>
                  {notification.message}
                </Text>
                <Text style={styles.timeAgo}>{notification.timeAgo}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="notifications" size={40} color="#9CA3AF" />
          <Text style={[styles.emptyTitle, darkMode && styles.darkEmptyTitle]}>
            No new notifications
          </Text>
          <Text style={styles.emptySubtitle}>You're all caught up!</Text>
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
  notificationsList: {
    paddingHorizontal: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  darkNotificationItem: {
    borderBottomColor: '#4B5563',
  },
  notificationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4491B1',
    marginTop: 8,
    marginRight: 12,
    flexShrink: 0,
  },
  notificationContent: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 22,
  },
  darkNotificationMessage: {
    color: '#D1D5DB',
  },
  timeAgo: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
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

export default NotificationsCard; 