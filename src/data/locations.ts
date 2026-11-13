export interface MapRegion {
  id: string;
  name: string;
  parentSlug: string;
  coords: [number, number];
  description: string;
  type: 'shomali' | 'jonoubi';
  articleSlug: string;
}

export const regionsData: MapRegion[] = [
  {
    id: 'garmdarreh-shomali',
    name: 'گرمدره شمالی',
    parentSlug: 'kordan-shomali',
    coords: [35.7580, 51.0820],
    description: 'بافت نوساز با برج‌ها و آپارتمان‌های مدرن، دسترسی آسان به بزرگراه شهید لشکری (جاده مخصوص).',
    type: 'shomali',
    articleSlug: 'guide-garmdarreh-shomali'
  },
  {
    id: 'amirkabir',
    name: 'بلوار امیرکبیر و مرکز شهر',
    parentSlug: 'kordan-markazi',
    coords: [35.7480, 51.0850],
    description: 'مرکز پرجنب‌وجوش گرمدره با دسترسی عالی به مراکز رفاهی، تجاری، بانک‌ها و خدمات شهری.',
    type: 'shomali',
    articleSlug: 'guide-amirkabir'
  },
  {
    id: 'garmdarreh-jonoubi',
    name: 'گرمدره جنوبی',
    parentSlug: 'kordan-jonoubi',
    coords: [35.7380, 51.0880],
    description: 'بافت آرام و مسکونی با دسترسی سریع به اتوبان تهران-کرج و ایستگاه مترو گرمدره.',
    type: 'jonoubi',
    articleSlug: 'guide-garmdarreh-jonoubi'
  },
  {
    id: 'koohak',
    name: 'کوهک گرمدره',
    parentSlug: 'kordan-jonoubi',
    coords: [35.7450, 51.0960],
    description: 'منطقه محبوب با مجتمع‌های مسکونی خوش‌ساخت و موقعیت عالی جهت سرمایه‌گذاری و سکونت.',
    type: 'jonoubi',
    articleSlug: 'guide-koohak'
  },
  {
    id: 'shahrak-shahed',
    name: 'شهرک شاهد و ناصریه',
    parentSlug: 'kordan-shomali',
    coords: [35.7520, 51.0740],
    description: 'شهرک‌های مسکونی آرام و منظم با دسترسی آسان به شریان‌های اصلی شهر.',
    type: 'shomali',
    articleSlug: 'guide-shahed'
  }
];
