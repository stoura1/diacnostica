
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient({
  datasources: {
    db: { url: 'file:C:/Users/KING/Desktop/Nouveau dossier/diacnostica/prisma/dev.db' }
  }
});

function escapeSql(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'string') return `'${val.replace(/'/g, "''")}'`;
  if (val instanceof Date) return `'${val.toISOString()}'`;
  if (typeof val === 'object') return `'${JSON.stringify(val).replace(/'/g, "''")}'`;
  return val;
}

async function main() {
  console.log("-- Data Migration SQL");
  
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany();
  const quotes = await prisma.quoteRequest.findMany();
  const settings = await prisma.siteSetting.findMany();

  let sql = "";

  // 1. Categories (non-recursive insertion strategy)
  // First, insert all categories with parentId as NULL
  sql += "-- Categories (Top level)\n";
  for (const cat of categories) {
    sql += `INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES (${escapeSql(cat.id)}, ${escapeSql(cat.name)}, ${escapeSql(cat.slug)}, ${escapeSql(cat.description)}, NULL, ${escapeSql(cat.createdAt)}, ${escapeSql(cat.updatedAt)}, ${escapeSql(cat.image)});\n`;
  }

  // Update parentIds
  sql += "\n-- Update Category Parenthood\n";
  for (const cat of categories) {
    if (cat.parentId) {
      sql += `UPDATE "public"."Category" SET "parentId" = ${escapeSql(cat.parentId)} WHERE "id" = ${escapeSql(cat.id)};\n`;
    }
  }

  // 2. Products
  sql += "\n-- Products\n";
  for (const p of products) {
    sql += `INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES (${escapeSql(p.id)}, ${escapeSql(p.name)}, ${escapeSql(p.slug)}, ${escapeSql(p.brand)}, ${escapeSql(p.technicalDescription)}, ${escapeSql(p.specifications)}, ${escapeSql(p.pdfFile)}, ${escapeSql(p.images)}, ${escapeSql(p.categoryId)}, ${escapeSql(p.createdAt)}, ${escapeSql(p.updatedAt)});\n`;
  }

  // 3. Quotes
  sql += "\n-- QuoteRequests\n";
  for (const q of quotes) {
    sql += `INSERT INTO "public"."QuoteRequest" ("id", "customerName", "email", "phone", "message", "status", "productId", "createdAt", "updatedAt") VALUES (${escapeSql(q.id)}, ${escapeSql(q.customerName)}, ${escapeSql(q.email)}, ${escapeSql(q.phone)}, ${escapeSql(q.message)}, ${escapeSql(q.status)}, ${escapeSql(q.productId)}, ${escapeSql(q.createdAt)}, ${escapeSql(q.updatedAt)});\n`;
  }

  // 4. SiteSettings
  sql += "\n-- SiteSettings\n";
  for (const s of settings) {
    sql += `INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES (${escapeSql(s.id)}, ${escapeSql(s.key)}, ${escapeSql(s.value)}, ${escapeSql(s.type)}, ${escapeSql(s.createdAt)}, ${escapeSql(s.updatedAt)});\n`;
  }

  fs.writeFileSync('prisma/data-migration.sql', sql);
  console.log("SQL generated to prisma/data-migration.sql");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
