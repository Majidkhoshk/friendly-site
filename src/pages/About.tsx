import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import Strategy from '../components/Strategy';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>درباره سمگا | هلدینگ سرمایه‌گذاری گردشگری ایران</title>
        <meta name="description" content="معرفی هلدینگ سمگا؛ تاریخچه، مأموریت، چشم‌انداز و حوزه‌های فعالیت گروه سرمایه‌گذاری میراث فرهنگی و گردشگری ایران." />
        <link rel="canonical" href="https://friendly-site-design.lovable.app/about" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-l from-primary to-[hsl(184_60%_28%)] text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-right">
            <div className="text-accent text-sm mb-3">درباره ما</div>
            <h1 className="mb-4">در هلدینگ سمگا</h1>
            <p className="text-primary-foreground/85 max-w-3xl leading-loose">
              گروه سرمایه‌گذاری میراث فرهنگی و گردشگری ایران از نخستین روزهای تأسیس، با رویکردی مبتنی بر خدمت به جامعه، گسترش فرصت‌های شغلی پایدار و معرفی ظرفیت‌های فرهنگی ایران شکل گرفته است.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-4">مأموریت ما</h2>
            <p className="text-foreground/75 leading-loose mb-4">
              ما بر این باوریم که آنچه امروز به‌عنوان دستاوردهای بزرگ این مجموعه رقم خورده، حاصل اعتماد مردم، تلاش همکاران متخصص و تدبیر مدیران مجموعه‌های تابعه است.
            </p>
            <p className="text-foreground/75 leading-loose">
              با اتکا به سرمایه‌ی انسانی توانمند و الهام از میراث گرانبهای این سرزمین، در مسیر توسعه‌ی پایدار، اعتلای صنعت گردشگری و شکوفایی اقتصادی ایران گام برمی‌داریم.
            </p>
          </div>
          <div>
            <h2 className="mb-4">چشم‌انداز</h2>
            <p className="text-foreground/75 leading-loose mb-4">
              سمگا در پی آن است تا به عنوان یکی از هلدینگ‌های پیشرو و تخصصی صنعت گردشگری، با تمرکز بر ارتقاء کیفیت خدمات و تسهیل تجربه‌ی سفر، زیرساخت‌هایی پایدار و کارآمد ایجاد کند.
            </p>
            <p className="text-foreground/75 leading-loose">
              این رویکرد، ما را در جایگاه یکی از بازیگران اثرگذار در عرصه‌ی گردشگری داخلی و بین‌المللی قرار داده است.
            </p>
          </div>
        </section>

        <Strategy />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
