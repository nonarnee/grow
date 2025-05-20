import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Tab() {
  const router = useRouter();

  const handlePressQuest = () => {
    router.push('/(tabs)/home/quest');
  };

  return (
    <LinearGradient colors={['#4c1d95', '#312e81']} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <View>
              <Text>5</Text>
            </View>
            <View>
              <Text>XP 50,533</Text>
              <View />
            </View>
          </View>
          <TouchableOpacity onPress={handlePressQuest}>
            <Text>퀘스트</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.character}>
          <Text>AVATAR</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  character: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    height: 100,
    marginHorizontal: 10,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
