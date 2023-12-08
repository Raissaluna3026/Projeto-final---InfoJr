import { Product } from "@prisma/client";
import React from "react";

interface ChartContextData {
    chartProducts: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: number) => void;
    removeAllProducts: () => void;
  }


const ChartContext = React.createContext<ChartContextData>({
    chartProducts:[],
    addProduct: (product: Product) => null,
    removeProduct: (productId: number) => null,
    removeAllProducts: () => null
})

export const ChartProvider = ChartContext.Provider;

export default ChartContext;