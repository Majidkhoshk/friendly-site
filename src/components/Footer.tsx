import React from 'react';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[hsl(190_45%_10%)] text-primary-foreground/85 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(184_70%_42%)] flex items-center justify-center text-primary-foreground font-extrabold">س</span>
              <span className="text-xl font-bold text-primary-foreground">سمگا</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              نخستین هلدینگ تخصصی عضو سازمان جهانی گردشگری در ایران؛ فعال در حوزه‌های مالی، بانکی، گردشگری و میراث فرهنگی.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="اینستاگرام" className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="تلگرام" className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                <Send size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-accent">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent">درباره سمگا</Link></li>
              <li><Link to="/projects" className="hover:text-accent">پروژه‌ها</Link></li>
              <li><Link to="/news" className="hover:text-accent">اخبار</Link></li>
              <li><Link to="/contact" className="hover:text-accent">تماس با ما</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-accent">حوزه‌های فعالیت</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>پولی و بانکی</li>
              <li>مالی و سرمایه‌گذاری</li>
              <li>گردشگری و هتلداری</li>
              <li>میراث فرهنگی</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-accent">تماس</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Phone size={14} className="text-accent" /> ۰۲۱-۸۸۷۲۹۵۶۶</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-accent" /> info@semega.ir</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="text-accent mt-1" /> تهران، ایران</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/50">
          © {year} گروه سرمایه‌گذاری میراث فرهنگی و گردشگری ایران ـ سمگا. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
