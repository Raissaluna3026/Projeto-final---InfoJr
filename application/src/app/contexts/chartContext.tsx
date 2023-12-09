'use client'
import { Product } from "@prisma/client";
import React, {ReactNode, useState} from "react";

interface ChartContextData {
    chartProducts: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: number) => void;
    removeAllProducts: () => void;
  }

interface ChartProviderProps {
    children: ReactNode;
}

export const ChartContext = React.createContext<ChartContextData>({
    chartProducts:[],
    addProduct: (product: Product) => null,
    removeProduct: (productId: number) => null,
    removeAllProducts: () => null
})

export const ChartProvider = ({children}: ChartProviderProps) => {
  const [chart, setChart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    const existingProduct = chart.find((p) => p.id === product.id);
    const updatedChart = [...chart];
    if (existingProduct) {
      // Se o produto já existe, você pode optar por não adicionar novamente ou incrementar a quantidade
      // optei por não adicionar novamente
      return;
    }
    updatedChart.push(product);
    setChart(updatedChart);
  };

  const removeProduct = (productId: number) => {
    setChart((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  const removeAllProducts = () => {
    setChart([]);
  };

  return(
    <ChartContext.Provider
      value={{
        chartProducts: chart,
        addProduct: addProduct,
        removeProduct: removeProduct,
        removeAllProducts: removeAllProducts,
      }}
    >
      {children}
    </ChartContext.Provider>
  )
}



