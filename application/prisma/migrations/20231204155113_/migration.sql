/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MASCULINO', 'FEMININO');

-- CreateEnum
CREATE TYPE "PRODUCTTYPE" AS ENUM ('CALCA', 'CAMISA', 'CASACOS', 'ACESSORIOS', 'MASCULINO', 'FEMININO');

-- CreateEnum
CREATE TYPE "TAG" AS ENUM ('CALCA', 'CAMISA', 'CASACOS', 'ACESSORIOS', 'MASCULINO', 'FEMININO');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "discountPrice" DOUBLE PRECISION NOT NULL,
    "images" TEXT[],
    "gender" "GENDER" NOT NULL,
    "productType" "PRODUCTTYPE" NOT NULL,
    "tags" "TAG"[],
    "collectionId" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collections" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collections_name_key" ON "collections"("name");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
