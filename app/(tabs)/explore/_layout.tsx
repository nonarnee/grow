import { Stack } from 'expo-router';

export default function ExploreLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[planet]" options={{ headerShown: false }} />
      <Stack.Screen name="[continent]" options={{ headerShown: false }} />
      <Stack.Screen name="[stage]" options={{ headerShown: false }} />
    </Stack>
  );
}
