// Página Sobre Nós - MELHORADA!

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Colors } from '../constants/Colors';

export default function AboutPage() {
  return (
    <ScrollView style={styles.container}>
      {/* CABEÇALHO COM LOGO */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://i.postimg.cc/DwX9wrVr/Design-sem-nome.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>SantoPresente</Text>
        <Text style={styles.headerSubtitle}>Moda Católica com Estilo e Fé</Text>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.content}>
        
        {/* MISSÃO */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🙏</Text>
            <Text style={styles.sectionTitle}>Nossa Missão</Text>
          </View>
          <Text style={styles.text}>
            Proporcionar roupas de qualidade premium que unem estilo contemporâneo 
            e fé católica, permitindo que nossos clientes expressem suas crenças 
            de forma moderna, elegante e autêntica no dia a dia.
          </Text>
        </View>

        {/* HISTÓRIA */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>✨</Text>
            <Text style={styles.sectionTitle}>Nossa História</Text>
          </View>
          <Text style={styles.text}>
            A SantoPresente nasceu do desejo de criar uma marca que oferecesse 
            moda católica contemporânea, quebrando o estereótipo de que roupas 
            de fé precisam ser antiquadas ou sem estilo.
          </Text>
          <Text style={styles.text}>
            {'\n'}Acreditamos que é possível vestir sua fé com orgulho, mantendo 
            o conforto, a qualidade e um design moderno que conversa com todas 
            as gerações.
          </Text>
        </View>

        {/* VALORES */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>💝</Text>
            <Text style={styles.sectionTitle}>Nossos Valores</Text>
          </View>
          
          <View style={styles.valueItem}>
            <Text style={styles.valueBullet}>✓</Text>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Fé em Primeiro Lugar</Text>
              <Text style={styles.valueText}>
                Tudo o que fazemos é guiado por princípios cristãos e amor ao próximo
              </Text>
            </View>
          </View>

          <View style={styles.valueItem}>
            <Text style={styles.valueBullet}>✓</Text>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Qualidade Premium</Text>
              <Text style={styles.valueText}>
                Tecidos selecionados e acabamento impecável em cada peça
              </Text>
            </View>
          </View>

          <View style={styles.valueItem}>
            <Text style={styles.valueBullet}>✓</Text>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Design Autêntico</Text>
              <Text style={styles.valueText}>
                Criações únicas que expressam fé com estilo contemporâneo
              </Text>
            </View>
          </View>

          <View style={styles.valueItem}>
            <Text style={styles.valueBullet}>✓</Text>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Compromisso com Você</Text>
              <Text style={styles.valueText}>
                Atendimento dedicado e experiência de compra excepcional
              </Text>
            </View>
          </View>
        </View>

        {/* DIFERENCIAIS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🌟</Text>
            <Text style={styles.sectionTitle}>Por que Escolher a SantoPresente?</Text>
          </View>
          
          <View style={styles.differentialCard}>
            <Text style={styles.differentialTitle}>🎨 Designs Exclusivos</Text>
            <Text style={styles.differentialText}>
              Cada estampa é pensada com carinho para transmitir mensagens de 
              fé, esperança e amor de forma criativa e moderna.
            </Text>
          </View>

          <View style={styles.differentialCard}>
            <Text style={styles.differentialTitle}>👕 Conforto Absoluto</Text>
            <Text style={styles.differentialText}>
              Tecidos de alta qualidade que proporcionam conforto durante todo 
              o dia, seja no trabalho, igreja ou momentos de lazer.
            </Text>
          </View>

          <View style={styles.differentialCard}>
            <Text style={styles.differentialTitle}>🎁 Presente Perfeito</Text>
            <Text style={styles.differentialText}>
              Nossas peças são ideais para presentear pessoas especiais em 
              batizados, crismas, aniversários e outras ocasiões especiais.
            </Text>
          </View>
        </View>

        {/* MENSAGEM FINAL */}
        <View style={styles.finalMessage}>
          <Text style={styles.finalMessageIcon}>✝️</Text>
          <Text style={styles.finalMessageText}>
            "Vista-se com propósito.{'\n'}
            Leve sua fé para onde você for."
          </Text>
          <Text style={styles.finalMessageSignature}>- Equipe SantoPresente</Text>
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
  
  // HEADER
  header: {
    backgroundColor: Colors.primary,
    padding: 32,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.textLight,
    fontStyle: 'italic',
  },
  
  // CONTEÚDO
  content: {
    padding: 20,
  },
  
  // SEÇÕES
  section: {
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.secondary,
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
  
  // VALORES
  valueItem: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  valueBullet: {
    fontSize: 20,
    color: Colors.secondary,
    fontWeight: 'bold',
    marginRight: 12,
    marginTop: 2,
  },
  valueContent: {
    flex: 1,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 4,
  },
  valueText: {
    fontSize: 14,
    color: Colors.textLight,
    lineHeight: 20,
  },
  
  // DIFERENCIAIS
  differentialCard: {
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.secondary,
  },
  differentialTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 8,
  },
  differentialText: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
  
  // MENSAGEM FINAL
  finalMessage: {
    backgroundColor: Colors.secondary,
    padding: 32,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  finalMessageIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  finalMessageText: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '600',
    marginBottom: 12,
  },
  finalMessageSignature: {
    fontSize: 14,
    color: Colors.primary,
    fontStyle: 'italic',
  },
});