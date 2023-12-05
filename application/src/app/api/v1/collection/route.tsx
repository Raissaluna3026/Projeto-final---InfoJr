import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/Client/Prisma";
import { channel } from "diagnostics_channel";
import { NextResponse } from "next/server";


// retorna produtos da coleção
async function handleGetCollection(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
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
      return res.status(404).json({ error: 'Collection not found' });
    }
    res.status(200).json(collection.products);

  } catch (error) {
    console.error("Erro ao obter os produtos da coleção:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

// cria uma coleção
export async function POST(req: Response, res: NextApiResponse) {
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
    const newCollection = await prisma.collection.create({
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

// muda a coleção do produto
async function handleChangeProductCollection(req: NextApiRequest, res: NextApiResponse) {
  const { productName, fromCollectionName, toCollectionName } = req.body;

  try {
    // Encontrar o produto pelo nome
    const product = await prisma.product.findFirst({
      where: { name: productName },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Encontrar a coleção original pelo nome
    const fromCollection = await prisma.collection.findUnique({
      where: { name: fromCollectionName },
    });

    if (!fromCollection) {
      return res.status(404).json({ error: 'Original collection not found' });
    }

    // Encontrar a nova coleção pelo nome
    const toCollection = await prisma.collection.findUnique({
      where: { name: toCollectionName },
    });

    if (!toCollection) {
      return res.status(404).json({ error: 'New collection not found' });
    }

    // Desconectar o produto da coleção original
    await prisma.collection.update({
      where: { id: fromCollection.id },
      data: {
        products: {
          disconnect: {
            id: product.id,
          },
        },
      },
    });

    // Conectar o produto à nova coleção
    await prisma.collection.update({
      where: { id: toCollection.id },
      data: {
        products: {
          connect: {
            id: product.id,
          },
        },
      },
    });

    res.status(200).json({ message: 'Product moved to the new collection successfully' });
  } catch (error) {
    console.error('Error moving product to a new collection by name:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}