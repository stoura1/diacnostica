// @ts-nocheck
/**
 * Dual-Sync Database Layer
 * 
 * READ:  Local SQLite (Prisma) → fallback to Supabase Cloud
 * WRITE: Both simultaneously (local + cloud) via Promise.allSettled
 * 
 * This ensures data consistency across local and cloud environments.
 */

import prisma from './prisma';
import { supabase } from './supabase';

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

/** Try local first, fall back to cloud on error */
async function readLocal<T>(localFn: () => Promise<T>, cloudFn: () => Promise<T>): Promise<T> {
  try {
    const result = await localFn();
    return result;
  } catch (e) {
    console.warn('[DB] Local read failed, falling back to Supabase:', (e as Error).message);
    return cloudFn();
  }
}

/** Write to both local and cloud simultaneously */
async function writeBoth(
  localFn: () => Promise<any>,
  cloudFn: () => Promise<any>
): Promise<void> {
  const [localResult, cloudResult] = await Promise.allSettled([localFn(), cloudFn()]);

  if (localResult.status === 'rejected') {
    console.error('[DB] Local write failed:', localResult.reason);
  }
  if (cloudResult.status === 'rejected') {
    console.error('[DB] Cloud write failed:', cloudResult.reason);
  }
}

// ─────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────

export const categories = {
  /** Fetch all categories ordered by name */
  async findAll(): Promise<any[]> {
    return readLocal(
      () => prisma.category.findMany({ orderBy: { name: 'asc' } }),
      async () => {
        const { data } = await supabase.from('Category').select('*').order('name', { ascending: true });
        return data || [];
      }
    );
  },

  /** Fetch a single category by slug */
  async findBySlug(slug: string): Promise<any | null> {
    return readLocal(
      () => prisma.category.findUnique({ where: { slug } }),
      async () => {
        const { data } = await supabase.from('Category').select('*').eq('slug', slug).single();
        return data || null;
      }
    );
  },

  /** Create a new category in both local and cloud */
  async create(data: { id: string; name: string; slug: string; description?: string; image?: string }) {
    await writeBoth(
      () => prisma.category.create({ data }),
      () => supabase.from('Category').insert([data])
    );
  },

  /** Update a category in both local and cloud */
  async update(id: string, data: Partial<{ name: string; slug: string; description: string; image: string }>) {
    await writeBoth(
      () => prisma.category.update({ where: { id }, data }),
      () => supabase.from('Category').update(data).eq('id', id)
    );
  },

  /** Delete a category from both local and cloud */
  async delete(id: string) {
    await writeBoth(
      () => prisma.category.delete({ where: { id } }),
      () => supabase.from('Category').delete().eq('id', id)
    );
  },
};

// ─────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────

export const products = {
  /** Fetch all products with optional filters */
  async findAll(filters?: { categoryId?: string; search?: string }): Promise<any[]> {
    return readLocal(
      async () => {
        const where: any = {};
        if (filters?.categoryId) where.categoryId = filters.categoryId;
        if (filters?.search) {
          where.OR = [
            { name: { contains: filters.search } },
            { brand: { contains: filters.search } },
          ];
        }
        return prisma.product.findMany({
          where,
          include: { Category: true },
          orderBy: { createdAt: 'desc' },
        });
      },
      async () => {
        let query = supabase.from('Product').select('*, Category(*)').order('createdAt', { ascending: false });
        if (filters?.categoryId) query = query.eq('categoryId', filters.categoryId);
        if (filters?.search) query = query.or(`name.ilike.%${filters.search}%,brand.ilike.%${filters.search}%`);
        const { data } = await query;
        return data || [];
      }
    );
  },

  /** Fetch a single product by slug */
  async findBySlug(slug: string): Promise<any | null> {
    return readLocal(
      () => prisma.product.findUnique({ where: { slug }, include: { Category: true } }),
      async () => {
        const { data } = await supabase.from('Product').select('*, Category(*)').eq('slug', slug).single();
        return data || null;
      }
    );
  },

  /** Create a new product in both local and cloud */
  async create(data: {
    id: string; name: string; slug: string; brand?: string;
    technicalDescription?: string; specifications?: string;
    pdfFile?: string; images?: string; categoryId: string;
  }) {
    await writeBoth(
      () => prisma.product.create({ data }),
      () => supabase.from('Product').insert([data])
    );
  },

  /** Update a product in both local and cloud */
  async update(id: string, data: Partial<any>) {
    await writeBoth(
      () => prisma.product.update({ where: { id }, data }),
      () => supabase.from('Product').update(data).eq('id', id)
    );
  },

  /** Delete a product from both local and cloud */
  async delete(id: string) {
    await writeBoth(
      () => prisma.product.delete({ where: { id } }),
      () => supabase.from('Product').delete().eq('id', id)
    );
  },
};

// ─────────────────────────────────────────────
// QUOTE REQUESTS
// ─────────────────────────────────────────────

export const quoteRequests = {
  /** Fetch all quote requests */
  async findAll(): Promise<any[]> {
    return readLocal(
      () => prisma.quoteRequest.findMany({
        orderBy: { createdAt: 'desc' },
        include: { Product: true },
      }),
      async () => {
        const { data } = await supabase
          .from('QuoteRequest')
          .select('*, Product(*)')
          .order('createdAt', { ascending: false });
        return data || [];
      }
    );
  },

  /** Count pending quotes */
  async countPending(): Promise<number> {
    return readLocal(
      () => prisma.quoteRequest.count({ where: { status: 'pending' } }),
      async () => {
        const { count } = await supabase
          .from('QuoteRequest')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'pending');
        return count || 0;
      }
    );
  },

  /** Create a new quote request in both local and cloud */
  async create(data: {
    id: string; customerName: string; email: string;
    phone?: string; message?: string; productId?: string;
  }) {
    await writeBoth(
      () => prisma.quoteRequest.create({ data }),
      () => supabase.from('QuoteRequest').insert([data])
    );
  },

  /** Update quote status in both local and cloud */
  async updateStatus(id: string, status: string) {
    await writeBoth(
      () => prisma.quoteRequest.update({ where: { id }, data: { status } }),
      () => supabase.from('QuoteRequest').update({ status }).eq('id', id)
    );
  },

  /** Delete a quote request from both local and cloud */
  async delete(id: string) {
    await writeBoth(
      () => prisma.quoteRequest.delete({ where: { id } }),
      () => supabase.from('QuoteRequest').delete().eq('id', id)
    );
  },
};

// ─────────────────────────────────────────────
// SITE SETTINGS
// ─────────────────────────────────────────────

export const siteSettings = {
  /** Fetch all site settings */
  async findAll(): Promise<any[]> {
    return readLocal(
      () => prisma.siteSetting.findMany({ orderBy: { key: 'asc' } }),
      async () => {
        const { data } = await supabase.from('SiteSetting').select('*').order('key', { ascending: true });
        return data || [];
      }
    );
  },

  /** Upsert a site setting in both local and cloud */
  async upsert(id: string, key: string, value: string, type = 'string') {
    await writeBoth(
      () => prisma.siteSetting.upsert({
        where: { key },
        update: { value },
        create: { id, key, value, type },
      }),
      async () => {
        const { data: existing } = await supabase.from('SiteSetting').select('id').eq('key', key).single();
        if (existing) {
          await supabase.from('SiteSetting').update({ value }).eq('key', key);
        } else {
          await supabase.from('SiteSetting').insert([{ id, key, value, type }]);
        }
      }
    );
  },
};
