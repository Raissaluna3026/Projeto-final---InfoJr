import { Product } from '@prisma/client';
import { prisma } from '../../../../../../prisma/Client/Prisma' 
import { NextResponse, NextRequest } from 'next/server';


interface UpdateProductRequest {
    productId: number;
    newData: Partial<Product>; // Utilize a interface do Prisma para Product para garantir consistência
}

export async function PUT(req: Request, res: NextResponse){
    try {
        const { productId, newData }: UpdateProductRequest  = await req.json();
    
        if (!productId || !newData) {
          return NextResponse.json({ error: 'Invalid request body' }, {status: 400});
        }
    
        // Verificar se o produto existe
        const existingProduct = await prisma.product.findUnique({
          where: { id: productId },
        });
    
        if (!existingProduct) {
          return NextResponse.json({ error: 'Product not found' }, {status: 404});
        }
    
        // Atualizar os dados do produto
        const updatedProduct = await prisma.product.update({
          where: { id: productId },
          data: newData,
        });

        return NextResponse.json(updatedProduct);

    } catch (error) {
        console.error('Error updating product:', error);
        NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
    }
}