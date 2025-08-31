import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type AppointmentsCardProps = {
  darkMode: boolean;
};

function AppointmentsCard({ darkMode }: AppointmentsCardProps) {
  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. Smith',
      specialty: 'Physician',
      reason: 'Blood Work',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      dateTime: 'Friday, 11:30 AM',
    },
    {
      id: 2,
      doctorName: 'Dr. Johnson',
      specialty: 'Cardiologist',
      reason: 'Routine Check-up',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      dateTime: 'Monday, 2:15 PM',
    },
  ];

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={[styles.header, darkMode && styles.darkHeader]}>
        <Text style={[styles.title, darkMode && styles.darkTitle]}>
          Upcoming Appointments
        </Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      
      {appointments.length > 0 ? (
        <View style={styles.appointmentsList}>
          {appointments.map((appointment) => (
            <View key={appointment.id} style={[styles.appointmentItem, darkMode && styles.darkAppointmentItem]}>
              <Image
                source={{ uri: appointment.avatar }}
                style={styles.doctorAvatar}
              />
              <View style={styles.appointmentInfo}>
                <Text style={[styles.doctorName, darkMode && styles.darkDoctorName]}>
                  {appointment.doctorName}{' '}
                  <Text style={styles.specialty}>({appointment.specialty})</Text>
                </Text>
                <Text style={styles.reason}>{appointment.reason}</Text>
              </View>
              <View style={styles.dateTimeContainer}>
                <Text style={styles.dateTime}>{appointment.dateTime}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="calendar" size={40} color="#9CA3AF" />
          <Text style={[styles.emptyTitle, darkMode && styles.darkEmptyTitle]}>
            No upcoming appointments
          </Text>
          <Text style={styles.emptySubtitle}>
            Schedule a new appointment
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  viewAllText: {
    fontSize: 14,
    color: '#1E88E5',
  },
  appointmentsList: {
    paddingHorizontal: 16,
  },
  appointmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  darkAppointmentItem: {
    borderBottomColor: '#4B5563',
  },
  doctorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  appointmentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  darkDoctorName: {
    color: '#fff',
  },
  specialty: {
    fontWeight: '400',
    color: '#6B7280',
  },
  reason: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  dateTimeContainer: {
    alignItems: 'flex-end',
  },
  dateTime: {
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

export default AppointmentsCard; 