import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const news = [
  {
    title: 'برگزاری مجمع عمومی فوق‌العاده افزایش سرمایه',
    date: '۱۴۰۵/۰۱/۲۶',
    excerpt: 'مجمع عمومی فوق‌العاده شرکت سمگا با حضور سهامداران برای تصویب افزایش سرمایه برگزار گردید.',
  },
  {
    title: 'افزایش سرمایه ۲۵ درصدی سمگا از محل اندوخته سرمایه‌ای',
    date: '۱۴۰۴/۰۸/۰۵',
    excerpt: 'گزارش رسمی شرکت در خصوص افزایش سرمایه‌ی ۲۵ درصدی از محل اندوخته‌های سرمایه‌ای منتشر شد.',
  },
  {
    title: 'پرداخت سود سهامداران در موعد مقرر',
    date: '۱۴۰۴/۰۷/۲۳',
    excerpt: 'سود سهامداران سمگا طبق برنامه‌ی زمانی مصوب در موعد مقرر پرداخت گردید.',
  },
];

const NewsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>اخبار | هلدینگ سمگا</title>
        <meta name="description" content="آخرین اخبار و اطلاع‌رسانی‌های هلدینگ سرمایه‌گذاری میراث فرهنگی و گردشگری ایران ـ سمگا." />
        <link rel="canonical" href="https://friendly-site-design.lovable.app/news" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-l from-primary to-[hsl(184_60%_28%)] text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-right">
            <div className="text-accent text-sm mb-3">اخبار</div>
            <h1 className="mb-4">آخرین اخبار و اطلاع‌رسانی‌ها</h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n) => (
              <Card key={n.title} className="hover-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={14} className="text-accent" />
                    {n.date}
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-snug">{n.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">{n.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all">
                    بیشتر بخوانید <ArrowLeft size={14} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
