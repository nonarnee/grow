import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>탐험</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
