// Botão Hamburguer - As 3 linhas que abre o menu

import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface HamburgerButtonProps {
  onPress: () => void; // O que acontece quando clica
}

export default function HamburgerButton({ onPress }: HamburgerButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* As 3 linhas horizontais do hamburguer */}
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'space-around',
    width: 40,
    height: 40,
  },
  line: {
    width: 30,
    height: 3,
    backgroundColor: Colors.secondary,
    borderRadius: 2,
  },
});