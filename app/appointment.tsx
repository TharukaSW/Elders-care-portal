import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const appointments = [
  {
    doctor: 'Dr. Suresh Perera',
    specialty: 'Physician',
    date: 'Sunday, 12 July',
    time: '06.00 PM - 08.00 PM',
    location: 'Suwasewana, Kandy',
    status: 'Pending',
    avatar: require('@/assets/images/doctor1.png'),
  },
  {
    doctor: 'Dr. Suresh Perera',
    specialty: 'Physician',
    date: 'Sunday, 12 July',
    time: '06.00 PM - 08.00 PM',
    location: 'Suwasewana, Kandy',
    status: 'Pending',
    avatar: require('@/assets/images/doctor1.png'),
  },
];

export default function AppointmentScreen() {
  const [tab, setTab] = useState('Upcoming');
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={28} color="#1593B5" />
        </TouchableOpacity>
        <Text style={styles.header}>Your Appointment</Text>
      </View>
      <View style={styles.tabsRow}>
        <TouchableOpacity style={[styles.tabBtn, tab === 'Upcoming' && styles.tabBtnActive]} onPress={() => setTab('Upcoming')}>
          <Text style={[styles.tabText, tab === 'Upcoming' && styles.tabTextActive]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBtn} onPress={() => setTab('Past')}>
          <Text style={styles.tabText}>Past</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBtn} onPress={() => setTab('All')}>
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {appointments.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={item.avatar} style={styles.avatar} />
              <View>
                <Text style={styles.doctor}>{item.doctor}</Text>
                <Text style={styles.specialty}>{item.specialty}</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <MaterialIcons name="date-range" size={20} color="#888" />
              <Text style={styles.infoText}>{item.date}</Text>
              <FontAwesome name="clock-o" size={18} color="#888" style={{ marginLeft: 16 }} />
              <Text style={styles.infoText}>{item.time}</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={20} color="#888" />
              <Text style={styles.infoText}>{item.location}</Text>
              <MaterialIcons name="hourglass-empty" size={20} color="#888" style={{ marginLeft: 16 }} />
              <Text style={styles.infoText}>{item.status}</Text>
            </View>
            <TouchableOpacity style={styles.detailsBtn} onPress={() => router.push('/appointment-details')}>
              <Text style={styles.detailsText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.fab} onPress={() => router.push('/choose-doctor')}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', marginTop: 40 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 8, paddingHorizontal: 16 },
  header: { flex: 1, textAlign: 'center', fontSize: 22, fontWeight: '700', color: '#1593B5' },
  tabsRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 16, gap: 8 },
  tabBtn: { backgroundColor: '#fff', borderRadius: 20, paddingVertical: 6, paddingHorizontal: 22, borderWidth: 1, borderColor: '#BEE3F2', marginHorizontal: 4 },
  tabBtnActive: { backgroundColor: '#1593B5', borderColor: '#1593B5' },
  tabText: { color: '#1593B5', fontWeight: '600', fontSize: 15 },
  tabTextActive: { color: '#fff' },
  scrollContent: { paddingHorizontal: 12, paddingBottom: 80 },
  card: { backgroundColor: '#F1F8FC', borderRadius: 14, borderWidth: 1, borderColor: '#1593B5', marginBottom: 18, padding: 16 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  avatar: { width: 48, height: 48, borderRadius: 24, marginRight: 12, backgroundColor: '#fff' },
  doctor: { fontWeight: '700', fontSize: 16, color: '#222' },
  specialty: { color: '#888', fontSize: 14, fontWeight: '500' },
  divider: { height: 1, backgroundColor: '#e0e0e0', marginVertical: 8 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  infoText: { color: '#666', fontSize: 14, marginLeft: 6, marginRight: 12 },
  detailsBtn: { backgroundColor: '#1186A6', borderRadius: 16, alignSelf: 'center', marginTop: 10, paddingHorizontal: 28, paddingVertical: 6 },
  detailsText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  fab: { position: 'absolute', right: 24, bottom: 32, backgroundColor: '#1186A6', width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', elevation: 4 },
});
