import React from 'react';
import { Globe, Plane } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';

const VIPService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-l from-primary to-[hsl(184_60%_28%)] text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4 justify-end">
              <h1>وی‌آی‌پی بین‌الملل</h1>
              <Globe className="h-10 w-10 text-accent" />
            </div>
            <p className="text-primary-foreground/80 text-lg text-right max-w-2xl mr-auto">
              سفرهای لوکس، جت اختصاصی و خدمات کنسیرژ سطح بالا
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">تجربه‌ای متفاوت از سفر لوکس</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                با خدمات وی‌آی‌پی بین‌المللی ما، از توجه شخصی، دسترسی انحصاری و تنظیمات
                ممتاز در سراسر دنیا بهره‌مند شوید.
              </p>
              <Button className="btn-gold gap-2 rounded-full">
                <Plane className="h-4 w-4" />
                مشاهده خدمات وی‌آی‌پی
              </Button>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">خدمات وی‌آی‌پی شامل:</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>✓ هماهنگی جت اختصاصی</li>
                <li>✓ ترانسفر و خودروی لوکس</li>
                <li>✓ کنسیرژ شخصی ۲۴ ساعته</li>
                <li>✓ خدمات اجرایی و تشریفات فرودگاهی</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VIPService;
