import React from 'react';
import { Calendar, Ticket } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-l from-primary to-[hsl(184_60%_28%)] text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4 justify-end">
              <h1>رویدادها</h1>
              <Calendar className="h-10 w-10 text-accent" />
            </div>
            <p className="text-primary-foreground/80 text-lg text-right max-w-2xl mr-auto">
              برگزاری و هماهنگی رویدادها، تورهای گروهی و سفرهای مناسبتی
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">رویدادها و مناسبت‌های ویژه</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                از گردهمایی‌های سازمانی تا عروسی در مقاصد توریستی، تمام جزئیات را ما برای شما هماهنگ می‌کنیم.
              </p>
              <Button className="btn-gold gap-2 rounded-full">
                <Ticket className="h-4 w-4" />
                مشاهده رویدادها
              </Button>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">خدمات رویداد شامل:</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>✓ برگزاری رویدادهای سازمانی</li>
                <li>✓ عروسی در مقاصد توریستی</li>
                <li>✓ جشن‌ها و مناسبت‌های ویژه</li>
                <li>✓ تورها و فعالیت‌های گروهی</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventService;
