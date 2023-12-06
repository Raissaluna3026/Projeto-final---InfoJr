import { prisma } from '../../../../../../prisma/Client/Prisma'
import { GENDER, PRODUCTTYPE, TAG } from "@prisma/client" 
import { NextResponse } from 'next/server';

enum Gender {
    MASCULINO = "MASCULINO",
    FEMININO = "FEMININO"
}


enum Tags {
    CALCA = "CALCA",
    CAMISA = "CAMISA",
    CASACO = "CASACO",
    ACESSORIO = "ACESSORIO",
    MASCULINO = "MASCULINO",
    FEMININO = "FEMININO"
}

interface Product {
    quantity: number;
    name: string,
    totalPrice: number;
    discountPrice: number;
    images?: string[];
    gender: Gender;
    productType: PRODUCTTYPE;
    tags: Tags[];
    collection: string
}

export async function DELETE(req: Request, res: NextResponse){
    const data: Product = await req.json()

    if(!data.name){
        return NextResponse.json({ message: "Você deve inserir um nome válido!"}, {status: 400})       
    }

    try {
        const findProduct = await prisma.product.findFirst({
            where: {
                name: data.name
            }
        })

        if(!findProduct){
            throw Error("Produto não cadastrado!")
        }
        
        //insere o produto na coleção correta
        const deleteProduct = await prisma.product.delete({
            where: {
                id: findProduct.id
            }
        })

        return NextResponse.json({message: "Produto removido"}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Falha ao remover elemento no banco de dados" }, {status: 500})
    }
    

}