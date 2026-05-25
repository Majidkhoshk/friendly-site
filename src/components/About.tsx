import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 rounded-3xl" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
              alt="ساختمان مرکزی هلدینگ سمگا"
              loading="lazy"
              className="relative rounded-3xl shadow-xl w-full h-[420px] object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-sm text-primary font-medium">
              <span className="h-px w-8 bg-accent" />
              درباره سمگا
            </div>
            <h2 className="mb-5">
              گروه سرمایه‌گذاری میراث فرهنگی و گردشگری ایران
            </h2>
            <p className="text-foreground/75 mb-4 leading-loose">
              سمگا به‌عنوان بازوی اجرایی گروه مالی گردشگری، یکی از بزرگ‌ترین هلدینگ‌های تخصصی ایران در حوزه‌های مالی، بانکی و گردشگری است. این مجموعه با نگاهی نوآورانه و آینده‌نگر، در مسیر خلق ارزش پایدار و توسعه‌ی زیرساخت‌های گردشگری کشور فعالیت می‌کند.
            </p>
            <p className="text-foreground/75 mb-6 leading-loose">
              با اتکا بر سرمایه‌ی انسانی متخصص و راهبردهای بلندمدت، سمگا نقشی مؤثر در ارتقاء استانداردهای صنعت گردشگری داخلی و بین‌المللی ایفا کرده است.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'نخستین هلدینگ تخصصی عضو سازمان جهانی گردشگری UNWTO',
                'تأسیس در سال ۱۳۸۸ با سرمایه‌ی اولیه ۲۰۰ میلیارد ریال',
                'سرمایه‌ی فعلی ۲۵٬۰۰۰ میلیارد ریال، فعال در فرابورس ایران',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground/85">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button className="btn-gold rounded-full px-7">بیشتر بخوانید</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
