// Menu lateral que desliza - COM NAVEGAÇÃO REAL!

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; // Para navegar entre páginas
import { Colors } from '../constants/Colors';

interface NavbarProps {
  visible: boolean; // Se o menu está aberto ou fechado
  onClose: () => void; // Função para fechar o menu
  onNavigate?: (screen: string) => void; // Função opcional de callback
}

export default function Navbar({ visible, onClose, onNavigate }: NavbarProps) {
  const router = useRouter(); // Hook de navegação do Expo Router

  // Função que fecha o menu e navega para uma tela
  const handleNavigation = (route: string, screenName: string) => {
    // Chama o callback se existir (para console.log)
    if (onNavigate) {
      onNavigate(screenName);
    }
    
    // Navega para a rota
    router.push(route);
    
    // Fecha o menu
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {/* Área clicável que fecha o menu */}
        <TouchableOpacity style={styles.closeArea} onPress={onClose} />
        
        {/* Menu lateral */}
        <View style={styles.navbar}>
          <ScrollView style={styles.scrollView}>
            {/* Cabeçalho do menu */}
            <View style={styles.header}>
              <Text style={styles.headerText}>SantoPresente</Text>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Links de navegação */}
            <View style={styles.menuItems}>
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => handleNavigation('/', 'home')}
              >
                <Text style={styles.menuIcon}>🏠</Text>
                <Text style={styles.menuText}>Início</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => handleNavigation('/products', 'products')}
              >
                <Text style={styles.menuIcon}>👕</Text>
                <Text style={styles.menuText}>Produtos</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => handleNavigation('/about', 'about')}
              >
                <Text style={styles.menuIcon}>ℹ️</Text>
                <Text style={styles.menuText}>Sobre Nós</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => handleNavigation('/contact', 'contact')}
              >
                <Text style={styles.menuIcon}>📞</Text>
                <Text style={styles.menuText}>Contato</Text>
              </TouchableOpacity>
            </View>

            {/* Botão do Administrador (no final) */}
            <View style={styles.footer}>
              <TouchableOpacity 
                style={styles.adminButton}
                onPress={() => handleNavigation('/admin', 'admin')}
              >
                <Text style={styles.adminIcon}>🔐</Text>
                <Text style={styles.adminText}>Administrador</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro transparente
  },
  closeArea: {
    flex: 1, // Ocupa o espaço que não é o menu
  },
  navbar: {
    width: 280,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  closeButton: {
    fontSize: 28,
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  menuItems: {
    paddingVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  menuText: {
    fontSize: 18,
    color: Colors.text,
    fontWeight: '500',
  },
  footer: {
    padding: 20,
    marginTop: 'auto', // Empurra para o final
  },
  adminButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  adminIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  adminText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',
  },
});