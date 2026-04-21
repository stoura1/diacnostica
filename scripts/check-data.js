
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.count();
  const products = await prisma.product.count();
  const quotes = await prisma.quoteRequest.count();
  const settings = await prisma.siteSetting.count();
  
  console.log(JSON.stringify({
    categories,
    products,
    quotes,
    settings
  }, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
