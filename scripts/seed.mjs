import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding initial data...');

  // 1. Create Settings
  const settings = [
    { key: 'contact_email', value: 'contact@diagnostica.com', type: 'string' },
    { key: 'contact_phone', value: '+213 00 00 00 00', type: 'string' },
    { key: 'contact_address', value: '123 Lab Street, Algiers, Algeria', type: 'string' },
    { key: 'contact_hours', value: 'Mon - Fri: 8:00 AM – 6:00 PM', type: 'string' },
    { key: 'about_title', value: 'About Diagnostica', type: 'string' },
    { key: 'about_subtitle', value: 'Your trusted partner in medical laboratory excellence', type: 'string' },
    { key: 'about_content', value: 'Diagnostica is a leading provider of medical and laboratory equipment, ensuring accuracy, efficiency, and reliability in healthcare. We partner with world-renowned manufacturers to deliver cutting-edge diagnostic solutions to laboratories across Algeria and beyond.', type: 'text' },
    { key: 'about_mission', value: 'Our mission is to support healthcare professionals with reliable, state-of-the-art diagnostic equipment and outstanding after-sales service.', type: 'text' },
    { key: 'about_vision', value: 'To be the leading medical equipment distributor in North Africa, bridging the gap between global innovation and local healthcare needs.', type: 'text' },
    { key: 'company_name', value: 'Diagnostica', type: 'string' },
    { key: 'company_founded', value: '2010', type: 'string' },
    { key: 'company_clients', value: '500+', type: 'string' },
    { key: 'company_brands', value: '30+', type: 'string' },
  ];

  for (const s of settings) {
    await prisma.siteSetting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: { key: s.key, value: s.value, type: s.type }
    });
  }

  // 2. Create Categories
  const categoryData = [
    { name: 'BIOCHIMIE', slug: 'biochimie', desc: 'Expertise en analyses biochimiques', image: '/cat_biochimie_1776479785752.png' },
    { name: 'IMMUNOCHIMIE', slug: 'immunochimie', desc: 'Solutions avancées en immunodiagnostic', image: '/cat_immunochimie_1776479864652.png' },
    { name: 'HEMATOLOGIE', slug: 'hematologie', desc: 'Analyses hématologiques de précision', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800' },
    { name: 'HÉMOSTASE', slug: 'hemostase', desc: 'Suivi rigoureux de la coagulation', image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800' },
    { name: 'HPLC: (HbA1c)', slug: 'hplc-hba1c', desc: 'Chromatographie liquide haute performance', image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800' },
    { name: 'IONOGRAMME', slug: 'ionogramme', desc: 'Mesure précise des électrolytes', image: 'https://images.unsplash.com/photo-1579154391626-52ff6ea47761?auto=format&fit=crop&q=80&w=800' },
    { name: 'CENTRIFUGEUSES', slug: 'centrifugeuses', desc: 'Équipement de séparation de haute qualité', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
    { name: 'ACCESSOIRES: (Mixers)', slug: 'accessoires-mixers', desc: 'Instruments de mélange et accessoires', image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800' },
    { name: 'RÉACTIFS', slug: 'reactifs', desc: 'Gammes complètes de réactifs de laboratoire', image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=800' },
  ];

  const categories = [];
  for (const cat of categoryData) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, description: cat.desc, image: cat.image },
      create: { name: cat.name, slug: cat.slug, description: cat.desc, image: cat.image }
    });
    categories.push(created);
  }

  // 3. Create Products (Sample)
  await prisma.product.upsert({
    where: { slug: 'as-280' },
    update: { brand: 'Diagnostica', images: JSON.stringify(['/medical_analyzer_hero_1776479185582.png']) },
    create: {
      name: 'AS-280 Auto Chemistry Analyzer',
      slug: 'as-280',
      brand: 'Diagnostica',
      images: JSON.stringify(['/medical_analyzer_hero_1776479185582.png']),
      technicalDescription: 'Advanced fully automated chemistry analyzer ideal for medium to large laboratories. Offers high throughput and precision.',
      specifications: JSON.stringify([
        { key: 'Throughput', value: '280 tests/hour' },
        { key: 'Sample Types', value: 'Serum, Plasma, Urine' },
        { key: 'Reagent Positions', value: '40' }
      ]),
      categoryId: categories.find(c => c.slug === 'biochimie').id
    }
  });

  await prisma.product.upsert({
    where: { slug: 'hplc-analyzer' },
    update: { brand: 'Diagnostica', images: JSON.stringify(['https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800']) },
    create: {
      name: 'HPLC Analyzer 5000',
      slug: 'hplc-analyzer',
      brand: 'Diagnostica',
      images: JSON.stringify(['https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800']),
      technicalDescription: 'High-Performance Liquid Chromatography system for precise separation and analysis of compounds.',
      specifications: JSON.stringify([
        { key: 'Pump Type', value: 'Quaternary Gradient' },
        { key: 'Max Pressure', value: '6000 psi' },
        { key: 'Detector', value: 'UV-Vis' }
      ]),
      categoryId: categories.find(c => c.slug === 'hplc-hba1c').id
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
