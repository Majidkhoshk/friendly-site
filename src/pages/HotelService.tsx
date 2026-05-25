import React from 'react';
import { Building2, BedDouble } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';

const HotelService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-l from-primary to-[hsl(184_60%_28%)] text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4 justify-end">
              <h1>خدمات هتل</h1>
              <Building2 className="h-10 w-10 text-accent" />
            </div>
            <p className="text-primary-foreground/80 text-lg text-right max-w-2xl mr-auto">
              رزرو هتل‌های داخلی و بین‌المللی با بهترین قیمت و خدمات ویژه
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">اقامتگاه‌های لوکس و انتخابی</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                از هتل‌های بوتیک تا ریزورت‌های پنج ستاره، اقامتی متناسب با سبک سفر شما را
                در سراسر جهان تضمین می‌کنیم.
              </p>
              <Button className="btn-gold gap-2 rounded-full">
                <BedDouble className="h-4 w-4" />
                مشاهده هتل‌ها
              </Button>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">خدمات هتلی ما شامل:</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>✓ رزرو هتل در سراسر دنیا</li>
                <li>✓ رزرو ریزورت‌های لوکس</li>
                <li>✓ انتخاب هتل‌های بوتیک</li>
                <li>✓ تنظیمات ویژه اتاق و خدمات اختصاصی</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HotelService;
