/*
  Warnings:

  - The values [CALCA] on the enum `TAG` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TAG_new" AS ENUM ('CALCAS', 'CAMISA', 'CASACOS', 'ACESSORIOS', 'MASCULINO', 'FEMININO');
ALTER TABLE "products" ALTER COLUMN "tags" TYPE "TAG_new"[] USING ("tags"::text::"TAG_new"[]);
ALTER TYPE "TAG" RENAME TO "TAG_old";
ALTER TYPE "TAG_new" RENAME TO "TAG";
DROP TYPE "TAG_old";
COMMIT;
