import { siteSettings } from '@/lib/db';
import AdminSiteSettingsClient from './AdminSiteSettingsClient';

export default async function AdminSettingsPage() {
  const settings = await siteSettings.findAll();
  return <AdminSiteSettingsClient settings={settings} />;
}
