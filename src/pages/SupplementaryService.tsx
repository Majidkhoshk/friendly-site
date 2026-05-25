import React from 'react';
import { Layers, FileCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupplementaryService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-l from-primary to-[hsl(184_60%_28%)] text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4 justify-end">
              <h1>خدمات تکمیلی</h1>
              <Layers className="h-10 w-10 text-accent" />
            </div>
            <p className="text-primary-foreground/80 text-lg text-right max-w-2xl mr-auto">
              ویزا، بیمه مسافرتی، ترانسفر فرودگاهی و سایر خدمات جانبی سفر
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">همراه شما در تمام مراحل سفر</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ما تمام نیازهای جانبی سفر شما را از اخذ ویزا تا بیمه و ترانسفر مدیریت می‌کنیم.
              </p>
              <Button className="btn-gold gap-2 rounded-full">
                <FileCheck className="h-4 w-4" />
                مشاهده خدمات
              </Button>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">خدمات تکمیلی شامل:</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>✓ اخذ ویزای کشورهای مختلف</li>
                <li>✓ بیمه مسافرتی بین‌المللی</li>
                <li>✓ ترانسفر فرودگاهی</li>
                <li>✓ رزرو بلیط و تورهای اختصاصی</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupplementaryService;
