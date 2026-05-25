import React from 'react';
import { ArrowLeft, Award, Layers, Compass, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const stats = [
  { icon: Building2, label: 'هتل‌ها', path: '/services/hotel' },
  { icon: Compass, label: 'رویدادها', path: '/services/events' },
  { icon: Layers, label: 'خدمات تکمیلی', path: '/services/supplementary' },
  { icon: Award, label: 'وی‌آی‌پی بین‌الملل', path: '/services/vip' },
];

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, hsl(188 70% 18% / 0.88), hsl(184 60% 28% / 0.78)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-28 md:pb-40 relative z-10">
        <div className="max-w-3xl mr-auto text-right text-primary-foreground animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 text-sm text-accent">
            <span className="h-px w-8 bg-accent" />
            به بسوی سامیار سفر خوش آمدید
          </div>

          <h1 className="mb-4 leading-tight">
            بســـوی <span className="text-gradient">سامیار سفر</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-primary-foreground/90 mb-8 leading-relaxed">
            ارائه‌دهنده‌ی خدمات تخصصی گردشگری، هتل، رویداد و سفرهای وی‌آی‌پی بین‌المللی
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button size="lg" className="btn-gold gap-2 rounded-full px-8">
              همکاری با ما <ArrowLeft size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              تماس با شرکت
            </Button>
          </div>
        </div>
      </div>

      {/* Stats / quick links */}
      <div className="relative z-10 border-t border-primary-foreground/15 bg-gradient-to-l from-transparent via-primary/20 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, label, path }) => (
              <Link
                key={path}
                to={path}
                className="group flex flex-col items-center text-center text-primary-foreground/90 hover:text-accent transition-colors"
              >
                <div className="w-14 h-14 rounded-full border border-primary-foreground/30 flex items-center justify-center mb-3 group-hover:border-accent group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
