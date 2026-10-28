import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>C</Text>
        </View>
        <Text style={styles.title}>CareerViQ</Text>
        <Text style={styles.subtitle}>Your career. Your next move.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#111827' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  logo: { width: 76, height: 76, borderRadius: 24, backgroundColor: '#6366f1', alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  logoText: { color: '#ffffff', fontSize: 42, fontWeight: '800' },
  title: { color: '#ffffff', fontSize: 34, fontWeight: '800', letterSpacing: 0.2 },
  subtitle: { color: '#cbd5e1', fontSize: 16, marginTop: 10 }
});
