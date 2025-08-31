import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Minimal root layout: only one screen (welcome page at app/index.tsx)
export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
  <Stack.Screen name="onboarding_one" />
  <Stack.Screen name="select-role" />
  <Stack.Screen name="family-register" />
  <Stack.Screen name="elderly-register" />
  <Stack.Screen name="healthcare-register" />
  <Stack.Screen name="caregiver-register" />
  <Stack.Screen name="login" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
