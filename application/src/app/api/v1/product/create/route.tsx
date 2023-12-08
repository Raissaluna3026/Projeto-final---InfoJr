import { NextApiResponse } from 'next';
import { prisma } from '../../../../../../prisma/Client/Prisma'
import { GENDER, PRODUCTTYPE, TAG } from "@prisma/client" 
import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { randomUUID } from 'crypto';

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
    size: string,
    name: string,
    totalPrice: number;
    discountPrice: number;
    description: string;
    images?: File[],
    gender: Gender;
    productType: PRODUCTTYPE;
    tags: Tags[];
    collection: string
}

const generateFileNameId = () => (new Date + randomUUID())

const s3 = new S3Client({
    region: "sa-east-1",
    credentials: {
        accessKeyId: "AKIA45PZ7ID23KUPPMGC",
        secretAccessKey: "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"
    }
})

const putObjectCommand = new PutObjectCommand({
    Bucket: "ecommerce-product-images-infojr",
    Key: 'test-file3'
})

const acceptedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp"
]

export async function POST(req: Request, res: NextResponse){
    const data: Product = await req.json()

    const signedUrl = await getSignedUrl(s3, putObjectCommand, {
        expiresIn: 60,
    })

    await fetch(signedUrl, {
        method: "PUT",
        body: file, //passar arquivo de imagem
        headers: {
            "Content-Type": file.type //passar tipo do arquivo de imagem
        }

    })

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
                description: data.description,
                images: [signedUrl.split("?")[0]], //salva string da imagem guardada
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