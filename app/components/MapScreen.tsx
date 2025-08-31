import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MapScreenProps = {
  darkMode: boolean;
  onBack: () => void;
};

function MapScreen({ darkMode, onBack }: MapScreenProps) {
  const [tracking, setTracking] = useState(false);
  const [position, setPosition] = useState({
    latitude: 40.7128,
    longitude: -74.006,
  });
  const [accuracy] = useState(200);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [personName] = useState('John Smith');
  const [personType] = useState('Elder');

  // Get initial location
  useEffect(() => {
    // For demo purposes, we'll simulate location updates
    // In a real app, you would use expo-location or similar
    updateTimestamp();
  }, []);

  // Handle tracking toggle
  useEffect(() => {
    let interval: number;
    
    if (tracking) {
      // Simulate location updates every 30 seconds
      interval = setInterval(() => {
        // Simulate small movement for demo purposes
        setPosition(prev => ({
          latitude: prev.latitude + (Math.random() * 0.001 - 0.0005),
          longitude: prev.longitude + (Math.random() * 0.001 - 0.0005),
        }));
        updateTimestamp();
      }, 30000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [tracking]);

  const updateTimestamp = () => {
    const now = new Date();
    setLastUpdated(now.toLocaleTimeString());
  };

  const toggleTracking = () => {
    setTracking(!tracking);
    if (!tracking) {
      updateTimestamp();
    }
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      {/* Header */}
      <View style={[styles.header, darkMode && styles.darkHeader]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={[styles.backButton, darkMode && styles.darkBackButton]}
            onPress={onBack}
          >
            <Ionicons name="arrow-back" size={20} color={darkMode ? '#E5E7EB' : '#374151'} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={[styles.title, darkMode && styles.darkTitle]}>
              Location Tracking
            </Text>
            <View style={styles.personInfo}>
              <Text style={[styles.personName, darkMode && styles.darkPersonName]}>
                {personName} ({personType})
              </Text>
              {tracking && (
                <View style={styles.liveIndicator}>
                  <View style={styles.liveDot} />
                  <Text style={styles.liveText}>Live</Text>
                </View>
              )}
            </View>
          </View>
        </View>
        {lastUpdated && (
          <View style={styles.lastUpdated}>
            <Text style={[styles.lastUpdatedLabel, darkMode && styles.darkLastUpdatedLabel]}>
              Last updated
            </Text>
            <Text style={[styles.lastUpdatedTime, darkMode && styles.darkLastUpdatedTime]}>
              {lastUpdated}
            </Text>
          </View>
        )}
      </View>

      {/* Map Container */}
      <View style={styles.mapContainer}>
        <View style={[styles.map, darkMode && styles.darkMap]}>
          {/* Mock Map Content */}
          <View style={styles.mapContent}>
            <View style={styles.mapGrid}>
              {Array.from({ length: 20 }, (_, i) => (
                <View key={i} style={[styles.gridLine, darkMode && styles.darkGridLine]} />
              ))}
            </View>
            
            {/* Location Marker */}
            <View style={styles.markerContainer}>
              <View style={styles.marker}>
                <Ionicons name="person" size={20} color="#fff" />
              </View>
              <Text style={[styles.markerLabel, darkMode && styles.darkMarkerLabel]}>
                {personName}
              </Text>
            </View>

            {/* Accuracy Circle */}
            <View style={[styles.accuracyCircle, { width: accuracy / 2, height: accuracy / 2 }]} />
          </View>

          {/* Map Controls */}
          <View style={styles.mapControls}>
            <TouchableOpacity style={[styles.mapButton, darkMode && styles.darkMapButton]}>
              <Ionicons name="add" size={20} color={darkMode ? '#E5E7EB' : '#374151'} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mapButton, darkMode && styles.darkMapButton]}>
              <Ionicons name="remove" size={20} color={darkMode ? '#E5E7EB' : '#374151'} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mapButton, darkMode && styles.darkMapButton]}>
              <Ionicons name="locate" size={20} color={darkMode ? '#E5E7EB' : '#374151'} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Floating Action Button */}
        <TouchableOpacity
          style={[
            styles.trackingButton,
            tracking && styles.trackingButtonActive,
          ]}
          onPress={toggleTracking}
        >
          <Ionicons
            name={tracking ? 'stop' : 'navigate'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Info Panel */}
      <View style={[styles.infoPanel, darkMode && styles.darkInfoPanel]}>
        <View style={styles.infoRow}>
          <View style={styles.infoSection}>
            <Text style={[styles.infoLabel, darkMode && styles.darkInfoLabel]}>
              Current Status
            </Text>
            <Text style={[
              styles.infoValue,
              tracking && styles.infoValueActive,
              darkMode && styles.darkInfoValue
            ]}>
              {tracking ? 'Actively Tracking' : 'Tracking Disabled'}
            </Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={[styles.infoLabel, darkMode && styles.darkInfoLabel]}>
              Update Frequency
            </Text>
            <Text style={[styles.infoValue, darkMode && styles.darkInfoValue]}>
              Every 30 seconds
            </Text>
          </View>
        </View>
        
        {/* Location Coordinates */}
        <View style={styles.coordinatesContainer}>
          <Text style={[styles.coordinatesLabel, darkMode && styles.darkCoordinatesLabel]}>
            Current Location:
          </Text>
          <Text style={[styles.coordinates, darkMode && styles.darkCoordinates]}>
            {position.latitude.toFixed(6)}, {position.longitude.toFixed(6)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#111827',
  },
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
    backgroundColor: '#374151',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    padding: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  darkBackButton: {
    backgroundColor: '#4B5563',
  },
  headerInfo: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  darkTitle: {
    color: '#fff',
  },
  personInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  personName: {
    fontSize: 14,
    color: '#6B7280',
  },
  darkPersonName: {
    color: '#D1D5DB',
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4491B1',
    marginRight: 4,
  },
  liveText: {
    fontSize: 12,
    color: '#4491B1',
  },
  lastUpdated: {
    alignItems: 'flex-end',
  },
  lastUpdatedLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  darkLastUpdatedLabel: {
    color: '#9CA3AF',
  },
  lastUpdatedTime: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },
  darkLastUpdatedTime: {
    color: '#D1D5DB',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    position: 'relative',
  },
  darkMap: {
    backgroundColor: '#1F2937',
  },
  mapContent: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: '#9CA3AF',
  },
  darkGridLine: {
    backgroundColor: '#6B7280',
  },
  markerContainer: {
    alignItems: 'center',
    zIndex: 10,
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4491B1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  markerLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },
  darkMarkerLabel: {
    color: '#D1D5DB',
  },
  accuracyCircle: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#4491B1',
    borderRadius: 999,
    backgroundColor: 'rgba(68, 145, 177, 0.1)',
  },
  mapControls: {
    position: 'absolute',
    top: 16,
    right: 16,
    gap: 8,
  },
  mapButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  darkMapButton: {
    backgroundColor: '#374151',
  },
  trackingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4491B1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  trackingButtonActive: {
    backgroundColor: '#EF4444',
  },
  infoPanel: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  darkInfoPanel: {
    backgroundColor: '#374151',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoSection: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  darkInfoLabel: {
    color: '#D1D5DB',
  },
  infoValue: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 2,
  },
  infoValueActive: {
    color: '#4491B1',
  },
  darkInfoValue: {
    color: '#9CA3AF',
  },
  coordinatesContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 12,
  },
  darkCoordinatesContainer: {
    borderTopColor: '#4B5563',
  },
  coordinatesLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  darkCoordinatesLabel: {
    color: '#9CA3AF',
  },
  coordinates: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
    fontFamily: 'monospace',
  },
  darkCoordinates: {
    color: '#D1D5DB',
  },
});

export default MapScreen; 