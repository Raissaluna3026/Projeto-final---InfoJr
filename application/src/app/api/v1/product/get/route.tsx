import { prisma } from '../../../../../../prisma/Client/Prisma' 
import { NextResponse, NextRequest } from 'next/server';


export async function GET(req: NextRequest, res: NextResponse){
    const id = req.nextUrl.searchParams.getAll("id");

  try {
    const produto = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (!produto) {
      return NextResponse.json({ error: 'Produto não encontrado' }, {status: 404});
    }

    return NextResponse.json(produto);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, {status: 500});
  }
}