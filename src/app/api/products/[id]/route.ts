import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
// PATCH /api/products/[id] - Update product
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { name, brand, technicalDescription, categoryId, images } = await request.json();

    const data: any = {
      ...(brand !== undefined && { brand }),
      ...(technicalDescription !== undefined && { technicalDescription }),
      ...(categoryId !== undefined && { categoryId }),
      ...(images !== undefined && { images: JSON.stringify(images) }),
    };

    if (name) {
      data.name = name;
      const baseSlug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      let slug = baseSlug;
      
      const existingProduct = await prisma.product.findFirst({ where: { slug, id: { not: id } } });
      if (existingProduct) {
        slug = `${baseSlug}-${Math.random().toString(36).substring(2, 7)}`;
      }
      data.slug = slug;
    }

    const product = await prisma.product.update({
      where: { id },
      data,
    });

    revalidatePath('/admin/products');
    revalidatePath('/catalog');
    revalidatePath(`/catalog/${product.slug}`);

    return NextResponse.json({ product });
  } catch (error) {
    console.error('Update product error:', error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

// DELETE /api/products/[id] - Delete product
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.product.delete({ where: { id } });

    revalidatePath('/admin/products');
    revalidatePath('/catalog');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete product error:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
