import React from 'react';
import { ArrowLeft, Award, Layers, Compass, Briefcase, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const quickLinks = [
  { icon: Briefcase, label: 'پروژه‌ها', path: '/projects' },
  { icon: Compass, label: 'استراتژی کلان', path: '/#strategy' },
  { icon: Layers, label: 'افزایش سرمایه', path: '/#capital' },
  { icon: Eye, label: 'دستاوردها', path: '/#achievements' },
  { icon: Award, label: 'درباره سمگا', path: '/about' },
];

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, hsl(190 70% 15% / 0.92), hsl(184 60% 25% / 0.82)), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40 relative z-10">
        <div className="max-w-3xl mr-auto text-right text-primary-foreground animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 text-sm text-accent">
            <span className="h-px w-8 bg-accent" />
            به سمگا خوش آمدید
          </div>

          <h1 className="mb-6 leading-tight">
            ســـمـــــگــــــــــــــــــــــا
            <br />
            <span className="text-gradient">نخستین هلدینگ تخصصی</span>
            <br />
            عضو سازمان جهانی گردشگری
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl leading-relaxed">
            بیش از یک دهه تجربه در سرمایه‌گذاری هدفمند در حوزه‌های مالی، بانکی، هتلداری و گردشگری، با سرمایه‌ی ثبتی ۲۵٬۰۰۰ میلیارد ریال در فرابورس ایران.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link to="/contact">
              <Button size="lg" className="btn-gold gap-2 rounded-full px-8 w-full sm:w-auto">
                همکاری با ما <ArrowLeft size={18} />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto"
              >
                درباره سمگا
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-primary-foreground/15 backdrop-blur-sm bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {quickLinks.map(({ icon: Icon, label, path }) => (
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
