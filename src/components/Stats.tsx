import React from 'react';

const stats = [
  { value: '۱۷۴', label: 'پرسنل هلدینگ' },
  { value: '۳۳۹', label: 'اشتغال ایجادشده' },
  { value: '۳', label: 'شرکت زیرمجموعه' },
  { value: '۷', label: 'پروژه فعال' },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-l from-primary to-[hsl(184_60%_28%)] text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-accent mb-2">{s.value}</div>
              <div className="text-sm md:text-base text-primary-foreground/85">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
