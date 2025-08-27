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
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
