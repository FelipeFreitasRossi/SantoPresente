// Landing Page com HEADER FIXO e Hamburguer!

import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Colors } from '../constants/Colors';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import HamburgerButton from '../components/HamburgerButton';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  // Estado para controlar se o menu está aberto ou fechado
  const [menuVisible, setMenuVisible] = useState(false);

  // Funções de navegação
  const handleExplorePress = () => {
    console.log('Botão Explorar clicado!');
  };

  const handleContactPress = () => {
    console.log('Botão Contato clicado!');
  };

  // Função que será chamada quando clicar em algum item do menu
  const handleNavigation = (screen: string) => {
    console.log(`Navegando para: ${screen}`);
    // Aqui depois você vai implementar a navegação de verdade
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* MINI HEADER FIXO */}
        <View style={styles.miniHeader}>
          <Text style={styles.headerTitle}>SantoPresente</Text>
          <HamburgerButton onPress={() => setMenuVisible(true)} />
        </View>

        {/* Menu Lateral */}
        <Navbar 
          visible={menuVisible}
          onClose={() => setMenuVisible(false)}
          onNavigate={handleNavigation}
        />

        {/* CONTEÚDO SCROLLÁVEL */}
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {/* SEÇÃO DO TOPO - Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.logoContainer}>
              <Image 
                source={{ uri: 'https://i.postimg.cc/DwX9wrVr/Design-sem-nome.png' }}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            
            <Text style={styles.mainTitle}>SantoPresente</Text>
            <Text style={styles.subtitle}>Moda Católica com Estilo e Fé</Text>
            
            <Text style={styles.description}>
              Vista-se com propósito. Roupas confortáveis e designs únicos 
              que celebram sua fé no dia a dia.
            </Text>

            <View style={styles.buttonContainer}>
              <Button 
                title="EXPLORAR COLEÇÃO" 
                onPress={handleExplorePress}
                variant="primary"
              />
              <View style={styles.buttonSpacing} />
              <Button 
                title="FALE CONOSCO" 
                onPress={handleContactPress}
                variant="secondary"
              />
            </View>
          </View>

          {/* SEÇÃO DE PRODUTOS */}
          <View style={styles.productsSection}>
            <Text style={styles.sectionTitle}>Nossos Produtos</Text>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.productsScroll}
            >
              <ProductCard 
                icon="👕"
                title="Camisas Oversized"
                description="Conforto e estilo em peças amplas"
              />
              <ProductCard 
                icon="👔"
                title="Camisetas Estampadas"
                description="Designs únicos com mensagens de fé"
              />
              <ProductCard 
                icon="🧥"
                title="Moletons"
                description="Com e sem capuz para o frio"
              />
              <ProductCard 
                icon="👗"
                title="Babylooks"
                description="Estilo feminino e delicado"
              />
            </ScrollView>
          </View>

          {/* SEÇÃO SOBRE */}
          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>Por que escolher SantoPresente?</Text>
            
            <View style={styles.featureContainer}>
              <View style={styles.feature}>
                <Text style={styles.featureIcon}>✨</Text>
                <Text style={styles.featureTitle}>Qualidade Premium</Text>
                <Text style={styles.featureText}>
                  Tecidos selecionados e acabamento impecável
                </Text>
              </View>

              <View style={styles.feature}>
                <Text style={styles.featureIcon}>🙏</Text>
                <Text style={styles.featureTitle}>Designs Inspiradores</Text>
                <Text style={styles.featureText}>
                  Cada peça conta uma história de fé
                </Text>
              </View>

              <View style={styles.feature}>
                <Text style={styles.featureIcon}>💝</Text>
                <Text style={styles.featureTitle}>Presente Perfeito</Text>
                <Text style={styles.featureText}>
                  Ideal para presentear quem você ama
                </Text>
              </View>
            </View>
          </View>

          {/* RODAPÉ */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              © 2024 SantoPresente - Fé e Estilo
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primary, // Cor do topo da tela (notch)
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  // MINI HEADER FIXO
  miniHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 999, // Para ficar acima de tudo
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary,
    letterSpacing: 0.5,
  },
  
  scrollContainer: {
    flex: 1,
  },
  
  // ESTILOS DA SEÇÃO HERO (TOPO)
  heroSection: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  logoContainer: {
    marginBottom: 24,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  logo: {
    width: 120,
    height: 120,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.textLight,
    marginBottom: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  buttonSpacing: {
    height: 16,
  },

  // ESTILOS DA SEÇÃO DE PRODUTOS
  productsSection: {
    paddingVertical: 40,
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  productsScroll: {
    paddingHorizontal: 16,
  },

  // ESTILOS DA SEÇÃO SOBRE
  aboutSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  featureContainer: {
    marginTop: 20,
  },
  feature: {
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: 20,
  },

  // ESTILOS DO RODAPÉ
  footer: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  footerText: {
    color: Colors.secondary,
    fontSize: 14,
  },
});