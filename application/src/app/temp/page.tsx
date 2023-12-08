"use client"
import { useState } from "react"

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import EditProd from "../components/editProd"


const s3 = new S3Client({
    region: "sa-east-1",
    credentials: {
        accessKeyId: "AKIA45PZ7ID23KUPPMGC",
        secretAccessKey: "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"
    }
})

const putObjectCommand = new PutObjectCommand({
    Bucket: "ecommerce-product-images-infojr",
    Key: 'test-file4'
})

/* eslint-disable */ 
const content = "sihdbaphsdb"
export default function temporaryComponent(){
    const [file, setFile] = useState<File | undefined>()
    const [fileURL, setFileUrl] = useState<string>()

    // function handleLinkToImage(file: File | undefined){
    //     if(file){
    //         setFile(file)
    //         console.log({"content": content, file,})
    //         setFileUrl(URL.createObjectURL(file))
    //     }
    // }

    // async function handleSubmit(){
    //     const myHeaders = new Headers(); 
        
    //     //myHeaders.append("Content-Type", "application/json")
    //     if(file){
    //         myHeaders.append("Content-Type", file?.type)
    //         await fetch('http://localhost:3000/api/v1/product/update', {
    //             headers: myHeaders,
    //             method: "POST",
    //             body: file
    //         })
    //     }
    // }

    async function handleSubmit(file: File | undefined){
        if(file){
            const signedUrl = await getSignedUrl(s3, putObjectCommand, {
                expiresIn: 60,
            })
        
            // console.log({
            //     "dhbasdb": "dihasgd", 
            //     data: data.body
            // })
        
            
        }
    }
    // body: JSON.stringify({
    //     fileURL,
    //     file,
    // }),

    return (
        <div>
            <form method="POST">
            </form>
                <input type="file" name="image" onChange={(e) => handleSubmit(e.target.files?.[0])}/>
                {/* <button onClick={() => handleSubmit()}>Send</button> */}
        </div>
    )
}