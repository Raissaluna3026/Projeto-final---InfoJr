import { prisma } from "../../../../../prisma/Client/Prisma";
import { NextResponse, NextRequest } from "next/server";


// cria uma coleção
export async function POST(req: Request, res: Response) {
  const { name } = await req.json()
  try {
    // Verificar se a coleção já existe
    const existingCollection = await prisma.collection.findUnique({
      where: { 
        name: name 
      },
    });

    if (existingCollection) {
      return NextResponse.json({msg: "Coleção já existente"}, {status: 404})
    }

    // Criar a nova coleção
    await prisma.collection.create({
      data: {
        name,
      },
    });

    return NextResponse.json({msg: "Coleção criada"}, {status: 201})
  } catch (error) {
    console.error('Error creating collection:', error);
    return NextResponse.json({msg: 'Internal Server Error'}, {status: 500})
  }
}


export async function DELETE(req: NextRequest, res: Response) {
  const name  = req.nextUrl.searchParams.get("name");

  try {
    // Verificar se a coleção existe
    const collection = await prisma.collection.findUnique({
      where: { name: name as string },
    });

    if (!collection) {
      return NextResponse.json({ msg: 'Collection not found' }, {status: 404});
    }

    // Deletar a coleção
    await prisma.collection.delete({
      where: { name: name as string },
    });

    return NextResponse.json({msg: "coleção deletada"}, {status: 201});
  } catch (error) {
    console.error('Error deleting collection by name:', error);
    NextResponse.json({ msg: 'Internal Server Error' }, {status: 500});
  }
}


// retorna produtos da coleção
export async function GET(req: NextRequest, res: Response) {
  const name  = req.nextUrl.searchParams.get("name");
  
  try {
    const collection = await prisma.collection.findUnique({
      where: {
        name: String(name),
      },
      include: {
        products: true,
      },
    });

    if (!collection) {
      return NextResponse.json({ msg: `Collection ${name} not found` }, {status: 404});
    }
    return NextResponse.json(collection.products);

  } catch (error) {
    console.error("Erro ao obter os produtos da coleção:", error);
    NextResponse.json({ msg: "Erro interno do servidor" }, {status: 500});
  }
}



// muda a coleção do produto
export async function PUT(req: Request, res: Response) {
  const { productName, fromCollectionName, toCollectionName } = await req.json();

  try {
    // Encontrar o produto pelo nome
    const product = await prisma.product.findFirst({
      where: { name: productName },
    });

    if (!product) {
      return NextResponse.json({ msg: 'Product not found' }, {status: 404});
    }

    // Encontrar a coleção original pelo nome
    const fromCollection = await prisma.collection.findUnique({
      where: { name: fromCollectionName },
    });

    if (!fromCollection) {
      return NextResponse.json({ msg: 'Original collection not found' }, {status: 404});
    }

    // Encontrar a nova coleção pelo nome
    const toCollection = await prisma.collection.findUnique({
      where: { name: toCollectionName },
    });

    if (!toCollection) {
      return NextResponse.json({ msg: 'New collection not found' }, {status: 404});
    }

    await prisma.product.update({
      where: { id: product.id },
      data: {
        collectionId: toCollection.id,
      },
    });

    return NextResponse.json({ message: 'Product moved to the new collection successfully' }, {status: 200});
  } catch (error) {
    console.error('Error moving product to a new collection by name:', error);
    NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
  }
}

