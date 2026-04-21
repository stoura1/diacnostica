import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// PATCH /api/categories/[id] - Update category image
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const data: any = {
      ...(body.image !== undefined && { image: body.image }),
      ...(body.name !== undefined && { name: body.name }),
      ...(body.description !== undefined && { description: body.description }),
    };

    if (body.name) {
      const baseSlug = body.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      let slug = baseSlug;
      // Check if slug already exists on another category
      const existingCategory = await prisma.category.findFirst({ where: { slug, id: { not: id } } });
      if (existingCategory) {
        slug = `${baseSlug}-${Math.random().toString(36).substring(2, 7)}`;
      }
      data.slug = slug;
    }

    const category = await prisma.category.update({
      where: { id },
      data,
    });

    revalidatePath('/admin/categories');
    revalidatePath('/catalog');
    revalidatePath('/');

    return NextResponse.json({ category });
  } catch (error) {
    console.error('Update category error:', error);
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
  }
}

// DELETE /api/categories/[id] - Delete category
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.category.delete({ where: { id } });

    revalidatePath('/admin/categories');
    revalidatePath('/catalog');
    revalidatePath('/');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete category error:', error);
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
  }
}
