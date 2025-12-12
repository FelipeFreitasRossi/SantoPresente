// Página do Administrador - ATUALIZADA com AsyncStorage!

import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  ScrollView, 
  Alert,
  TouchableOpacity,
  ActivityIndicator 
} from 'react-native';
import { Colors } from '../constants/Colors';
import Button from '../components/Button';
import { Product } from '../types/Product';
import storageService from '../services/storageService';

export default function AdminPage() {
  // Estados para controlar a autenticação
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Estados para o formulário de produtos
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productCategory, setProductCategory] = useState<'oversized' | 'camiseta' | 'moleton' | 'babylook'>('oversized');

  // Lista de produtos
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  // Senha do administrador
  const ADMIN_PASSWORD = 'santo123';

  // Carrega os produtos quando a página abre
  useEffect(() => {
    if (isAuthenticated) {
      loadProducts();
    }
  }, [isAuthenticated]);

  // Função para carregar produtos do AsyncStorage
  const loadProducts = async () => {
    setLoading(true);
    const loadedProducts = await storageService.loadProducts();
    setProducts(loadedProducts);
    setLoading(false);
  };

  // Função para verificar a senha
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      Alert.alert('Sucesso!', 'Login realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'Senha incorreta!');
      setPassword('');
    }
  };

  // Função para adicionar um novo produto
  const handleAddProduct = async () => {
    // Validação simples
    if (!productName || !productDescription || !productPrice || !productImage) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    setLoading(true);

    // Cria o novo produto
    const newProduct: Product = {
      id: Date.now().toString(),
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      imageUrl: productImage,
      category: productCategory,
      createdAt: new Date(),
    };

    // Salva no AsyncStorage
    const success = await storageService.addProduct(newProduct);

    if (success) {
      // Recarrega a lista
      await loadProducts();

      // Limpa o formulário
      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setProductImage('');

      Alert.alert('Sucesso!', 'Produto adicionado e salvo com sucesso!');
    } else {
      Alert.alert('Erro', 'Não foi possível salvar o produto');
    }

    setLoading(false);
  };

  // Função para deletar um produto
  const handleDeleteProduct = (id: string, name: string) => {
    Alert.alert(
      'Confirmar',
      `Tem certeza que deseja deletar "${name}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Deletar', 
          onPress: async () => {
            setLoading(true);
            const success = await storageService.deleteProduct(id);
            
            if (success) {
              await loadProducts();
              Alert.alert('Sucesso!', 'Produto deletado!');
            } else {
              Alert.alert('Erro', 'Não foi possível deletar o produto');
            }
            
            setLoading(false);
          },
          style: 'destructive'
        }
      ]
    );
  };

  // Se não estiver autenticado, mostra a tela de login
  if (!isAuthenticated) {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>🔐 Área do Administrador</Text>
          <Text style={styles.loginSubtitle}>Digite a senha para acessar</Text>
          
          <TextInput
            style={styles.passwordInput}
            placeholder="Digite a senha"
            placeholderTextColor={Colors.textLight}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleLogin}
          />
          
          <Button title="ENTRAR" onPress={handleLogin} variant="primary" />
          
          <Text style={styles.hintText}>Dica: a senha é "santo123"</Text>
        </View>
      </View>
    );
  }

  // Se estiver autenticado, mostra o painel admin
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Painel do Administrador</Text>
        <TouchableOpacity onPress={() => setIsAuthenticated(false)}>
          <Text style={styles.logoutButton}>Sair</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.secondary} />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      )}

      {/* FORMULÁRIO PARA ADICIONAR PRODUTO */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>✨ Adicionar Novo Produto</Text>
        
        <Text style={styles.label}>Nome do Produto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Camisa Oversized Fé"
          placeholderTextColor={Colors.textLight}
          value={productName}
          onChangeText={setProductName}
        />

        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descreva o produto..."
          placeholderTextColor={Colors.textLight}
          multiline={true}
          numberOfLines={4}
          value={productDescription}
          onChangeText={setProductDescription}
        />

        <Text style={styles.label}>Preço (R$):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 89.90"
          placeholderTextColor={Colors.textLight}
          keyboardType="decimal-pad"
          value={productPrice}
          onChangeText={setProductPrice}
        />

        <Text style={styles.label}>URL da Imagem:</Text>
        <TextInput
          style={styles.input}
          placeholder="Cole o link da imagem aqui"
          placeholderTextColor={Colors.textLight}
          value={productImage}
          onChangeText={setProductImage}
        />

        <Text style={styles.label}>Categoria:</Text>
        <View style={styles.categoryContainer}>
          {(['oversized', 'camiseta', 'moleton', 'babylook'] as const).map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryButton,
                productCategory === cat && styles.categoryButtonActive
              ]}
              onPress={() => setProductCategory(cat)}
            >
              <Text style={[
                styles.categoryText,
                productCategory === cat && styles.categoryTextActive
              ]}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.addButtonContainer}>
          <Button 
            title="ADICIONAR PRODUTO" 
            onPress={handleAddProduct} 
            variant="primary" 
          />
        </View>
      </View>

      {/* LISTA DE PRODUTOS */}
      <View style={styles.productsListContainer}>
        <Text style={styles.listTitle}>📦 Produtos Cadastrados ({products.length})</Text>
        
        {products.length === 0 ? (
          <Text style={styles.emptyText}>
            Nenhum produto cadastrado ainda.{'\n'}
            Adicione seu primeiro produto acima! 👆
          </Text>
        ) : (
          products.map((product) => (
            <View key={product.id} style={styles.productItem}>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
                <Text style={styles.productCategory}>
                  Categoria: {product.category}
                </Text>
                <Text style={styles.productDate}>
                  Adicionado em: {new Date(product.createdAt).toLocaleDateString('pt-BR')}
                </Text>
              </View>
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => handleDeleteProduct(product.id, product.name)}
              >
                <Text style={styles.deleteButtonText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  
  // ESTILOS DA TELA DE LOGIN
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    minHeight: '100%',
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 8,
  },
  loginSubtitle: {
    fontSize: 16,
    color: Colors.textLight,
    marginBottom: 32,
  },
  passwordInput: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    marginBottom: 24,
  },
  hintText: {
    marginTop: 16,
    fontSize: 14,
    color: Colors.textLight,
    fontStyle: 'italic',
  },

  // LOADING
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: Colors.textLight,
  },

  // ESTILOS DO HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  logoutButton: {
    fontSize: 16,
    color: Colors.secondary,
    fontWeight: '600',
  },

  // ESTILOS DO FORMULÁRIO
  formContainer: {
    backgroundColor: Colors.white,
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 8,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  categoryButtonActive: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
  },
  categoryText: {
    color: Colors.secondary,
    fontWeight: '600',
  },
  categoryTextActive: {
    color: Colors.white,
  },
  addButtonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },

  // ESTILOS DA LISTA DE PRODUTOS
  productsListContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: Colors.textLight,
    fontSize: 16,
    fontStyle: 'italic',
    paddingVertical: 20,
    lineHeight: 24,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginBottom: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: Colors.secondary,
    fontWeight: '600',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 4,
  },
  productDate: {
    fontSize: 11,
    color: Colors.textLight,
    marginTop: 2,
    fontStyle: 'italic',
  },
  deleteButton: {
    backgroundColor: '#FF4444',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  deleteButtonText: {
    fontSize: 20,
  },
});