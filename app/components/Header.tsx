import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <View style={[styles.header, darkMode && styles.darkHeader]}>
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.onlineIndicator} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={[styles.name, darkMode && styles.darkName]}>
            Alex Johnson
          </Text>
          <View style={styles.guardianBadge}>
            <Text style={styles.guardianText}>Guardian</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, darkMode && styles.darkActionButton]}
          onPress={toggleDarkMode}
        >
          <Ionicons 
            name={darkMode ? 'sunny' : 'moon'} 
            size={20} 
            color={darkMode ? '#E5E7EB' : '#374151'} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, darkMode && styles.darkActionButton]}
        >
          <Ionicons 
            name="notifications" 
            size={20} 
            color={darkMode ? '#E5E7EB' : '#374151'} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, darkMode && styles.darkActionButton]}
        >
          <Ionicons 
            name="settings" 
            size={20} 
            color={darkMode ? '#E5E7EB' : '#374151'} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  darkHeader: {
    backgroundColor: '#111827',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4491B1',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileInfo: {
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  darkName: {
    color: '#fff',
  },
  guardianBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginTop: 2,
  },
  guardianText: {
    fontSize: 10,
    color: '#065F46',
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginLeft: 8,
  },
  darkActionButton: {
    backgroundColor: '#374151',
  },
});

export default Header; 