// Página de Contato - Informações de contato

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Colors } from '../constants/Colors';

export default function ContactPage() {
  // Funções para abrir links externos
  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/5511999999999'); // Coloque seu número aqui
  };

  const openInstagram = () => {
    Linking.openURL('https://instagram.com/santopresente'); // Coloque seu @ aqui
  };

  const sendEmail = () => {
    Linking.openURL('mailto:contato@santopresente.com.br'); // Coloque seu email aqui
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📞 Entre em Contato</Text>
        <Text style={styles.subtitle}>
          Estamos aqui para te ajudar!
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.infoText}>
          Escolha a melhor forma de falar com a gente:
        </Text>

        {/* Botão WhatsApp */}
        <TouchableOpacity style={styles.contactButton} onPress={openWhatsApp}>
          <Text style={styles.contactIcon}>💬</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>WhatsApp</Text>
            <Text style={styles.contactText}>Fale conosco agora mesmo</Text>
          </View>
        </TouchableOpacity>

        {/* Botão Instagram */}
        <TouchableOpacity style={styles.contactButton} onPress={openInstagram}>
          <Text style={styles.contactIcon}>📸</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Instagram</Text>
            <Text style={styles.contactText}>@santopresente</Text>
          </View>
        </TouchableOpacity>

        {/* Botão Email */}
        <TouchableOpacity style={styles.contactButton} onPress={sendEmail}>
          <Text style={styles.contactIcon}>✉️</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>E-mail</Text>
            <Text style={styles.contactText}>contato@santopresente.com.br</Text>
          </View>
        </TouchableOpacity>

        {/* Horário de Atendimento */}
        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleTitle}>🕐 Horário de Atendimento</Text>
          <Text style={styles.scheduleText}>
            Segunda a Sexta: 9h às 18h{'\n'}
            Sábado: 9h às 13h{'\n'}
            Domingo: Fechado
          </Text>
        </View>
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
  },
  infoText: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 24,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 15,
    marginBottom: 16,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactIcon: {
    fontSize: 40,
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 4,
  },
  contactText: {
    fontSize: 14,
    color: Colors.textLight,
  },
  scheduleContainer: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 15,
    marginTop: 8,
    alignItems: 'center',
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 12,
  },
  scheduleText: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 24,
  },
});