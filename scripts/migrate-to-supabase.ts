
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const sqliteUrl = "file:./prisma/dev.db";
const postgresUrl = process.env.DATABASE_URL;

async function migrate() {
  console.log("Starting migration...");

  // 1. Read from SQLite
  console.log("Reading data from SQLite...");
  const sqlitePrisma = new PrismaClient({
    datasources: {
      db: { url: sqliteUrl },
    },
  });

  const categories = await sqlitePrisma.category.findMany();
  const products = await sqlitePrisma.product.findMany();
  const quotes = await sqlitePrisma.quoteRequest.findMany();
  const settings = await sqlitePrisma.siteSetting.findMany();

  console.log(`Fetched: ${categories.length} categories, ${products.length} products, ${quotes.length} quotes, ${settings.length} settings.`);
  await sqlitePrisma.$disconnect();

  // 2. Write to Supabase (Postgres)
  console.log("Writing data to Supabase...");
  const pgPrisma = new PrismaClient({
    datasources: {
      db: { url: postgresUrl },
    },
  });

  // Categories (Need to handle parentId dependencies if any, but since they are all fetched we can just insert)
  // To avoid foreign key issues, we insert in order
  console.log("Migrating Categories...");
  // First pass: categories without parents
  for (const cat of categories) {
    await pgPrisma.category.create({
      data: {
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        image: cat.image,
        createdAt: cat.createdAt,
        updatedAt: cat.updatedAt,
      }
    });
  }
  
  // Second pass: update parents
  for (const cat of categories) {
    if (cat.parentId) {
      await pgPrisma.category.update({
        where: { id: cat.id },
        data: { parentId: cat.parentId }
      });
    }
  }

  console.log("Migrating Products...");
  for (const prod of products) {
    await pgPrisma.product.create({
      data: {
        id: prod.id,
        name: prod.name,
        slug: prod.slug,
        brand: prod.brand,
        technicalDescription: prod.technicalDescription,
        specifications: prod.specifications,
        pdfFile: prod.pdfFile,
        images: prod.images,
        categoryId: prod.categoryId,
        createdAt: prod.createdAt,
        updatedAt: prod.updatedAt,
      }
    });
  }

  console.log("Migrating Quote Requests...");
  for (const quote of quotes) {
    await pgPrisma.quoteRequest.create({
      data: {
        id: quote.id,
        customerName: quote.customerName,
        email: quote.email,
        phone: quote.phone,
        message: quote.message,
        status: quote.status,
        productId: quote.productId,
        createdAt: quote.createdAt,
        updatedAt: quote.updatedAt,
      }
    });
  }

  console.log("Migrating Site Settings...");
  for (const setting of settings) {
    await pgPrisma.siteSetting.create({
      data: {
        id: setting.id,
        key: setting.key,
        value: setting.value,
        type: setting.type,
        createdAt: setting.createdAt,
        updatedAt: setting.updatedAt,
      }
    });
  }

  console.log("Migration completed successfully!");
  await pgPrisma.$disconnect();
}

migrate().catch(async (e) => {
  console.error("Migration failed:", e);
  process.exit(1);
});
