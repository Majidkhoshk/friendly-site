import React from 'react';
import { TrendingUp } from 'lucide-react';

const milestones = [
  { year: '۱۳۸۸', value: '۴۰۰' },
  { year: '۱۳۹۳', value: '۸۰۰' },
  { year: '۱۳۹۴', value: '۲٬۰۰۰' },
  { year: '۱۳۹۵', value: '۳٬۰۰۰' },
  { year: '۱۴۰۰', value: '۴٬۵۰۰' },
  { year: '۱۴۰۱', value: '۱۰٬۰۰۰' },
  { year: '۱۴۰۲', value: '۱۵٬۰۰۰' },
  { year: '۱۴۰۲', value: '۲۰٬۰۰۰' },
  { year: '۱۴۰۴', value: '۲۵٬۰۰۰' },
];

const max = 25000;

const CapitalGrowth = () => {
  return (
    <section id="capital" className="py-24 bg-[hsl(190_45%_10%)] text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 text-sm text-accent">
            <span className="h-px w-8 bg-accent" /> سرمایه
          </div>
          <h2 className="mb-4">روند افزایش <span className="text-gradient">سرمایه</span></h2>
          <p className="text-primary-foreground/75 leading-loose">
            شرکت سمگا در راستای ارتقاء ظرفیت خود از سال ۱۳۸۸ تاکنون، سرمایه‌ی ثبتی خود را بیش از ۶۲ برابر افزایش داده است.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-9 gap-4 items-end h-72">
          {milestones.map((m, i) => {
            const numeric = parseInt(m.value.replace(/[^0-9]/g, ''));
            const height = (numeric / max) * 100;
            return (
              <div key={i} className="flex flex-col items-center justify-end h-full group">
                <div className="text-xs text-accent font-bold mb-2">{m.value}</div>
                <div
                  className="w-full bg-gradient-to-t from-accent to-[hsl(184_70%_50%)] rounded-t-lg transition-all duration-500 hover:opacity-90"
                  style={{ height: `${height}%` }}
                />
                <div className="text-xs text-primary-foreground/70 mt-2">{m.year}</div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-primary-foreground/60 mt-6 flex items-center justify-center gap-2">
          <TrendingUp size={14} className="text-accent" />
          ارقام به میلیارد ریال
        </p>
      </div>
    </section>
  );
};

export default CapitalGrowth;
