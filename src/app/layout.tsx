'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container } from '@/components/bootstrap'
import Header from './header/page'
import Footer from './footer/page'
import { useContext } from 'react'
import ProductContext from '@/contexts/products'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { products,recent,cart } = useContext(ProductContext);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  )
}
