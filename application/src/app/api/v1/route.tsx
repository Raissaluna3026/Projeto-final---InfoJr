
//TODO: Consultar todos os produtos cadastrados
//TODO: Consultar produtos por coleção
//TODO: Consultar produto específico: (quantidade, foto, tags, preço, desconto
//TODO: tamanho, descrição, )

import { NextResponse } from "next/server"
import { prisma } from "../../../../prisma/Client/Prisma"


enum Gender {
    MASCULINO = "MASCULINO",
    FEMININO = "FEMININO"
}

// export async function POST(req: Request, res: Response){ 
//     const temp = await req.json()
    
//     const collection = await prisma.collection.create({
//         data: {
//             name: "roupas"
//         }
//     })

//     return NextResponse.json({"msg": "inserido"})
// }

export function GET(req: Request){
    return NextResponse.json({message: "test"})
}