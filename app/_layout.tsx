/* eslint-disable import/first */
import 'react-native-gesture-handler';
/* eslint-enable import/first */

import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200EA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: colorScheme === 'dark' ? '#121212' : '#f5f5f7',
        },
      }}
    />
  );
}
