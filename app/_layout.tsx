import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      <Stack.Screen name="aitrainer" />
      <Stack.Screen name="login" />
      <Stack.Screen name="membership" />
    </Stack>
  );
}
