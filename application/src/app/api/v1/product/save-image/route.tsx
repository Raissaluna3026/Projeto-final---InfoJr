import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { randomUUID } from 'crypto';
import { NextRequest } from 'next/server';
import { prisma } from '../../../../../../prisma/Client/Prisma';
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
    Key: generateFileNameId()
})

const acceptedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp"
]

type payload = {
    id: string,
    images: string[]
}


export async function POST(req: NextRequest, res: Response){
    const data: payload = await req.json()

    console.log(data)

    const addLinksToImages = await prisma.product.update({
        where: {
            id: parseInt(data.id)
        },
        data: {
          images: data.images
        }
        }
      )

    return Response.json({msg: "imagens salvas"})
}