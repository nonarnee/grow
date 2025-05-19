import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // TODO: 로그인 로직
    console.log('로그인 시도:', email, password);

    // 로그인 성공 시 탭 화면으로 이동
    router.replace('/(tabs)');
  };

  return (
    <LinearGradient colors={['#4c1d95', '#312e81']} style={styles.background}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>GROW</Text>
        <Text style={styles.subtitle}>자기계발과 학습을 게임처럼 재미있게</Text>

        <TextInput
          style={styles.input}
          placeholder="이메일"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>계정이 없으신가요? 회원가입</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '85%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#6200EA',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 20,
  },
  registerText: {
    color: '#e0e0e0',
    fontSize: 14,
  },
});
