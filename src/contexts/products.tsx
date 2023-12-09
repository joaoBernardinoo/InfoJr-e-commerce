"use client"
import React from 'react';
import { Product } from '@/types/products';
import { ProductImage } from '@/enums/product_images';

interface ContextData {
  products: Product[];
  recent: Product[];
  cart: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setRecent: React.Dispatch<React.SetStateAction<Product[]>>;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}
interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductContext = React.createContext<ContextData>({
  products: [],
  recent: [],
  cart: [],
  setProducts: () => {},
  setRecent: () => {},
  setCart: () => {},
});

const produto = [
  {
    id: 1,
    name: 'Blvck Mohair Branded Sweater HOMEPAGE',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Mohair1, ProductImage.Mohair2, ProductImage.Mohair3],
  },
  {
    id: 2,
    name: 'Blvck Evil Twin Teddy Bear Hoodie',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Evil1, ProductImage.Evil2],
  },
  {
    id: 3,
    name: "'Blvck x Keith Haring' Heart Cardigan",
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Keith1],
  },
  {
    id: 4,
    name: "'Blvck x Keith Haring' Heart Cardigan",
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Haring1],
  },
  {
    id: 5,
    name: 'Blvck Blazer Dress',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Blazer1],
  },
  {
    id: 6,
    name: 'Blvck Mohair Branded Sweater',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Bandana1],
  },
];

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = React.useState<Product[]>(produto);
  const [recent, setRecent] = React.useState<Product[]>([]);
  const [cart, setCart] = React.useState<Product[]>([]);

  return (
    <ProductContext.Provider value={
      {
        products,
        recent,
        cart,
        setProducts,
        setRecent,
        setCart,
      }
    }>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;