import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'rgb(46 16 101 / 0.4)',
        tabBarStyle: { backgroundColor: 'rgb(46 16 101 / 0.8)' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '탐험',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="planet" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '프로필',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
