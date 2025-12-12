// Define como um produto deve ser
// É tipo um "molde" que todo produto precisa seguir

export interface Product {
  id: string; // Identificador único (como um CPF do produto)
  name: string; // Nome do produto (ex: "Camisa Oversized Fé")
  description: string; // Descrição (ex: "Camisa confortável...")
  price: number; // Preço (ex: 89.90)
  imageUrl: string; // Link da imagem do produto
  category: 'oversized' | 'camiseta' | 'moleton' | 'babylook'; // Categoria
  createdAt: Date; // Data que foi criado
}