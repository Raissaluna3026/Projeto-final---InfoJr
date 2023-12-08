import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import multer from "multer"
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'


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

// const storage = multer.diskStorage({
//     destination: function (req, file, cb){
//         cb(null, "/app/Uploads")
//     },
//     filename: function (req, file, cb){
//         cb(null, new Date().toISOString() + '-' + file.originalname)
//     }
// })

// const upload = multer({
//     storage: storage,
    // limits: {fileSize: 10 * 1024 * 1024},
// })

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest,  event: NextFetchEvent) {
    const data: NextRequest = await request
    // console.log(data.fileUrl.slice(5, data.length))

    const signedUrl = await getSignedUrl(s3, putObjectCommand, {
        expiresIn: 60,
    })

    // console.log({
    //     "dhbasdb": "dihasgd", 
    //     data: data.body
    // })

    // await fetch(signedUrl, {
    //     method: "PUT",
    //     body: data.body,
    //     headers: {
    //         "Content-Type": data.body?.type
    //     }

    // })
    console.log(signedUrl)

    // return 
}

export const config = {
    matcher: '/api/v1/product/update',
}