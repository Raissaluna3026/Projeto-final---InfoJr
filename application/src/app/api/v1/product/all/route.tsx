import { prisma } from '../../../../../../prisma/Client/Prisma' 
import { NextResponse, NextRequest } from 'next/server';


export async function GET(req: Request, res: NextResponse){
    try {
        const products = await prisma.product.findMany();
    
        return NextResponse.json(products);
        
    } catch (error) {
        console.error('Error fetching all products:', error);
        NextResponse.json({ msg: 'Internal Server Error' }, {status: 500});
    }
}