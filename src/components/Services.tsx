import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar, Layers, Globe, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: 'هتل‌ها',
    description: 'رزرو هتل‌های داخلی و بین‌المللی با بهترین قیمت و خدمات ویژه',
    path: '/services/hotel',
  },
  {
    icon: Calendar,
    title: 'رویدادها',
    description: 'برگزاری و هماهنگی رویدادها، تورهای گروهی و سفرهای مناسبتی',
    path: '/services/events',
  },
  {
    icon: Layers,
    title: 'خدمات تکمیلی',
    description: 'ویزا، بیمه مسافرتی، ترانسفر فرودگاهی و سایر خدمات جانبی سفر',
    path: '/services/supplementary',
  },
  {
    icon: Globe,
    title: 'وی‌آی‌پی بین‌الملل',
    description: 'سفرهای لوکس، جت اختصاصی و خدمات کنسیرژ سطح بالا در سراسر دنیا',
    path: '/services/vip',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-sm text-primary font-medium">
            <span className="h-px w-8 bg-accent" />
            خدمات ما
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="mb-4">چهار حوزه‌ی تخصصی <span className="text-gradient">بسوی سامیار سفر</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            ما در چهار محور اصلی، تجربه‌ای متفاوت از سفر را برای شما رقم می‌زنیم.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description, path }) => (
            <Link key={path} to={path}>
              <Card className="hover-card h-full bg-card border-border overflow-hidden group">
                <CardContent className="p-7 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed flex-grow">{description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-accent font-medium text-sm">
                    مشاهده جزئیات <ArrowLeft size={14} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
