// Serviço para salvar e carregar dados do AsyncStorage
// AsyncStorage é como um "baú" onde guardamos dados no celular

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/Product';

// Chave para salvar os produtos (como o nome do arquivo)
const PRODUCTS_KEY = '@santopresente:products';

// Classe que gerencia o armazenamento
class StorageService {
  
  // Função para SALVAR produtos
  async saveProducts(products: Product[]): Promise<boolean> {
    try {
      // Transforma o array de produtos em texto (JSON)
      const jsonValue = JSON.stringify(products);
      // Salva no AsyncStorage
      await AsyncStorage.setItem(PRODUCTS_KEY, jsonValue);
      console.log('✅ Produtos salvos com sucesso!');
      return true;
    } catch (error) {
      console.error('❌ Erro ao salvar produtos:', error);
      return false;
    }
  }

  // Função para CARREGAR produtos
  async loadProducts(): Promise<Product[]> {
    try {
      // Busca os dados salvos
      const jsonValue = await AsyncStorage.getItem(PRODUCTS_KEY);
      
      // Se não tem nada salvo, retorna array vazio
      if (jsonValue === null) {
        console.log('📦 Nenhum produto salvo ainda');
        return [];
      }
      
      // Transforma o texto de volta em array
      const products = JSON.parse(jsonValue);
      console.log(`✅ ${products.length} produtos carregados!`);
      return products;
    } catch (error) {
      console.error('❌ Erro ao carregar produtos:', error);
      return [];
    }
  }

  // Função para ADICIONAR um produto novo
  async addProduct(product: Product): Promise<boolean> {
    try {
      // Carrega os produtos existentes
      const products = await this.loadProducts();
      // Adiciona o novo produto
      products.push(product);
      // Salva tudo de novo
      return await this.saveProducts(products);
    } catch (error) {
      console.error('❌ Erro ao adicionar produto:', error);
      return false;
    }
  }

  // Função para DELETAR um produto
  async deleteProduct(productId: string): Promise<boolean> {
    try {
      // Carrega os produtos
      const products = await this.loadProducts();
      // Remove o produto com o ID especificado
      const updatedProducts = products.filter(p => p.id !== productId);
      // Salva a lista atualizada
      return await this.saveProducts(updatedProducts);
    } catch (error) {
      console.error('❌ Erro ao deletar produto:', error);
      return false;
    }
  }

  // Função para LIMPAR todos os produtos (útil para testes)
  async clearAllProducts(): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(PRODUCTS_KEY);
      console.log('🗑️ Todos os produtos foram removidos');
      return true;
    } catch (error) {
      console.error('❌ Erro ao limpar produtos:', error);
      return false;
    }
  }
}

// Exporta uma instância única do serviço
export default new StorageService();