import { NextApiResponse } from 'next';
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

type Stock = {
    P?: string,
    M?: string,
    G?: string,
    GG?: string,
    XGG?: string,
  }
interface Product {
    quantity: string;
    name: string,
    stockSize: Stock[];
    totalPrice: string;
    discountPrice: string;
    images?: File[],
    gender: Gender;
    productType: PRODUCTTYPE;
    tags: Tags[];
    collection: string,
    description: string;
}


export async function POST(req: Request, res: NextResponse){
    const data: Product = await req.json()
    data.gender = Gender.MASCULINO
    data.productType = PRODUCTTYPE.CAMISA
    

    if(!data.name){
        return NextResponse.json({ message: "Você deve inserir um nome válido!"}, {status: 400})       
    }

    if(!data.totalPrice || !data.discountPrice){
        return NextResponse.json({ message: "Você deve inserir um preço válido!"}, {status: 400})       
    }

    if(!data.gender){
        return NextResponse.json({ message: "Você deve inserir gênero!"}, {status: 400})       
    }

    // console.log(parseFloat(data.totalPrice))
    // return NextResponse.json({message: "Produto inserido"}, {status: 201})
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
        //adicionar stock
        //stock: data.stockSize,
        console.log(data)
        const product = await prisma.product.create({
            data: {
                name: data.name,
                totalPrice: parseFloat(data.totalPrice),
                discountPrice: parseFloat(data.discountPrice),
                quantity: 20, //Não mexe
                gender: data.gender,// não mexe
                productType: PRODUCTTYPE.CAMISA, // não mexe
                tags: [ TAG.CAMISA, TAG.MASCULINO ],
                collectionId: collection.id,
                size: "M:3,G:10,GG:15,XGG:12",
                description: data.description
        }
        })    
        return NextResponse.json({message: "Produto inserido", id: product.id}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Falha ao inserir elemento no banco de dados" }, {status: 500})
    }
    

}