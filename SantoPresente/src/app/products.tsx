// Página de Produtos - Mostra todos os produtos

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';

export default function ProductsPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>👕 Nossos Produtos</Text>
        <Text style={styles.subtitle}>
          Explore nossa coleção completa de moda católica
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.infoText}>
          Em breve, aqui você verá todos os produtos cadastrados pelo administrador!
        </Text>
        <Text style={styles.infoText}>
          Por enquanto, essa é uma página de demonstração. 😊
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 24,
  },
});