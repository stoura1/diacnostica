import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// POST /api/products - Create new product
export async function POST(request: NextRequest) {
  try {
    const { name, brand, technicalDescription, categoryId, images } = await request.json();

    const baseSlug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    let slug = baseSlug;
    
    // Check if slug already exists and make it unique if necessary
    const existingProduct = await prisma.product.findUnique({ where: { slug } });
    if (existingProduct) {
      slug = `${baseSlug}-${Math.random().toString(36).substring(2, 7)}`;
    }

    const product = await prisma.product.create({
      data: {
        name,
        brand: brand || null,
        slug,
        technicalDescription: technicalDescription || null,
        categoryId,
        images: JSON.stringify(images || []),
        specifications: '[]',
      },
    });

    revalidatePath('/admin/products');
    revalidatePath('/catalog');

    return NextResponse.json({ product });
  } catch (error) {
    console.error('Create product error:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
