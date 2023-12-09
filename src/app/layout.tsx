'use client';
import { Inter } from 'next/font/google';
import { Container } from '@/components/bootstrap';
import Header from './header/page';
import Footer from './footer/page';
import { ProductImage } from '@/enums/product_images';
import produtos from './imagens/cards_produtos/card1.png';

import ProductContext from '@/contexts/products';
import { useContext } from 'react';

import { ProductProvider } from '@/contexts/products';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { products, recent, cart } = useContext(ProductContext);
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </ProductProvider>
      </body>
    </html>
  );
}
