import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import MapWrapper from '@/components/MapWrapper';

export const metadata: Metadata = {
  title: 'نقشه تعاملی مناطق گرمدره | راهنمای کامل محله‌های گرمدره البرز',
  description: 'نقشه کامل و تعاملی محله‌های مختلف گرمدره شامل گرمدره شمالی، جنوبی، بلوار امیرکبیر، کوهک و شهرک شاهد همراه با آگهی‌های آپارتمان و باغ‌ویلا.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://badizvilla.ir'}/map`,
  }
};

export default function MapPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            نقشه تعاملی <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-amber-500">مناطق گرمدره</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            با استفاده از نقشه زیر، تمام محله‌ها و خیابان‌های مهم گرمدره را بشناسید، موقعیت آن‌ها را بررسی کنید و با یک کلیک فایل‌های ملکی هر منطقه را مشاهده نمایید.
          </p>
        </div>

        {/* The Map Component */}
        <div className="mb-20">
          <MapWrapper />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 prose prose-slate prose-lg max-w-none text-slate-900">
            <h2 className="text-2xl font-black text-slate-900 mb-6">آشنایی با موقعیت و محله‌های گرمدره</h2>
            <p className="leading-loose mb-8">
              شهر <strong>گرمدره</strong> به عنوان نزدیک‌ترین نقطه استان البرز به کلان‌شهر تهران، به دلیل موقعیت جغرافیایی استثنایی بین دو شاهراه حیاتی (بزرگراه شهید لشکری و اتوبان تهران-کرج) و بهره‌مندی از ایستگاه مترو اختصاصی، یکی از جذاب‌ترین مقاصد برای سکونت و سرمایه‌گذاری ملکی است.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              {/* Northern Garmdarreh */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🏙️</span>
                  <h3 className="text-xl font-bold m-0 text-slate-900">گرمدره شمالی (نوساز و مدرن)</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  این بخش در مجاورت جاده مخصوص (بزرگراه شهید لشکری) قرار گرفته و عمده ساخت‌وسازهای جدید، مجتمع‌های مسکونی لوکس با استانداردهای مدرن مهندسی در این محدوده واقع شده‌اند.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">📍</span>
                    <div>
                      <strong>بافت نوساز شمالی:</strong> دارای خیابان‌بندی‌های عریض، سازه‌های برند و واحدهای کلیدنخورده.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">📍</span>
                    <div>
                      <strong>شهرک شاهد و ناصریه:</strong> محیطی آرام، خوش‌مسیر و با ارزش افزوده بالا.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">📍</span>
                    <div>
                      <strong>دسترسی سریع به مترو:</strong> تردد آسان و روزمره شاغلین به تهران و کرج.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Southern Garmdarreh */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌿</span>
                  <h3 className="text-xl font-bold m-0 text-slate-900">گرمدره جنوبی و کوهک</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  بخش جنوبی شهر با دسترسی به اتوبان تهران-کرج، ترکیبی ایده‌آل از مجتمع‌های مسکونی دنج و بافت‌های ویلایی و باغات سرسبز را به متقاضیان ارائه می‌دهد.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">📍</span>
                    <div>
                      <strong>بلوار امیرکبیر:</strong> شاهراه اصلی شهر با دسترسی مستقیم به بانک‌ها، درمانگاه‌ها و مراکز تجاری.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">📍</span>
                    <div>
                      <strong>کوهک گرمدره:</strong> منطقه‌ای محبوب با آب‌وهوای مطلوب و چشم‌انداز باز به کوهپایه.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">📍</span>
                    <div>
                      <strong>باغ‌ویلاها:</strong> فرصتی استثنایی برای داشتن فضای سبز و آرامش در کمترین فاصله تا غرب تهران.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="my-12 border-slate-200" />
            
            <h2 className="text-2xl font-black text-slate-900 mb-6">چرا سرمایه‌گذاری ملکی در گرمدره؟</h2>
            <p className="leading-loose mb-6">
              گرمدره برای افرادی که به دنبال خانه اولی با بودجه مناسب‌تر نسبت به مناطق ۲۱ و ۲۲ تهران هستند و در عین حال نمی‌خواهند فاصله زیادی با پایتخت داشته باشند، بهترین انتخاب ممکن است. رشد پرسرعت زیرساخت‌های شهری، نقدشوندگی بالای املاک و تقاضای دائم برای خرید و اجاره، تضمین‌کننده حفظ و ارتقای ارزش سرمایه شماست.
            </p>

            <div className="mt-12 text-center">
              <Link href="/search-results" className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30">
                مشاهده تمام آگهی‌های املاک در گرمدره
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
