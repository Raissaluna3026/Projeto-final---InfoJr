import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import multer from "multer"

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const data = await request.json()
    console.log(data)
    

try {
        const storage = multer.diskStorage({
            destination: function (req, file, cb){
                cb(null, "/app/Uploads")
            },
            filename: function (req, file, cb){
                cb(null, new Date().toISOString() + '-' + file.originalname)
            }
        })
    
    
            const upload = multer({
                storage: storage,
                // limits: {fileSize: 10 * 1024 * 1024},
            })
            
            await upload.single("image")
} catch (error) {
        console.log(error)
}

    return NextResponse.json({msg: "passou no middleware"})
}

export const config = {
    matcher: '/api/v1/product/update',
}