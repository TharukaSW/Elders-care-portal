import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const doctors = [
  {
    name: 'Dr. Suresh Perera',
    specialty: 'Physician',
    rating: 4.7,
    reviews: 1207,
    avatar: require('@/assets/images/doctor1.png'),
  },
  {
    name: 'Dr. Suresh Perera',
    specialty: 'Physician',
    rating: 4.7,
    reviews: 1207,
    avatar: require('@/assets/images/doctor1.png'),
  },
  {
    name: 'Dr. Suresh Perera',
    specialty: 'Physician',
    rating: 4.7,
    reviews: 1207,
    avatar: require('@/assets/images/doctor1.png'),
  },
];

export default function ChooseDoctorScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff',marginTop: 40 }}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#1593B5" />
        </TouchableOpacity>
        <Text style={styles.header}>Choose Your Doctor</Text>
      </View>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={22} color="#1593B5" style={{ marginLeft: 8 }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#1593B5"
          style={styles.searchInput}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.gridRow}>
          {doctors.map((doc, idx) => (
            <View key={idx} style={styles.card}>
              <Image source={doc.avatar} style={styles.avatar} />
              <Text style={styles.name}>{doc.name}</Text>
              <Text style={styles.specialty}>{doc.specialty}</Text>
              <View style={styles.ratingRow}>
                <FontAwesome name="star" size={18} color="#F6D32B" />
                <Text style={styles.rating}>{doc.rating} ({doc.reviews})</Text>
              </View>
              <TouchableOpacity style={styles.bookBtn} onPress={() => router.push('/appointment-details')}>
                <Text style={styles.bookText}>Book</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', alignItems: 'center', marginTop: 0, marginBottom: 12, paddingHorizontal: 16 },
  header: { flex: 1, textAlign: 'center', fontSize: 22, fontWeight: '700', color: '#1593B5' },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20, borderWidth: 1, borderColor: '#BEE3F2', marginHorizontal: 24, marginBottom: 18, height: 44 },
  searchInput: { flex: 1, fontSize: 16, color: '#1593B5', marginLeft: 8, marginRight: 8 },
  scrollContent: { paddingHorizontal: 12, paddingBottom: 40 },
  gridRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 18 },
  card: { backgroundColor: '#F1F8FC', borderRadius: 18, borderWidth: 1, borderColor: '#BEE3F2', width: 160, alignItems: 'center', margin: 8, paddingVertical: 16, paddingHorizontal: 8 },
  avatar: { width: 56, height: 56, borderRadius: 28, marginBottom: 8, backgroundColor: '#fff' },
  name: { fontWeight: '700', fontSize: 15, color: '#1593B5', textAlign: 'center' },
  specialty: { color: '#888', fontSize: 13, fontWeight: '500', marginBottom: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  rating: { color: '#888', fontSize: 13, fontWeight: '600', marginLeft: 4 },
  bookBtn: { backgroundColor: '#1186A6', borderRadius: 14, alignSelf: 'center', paddingHorizontal: 28, paddingVertical: 6 },
  bookText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
