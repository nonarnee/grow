import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: 'rgba(46 16 101 / 1)',
          borderColor: 'rgba(46 16 101 / 1)',
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
          tabBarLabelStyle: { marginTop: 3, fontSize: 12 },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '탐험',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="planet-outline" color={color} />,
          tabBarLabelStyle: { marginTop: 3, fontSize: 12 },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '프로필',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
          tabBarLabelStyle: { marginTop: 3, fontSize: 12 },
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
