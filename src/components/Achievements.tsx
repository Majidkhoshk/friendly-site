import React from 'react';
import { Landmark, Building2, TrendingUp, Briefcase, Hammer, Award } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Landmark,
    title: 'وگردش',
    desc: 'تأسیس بانک گردشگری (سهامی عام) با نماد «وگردش»',
  },
  {
    icon: TrendingUp,
    title: 'لیزینگ گردشگری',
    desc: 'تأسیس شرکت لیزینگ گردشگری (سهامی خاص)',
  },
  {
    icon: Briefcase,
    title: 'گنگین',
    desc: 'سرمایه‌گذاری عمده در سهام شرکت اقتصادی نگین گردشگری ایرانیان با نماد «گنگین»',
  },
  {
    icon: Briefcase,
    title: 'ولقمان',
    desc: 'سرمایه‌گذاری عمده در سهام شرکت سرمایه‌گذاری لقمان با نماد «ولقمان»',
  },
  {
    icon: Hammer,
    title: 'نظارت و ساخت‌و‌ساز',
    desc: 'بازوهای اجرایی در زمینه طراحی، نظارت، پیمانکاری و بهره‌برداری از پروژه‌های هتلی',
  },
  {
    icon: Building2,
    title: 'ثبت برندهای هتلی',
    desc: 'برندهای رکسان (۵ ستاره)، رمیس (۴ ستاره) و کاروانیکا (بوتیک هتل)',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 text-sm text-primary font-medium">
            <span className="h-px w-8 bg-accent" /> سمگا <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="mb-4">مهم‌ترین <span className="text-gradient">دستاوردها</span></h2>
          <p className="text-foreground/70 leading-loose">
            در راستای توسعه‌ی صنعت گردشگری کشور، سمگا با تکیه بر توان تخصصی و راهبردهای بلندمدت، به دستاوردهای چشمگیری دست یافته است.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover-card border-border bg-card">
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-sm text-accent-foreground/80">
            <Award size={16} className="text-accent" />
            عضو رسمی سازمان جهانی گردشگری (UNWTO)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
