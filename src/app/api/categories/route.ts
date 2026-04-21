import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { name, description, image } = await request.json();
    const baseSlug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    let slug = baseSlug;

    // Check if slug already exists and make it unique if necessary
    const existingCategory = await prisma.category.findUnique({ where: { slug } });
    if (existingCategory) {
      slug = `${baseSlug}-${Math.random().toString(36).substring(2, 7)}`;
    }

    const category = await prisma.category.create({
      data: { name, slug, description: description || null, image: image || null },
    });

    revalidatePath('/admin/categories');
    revalidatePath('/catalog');
    revalidatePath('/');

    return NextResponse.json({ category });
  } catch (error) {
    console.error('Create category error:', error);
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}
