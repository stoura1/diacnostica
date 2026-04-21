const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({});

async function main() {
  console.log('Seeding initial data...');

  // 1. Create Settings
  await prisma.siteSetting.upsert({
    where: { key: 'contact_email' },
    update: {},
    create: { key: 'contact_email', value: 'contact@diacnostica.com', type: 'string' }
  });
  await prisma.siteSetting.upsert({
    where: { key: 'contact_phone' },
    update: {},
    create: { key: 'contact_phone', value: '+213 00 00 00 00', type: 'string' }
  });
  await prisma.siteSetting.upsert({
    where: { key: 'about_us' },
    update: {},
    create: { key: 'about_us', value: 'Diacnostica is a leading provider of medical and laboratory equipment, ensuring accuracy, efficiency, and reliability in healthcare.', type: 'text' }
  });

  // 2. Create Categories
  const catReactifs = await prisma.category.upsert({
    where: { slug: 'reactifs' },
    update: {},
    create: { name: 'Réactifs', slug: 'reactifs', description: 'Laboratory Reagents' }
  });

  const catBiochimie = await prisma.category.upsert({
    where: { slug: 'biochimie' },
    update: {},
    create: { name: 'Biochimie', slug: 'biochimie', description: 'Biochemistry instrumentation' }
  });

  const catHemato = await prisma.category.upsert({
    where: { slug: 'hematologie' },
    update: {},
    create: { name: 'Hématologie', slug: 'hematologie', description: 'Hematology instrumentation' }
  });

  // 3. Create Products
  await prisma.product.upsert({
    where: { slug: 'as-280' },
    update: {},
    create: {
      name: 'AS-280 Auto Chemistry Analyzer',
      slug: 'as-280',
      brand: 'Diacnostica',
      technicalDescription: 'Advanced fully automated chemistry analyzer ideal for medium to large laboratories. Offers high throughput and precision.',
      specifications: JSON.stringify([
        { key: 'Throughput', value: '280 tests/hour' },
        { key: 'Sample Types', value: 'Serum, Plasma, Urine' },
        { key: 'Reagent Positions', value: '40' }
      ]),
      categoryId: catBiochimie.id
    }
  });

  await prisma.product.upsert({
    where: { slug: 'hplc-analyzer' },
    update: {},
    create: {
      name: 'HPLC Analyzer 5000',
      slug: 'hplc-analyzer',
      brand: 'Diacnostica',
      technicalDescription: 'High-Performance Liquid Chromatography system for precise separation and analysis of compounds.',
      specifications: JSON.stringify([
        { key: 'Pump Type', value: 'Quaternary Gradient' },
        { key: 'Max Pressure', value: '6000 psi' },
        { key: 'Detector', value: 'UV-Vis' }
      ]),
      categoryId: catBiochimie.id
    }
  });

  console.log('Seeding finished.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
