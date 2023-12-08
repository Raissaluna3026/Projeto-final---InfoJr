"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Body from './components/body'
import Header from './components/header';
import Footer from './components/footer';
import { ChartProvider } from './contexts/chartContext';
import { useState } from 'react';
import { Product } from '@prisma/client';

export default function Home() {
  const [chart, setChart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    const produtoExistente = chart.find((p) => p.id === product.id);

    if (produtoExistente) {
      // Se o produto já existe, você pode optar por não adicionar novamente ou incrementar a quantidade
      // optei por não adicionar novamente
      return;
    }
  
    setChart((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (productId: number) => {
    setChart((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  const removeAllProducts = () => {
    setChart([]);
  };
  
  return (
    <ChartProvider
      value={{
        chartProducts: chart,
        addProduct: addProduct,
        removeProduct: removeProduct,
        removeAllProducts: removeAllProducts
      }}
    >
      <main className={styles.main}>
        <Header />
        <Body />
        <Footer />
      </main>
    </ChartProvider>
    
  )
}
