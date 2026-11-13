import { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { defaultSettings } from '@/data';

const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mammdo38.github.io/amlak-sadr'}/contact`;

export const metadata: Metadata = {
  title: "تماس با ما | دپارتمان املاک صدر گرمدره",
  description: "راه‌های ارتباطی، تلفن‌های تماس، آدرس دفتر و فرم ثبت درخواست مشاوره ملکی دپارتمان املاک صدر در گرمدره",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "تماس با ما | دپارتمان املاک صدر گرمدره",
    description: "راه‌های ارتباطی، تلفن‌های تماس، آدرس دفتر و فرم ثبت درخواست مشاوره ملکی دپارتمان املاک صدر در گرمدره",
    url: url,
    type: "website",
    locale: "fa_IR",
  },
};

export const dynamic = 'force-static';

async function getSettings() {
  try {
    const res = await fetch('http://localhost:5000/api/settings', { cache: 'no-store' });
    if (!res.ok) return defaultSettings;
    const data = await res.json();
    return data.success && data.data ? data.data : defaultSettings;
  } catch (e) {
    return defaultSettings;
  }
}

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <Suspense fallback={<div className="min-h-screen pt-[120px] text-center">در حال بارگذاری...</div>}>
      <ContactClient settings={settings} />
    </Suspense>
  );
}
