import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image as RNImage, StyleSheet, View } from 'react-native';

// Splash / Welcome screen: shows logo then redirects to onboarding_one screen after 3 seconds
export default function WelcomeScreen() {
  useEffect(() => {
    const timeout = setTimeout(() => {
  router.replace('/onboarding_one');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <RNImage
        source={require('@/assets/images/c_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#007a99" style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 180,
    height: 180,
  },
  spinner: {
    marginTop: 24,
  },
});
