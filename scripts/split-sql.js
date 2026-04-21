
const fs = require('fs');

const sql = fs.readFileSync('prisma/data-migration.sql', 'utf8');

// I'll manually split the SQL by the markers I found
const categoriesBlock = sql.slice(0, sql.indexOf('-- Products'));
const productsBlock = sql.slice(sql.indexOf('-- Products'), sql.indexOf('-- QuoteRequests'));
const restBlock = sql.slice(sql.indexOf('-- QuoteRequests'));

// Outputting each block to its own file to be read by the tools (or just log it so I can copy it)
fs.writeFileSync('prisma/data-batch1.sql', categoriesBlock);
fs.writeFileSync('prisma/data-batch2.sql', productsBlock);
fs.writeFileSync('prisma/data-batch3.sql', restBlock);

console.log("SQL split into 3 batches in prisma/data-batchX.sql");
