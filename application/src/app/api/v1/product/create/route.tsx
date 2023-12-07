import { NextApiResponse } from 'next';
import { prisma } from '../../../../../../prisma/Client/Prisma'
import { GENDER, PRODUCTTYPE, TAG } from "@prisma/client" 
import { NextResponse } from 'next/server';


enum Gender {
    MASCULINO = "MASCULINO",
    FEMININO = "FEMININO"
}

// enum PRODUCTTYPE {
//     CALCA = "CALCA",
//     CAMISA = "CAMISA",
//     CASACO = "CASACO",
//     ACESSORIO = "ACESSORIO",
// }

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
    size: string,
    name: string,
    totalPrice: number;
    discountPrice: number;
    images?: string[];
    gender: Gender;
    productType: PRODUCTTYPE;
    tags: Tags[];
    collection: string
}

export async function POST(req: Request, res: NextResponse){
    const data: Product = await req.json()

    if(!data.name){
        return NextResponse.json({ message: "Você deve inserir um nome válido!"}, {status: 400})       
    }

    if(!data.totalPrice || !data.discountPrice){
        return NextResponse.json({ message: "Você deve inserir um preço válido!"}, {status: 400})       
    }

    if(!data.gender){
        return NextResponse.json({ message: "Você deve inserir gênero!"}, {status: 400})       
    }

    try {
        //Busca id da coleção que receberá o produto
        const collection = await prisma.collection.findUnique({
            where: {
                name: data.collection
            }
        })

        if(!collection){
            throw Error()
        }
        
        //insere o produto na coleção correta
        const product = await prisma.product.create({
            data: {
                name: data.name,
                totalPrice: data.totalPrice,
                discountPrice: data.discountPrice,
                size: data.size,
                quantity: data.discountPrice,
                images: data.images,
                gender: data.gender,
                productType: PRODUCTTYPE.CAMISA,
                tags: [ TAG.CAMISA, TAG.MASCULINO],
                collectionId: collection.id
            }

        })    
        return NextResponse.json({message: "Produto inserido"}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Falha ao inserir elemento no banco de dados" }, {status: 500})
    }
    

}