import React from 'react';
import { Banknote, PieChart, Palmtree } from 'lucide-react';

const pillars = [
  {
    icon: Banknote,
    title: 'پولی و بانکی',
    desc: 'فعالیت در حوزه‌ی پولی و بانکی با تأسیس بانک گردشگری (سهامی عام) و جذب منابع مالی برای تأمین مالی بخش‌های مختلف اقتصادی کشور.',
  },
  {
    icon: PieChart,
    title: 'مالی و سرمایه‌گذاری',
    desc: 'خلق ثروت از طریق سرمایه‌گذاری مستقیم در سهام شرکت‌های پربازده ازجمله گنگین و ولقمان به عنوان مهم‌ترین سرمایه‌گذاری‌های گروه.',
  },
  {
    icon: Palmtree,
    title: 'گردشگری و میراث فرهنگی',
    desc: 'مشارکت در سرمایه‌گذاری، احداث، تجهیز، بهره‌برداری و نظارت بر پروژه‌های هتلداری داخلی و خارجی برای ارتقاء کیفی صنعت گردشگری.',
  },
];

const Strategy = () => {
  return (
    <section id="strategy" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 text-sm text-primary font-medium">
            <span className="h-px w-8 bg-accent" /> اهداف و چشم‌اندازها
          </div>
          <h2 className="mb-4">استراتژی <span className="text-gradient">کلان</span></h2>
          <p className="text-foreground/70 leading-loose">
            این هلدینگ برای دستیابی به چشم‌اندازها و اهداف خود در صنایع پیشران اقتصادی، به‌طور کلی در سه حوزه فعالیت می‌کند.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-muted/60 border border-border hover-card"
            >
              <div className="absolute top-6 left-6 text-7xl font-black text-primary/5 leading-none">
                0{i + 1}
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5 shadow-md">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-sm text-foreground/70 leading-loose">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
