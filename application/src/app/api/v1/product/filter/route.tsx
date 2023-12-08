import { prisma } from '../../../../../../prisma/Client/Prisma' 
import { NextResponse, NextRequest } from 'next/server';
import { TAG } from '@prisma/client';


export async function GET(req: NextRequest, res: NextResponse){
    try {
        const tags = req.nextUrl.searchParams.getAll("tags");
        const collections = req.nextUrl.searchParams.getAll("collections");

        console.log("tags: ", tags);
        console.log("collections: ", collections);

        if (!tags && !collections) {
          return NextResponse.json({ error: 'At least one of tags or collections must be provided' } , {status: 400});
        }
    
        // Consultar produtos com base nas tags e/ou coleções fornecidas
        const filteredProducts = await prisma.product.findMany({
          where: {
            tags: tags.length > 0 && tags[0] != ''
            ? { hasEvery: tags[0].split(",").map(tagString => tagString as TAG) } 
            : undefined, // Condição será ignorada se tags não estiver presente
            collection: collections.length > 0 && collections[0] != ''
              ? {
                  name: { in: collections[0].split(",").map((collection) => {return decodeURIComponent(collection)}) },
                }
              : undefined, // Condição será ignorada se collections não estiver presente
          },
        });
    
        return NextResponse.json(filteredProducts);
    } catch (error) {
        console.error('Error filtering products:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
    }
}