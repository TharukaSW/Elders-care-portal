import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AppointmentDetailsScreen() {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const router = useRouter();

  const dates = [
    { day: '12', label: 'Sun' },
    { day: '15', label: 'Tue' },
    { day: '16', label: 'Wed' },
    { day: '20', label: 'Mon' },
    { day: '23', label: 'Wed', month: 'July' },
  ];
  const times = ['06.00 - 08.00 PM', '07.00 - 09.00 AM'];
  const locations = ['Asiri , Kandy', 'Suwasewana , Kandy'];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: 40 }}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={28} color="#1593B5" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileRow}>
          <Image source={require('@/assets/images/doctor1.png')} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.doctor}>Dr. Suresh Perera</Text>
            <Text style={styles.specialty}>Physician</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
              <FontAwesome name="star" size={20} color="#F6D32B" />
              <Text style={styles.rating}>4.7 (1207)</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.bio}>
          Dr. Suresh Perera is a caring and skilled doctor specializing in [field, e.g., family medicine, pediatrics, Physician. With over 10 years of experience, Dr. Suresh is dedicated to providing personalized treatment and improving patients' quality of life. Known for a patient-first approach, they focus on both prevention and treatment to support long-term health. Beyond clinical work, Dr. Suresh Perera is passionate about educating communities and promoting healthier lifestyles.
        </Text>
        <Text style={styles.sectionTitle}>Schedule</Text>
        <View style={styles.row}>
          {dates.map((d, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.dateBtn, selectedDate === i && styles.dateBtnActive, d.month && { marginRight: 0 }]}
              onPress={() => setSelectedDate(i)}
            >
              <Text style={[styles.dateDay, selectedDate === i && styles.dateDayActive]}>{d.day}</Text>
              <Text style={[styles.dateLabel, selectedDate === i && styles.dateLabelActive]}>{d.label}</Text>
              {d.month && <Text style={styles.monthText}>{d.month}</Text>}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Choose Time</Text>
        <View style={styles.row}>
          {times.map((t, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.timeBtn, selectedTime === i && styles.timeBtnActive]}
              onPress={() => setSelectedTime(i)}
            >
              <Text style={[styles.timeText, selectedTime === i && styles.timeTextActive]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Locations</Text>
        <View style={styles.row}>
          {locations.map((loc, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.locBtn, selectedLocation === i && styles.locBtnActive]}
              onPress={() => setSelectedLocation(i)}
            >
              <Text style={[styles.locText, selectedLocation === i && styles.locTextActive]}>{loc}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 18 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginTop: 0, marginBottom: 8 },
  profileRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginRight: 16, backgroundColor: '#F1F8FC' },
  doctor: { fontWeight: '700', fontSize: 20, color: '#222' },
  specialty: { color: '#888', fontSize: 16, fontWeight: '600' },
  rating: { color: '#888', fontSize: 15, fontWeight: '600', marginLeft: 6 },
  sectionTitle: { color: '#1593B5', fontWeight: '700', fontSize: 18, marginTop: 10, marginBottom: 2 },
  bio: { color: '#222', fontSize: 14, marginBottom: 8, fontWeight: '400' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 8 },
  dateBtn: { backgroundColor: '#F1F8FC', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 14, alignItems: 'center', marginRight: 8 },
  dateBtnActive: { backgroundColor: '#fff', borderColor: '#1593B5', borderWidth: 2 },
  dateDay: { color: '#1593B5', fontWeight: '700', fontSize: 16 },
  dateDayActive: { color: '#1186A6' },
  dateLabel: { color: '#888', fontWeight: '600', fontSize: 13 },
  dateLabelActive: { color: '#1186A6' },
  monthText: { color: '#1593B5', fontWeight: '700', fontSize: 13, marginTop: -4 },
  timeBtn: { backgroundColor: '#F1F8FC', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 18, marginRight: 8 },
  timeBtnActive: { backgroundColor: '#fff', borderColor: '#1593B5', borderWidth: 2 },
  timeText: { color: '#1593B5', fontWeight: '600', fontSize: 15 },
  timeTextActive: { color: '#1186A6' },
  locBtn: { backgroundColor: '#F1F8FC', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 18, marginRight: 8 },
  locBtnActive: { backgroundColor: '#fff', borderColor: '#1593B5', borderWidth: 2 },
  locText: { color: '#1593B5', fontWeight: '600', fontSize: 15 },
  locTextActive: { color: '#1186A6' },
  bookBtn: { backgroundColor: '#1186A6', borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginTop: 18, paddingVertical: 14 },
  bookText: { color: '#fff', fontWeight: '700', fontSize: 18 },
});
