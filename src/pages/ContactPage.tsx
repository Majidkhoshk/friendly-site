import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>تماس با سمگا | راه‌های ارتباطی هلدینگ</title>
        <meta name="description" content="راه‌های ارتباطی با هلدینگ سمگا؛ شماره تماس، ایمیل، نشانی دفتر مرکزی و فرم تماس مستقیم." />
        <link rel="canonical" href="https://friendly-site-design.lovable.app/contact" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-l from-primary to-[hsl(184_60%_28%)] text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-right">
            <div className="text-accent text-sm mb-3">تماس</div>
            <h1 className="mb-4">با ما در تماس باشید</h1>
            <p className="text-primary-foreground/85 max-w-2xl leading-loose">
              برای ارسال پیام، درخواست همکاری یا طرح شکایت می‌توانید از طریق راه‌های زیر با ما در ارتباط باشید.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="mb-3">راه‌های ارتباطی</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-muted/50">
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">تلفن</div>
                  <a href="tel:+982188729566" dir="ltr" className="text-foreground/75 hover:text-primary">021-88729566</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-muted/50">
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">ایمیل</div>
                  <a href="mailto:info@semega.ir" className="text-foreground/75 hover:text-primary">info@semega.ir</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-muted/50">
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">نشانی</div>
                  <p className="text-foreground/75">تهران، ایران</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4 p-8 rounded-2xl border border-border bg-card" onSubmit={(e) => e.preventDefault()}>
            <h2 className="mb-3">ارسال پیام</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="نام و نام خانوادگی" required />
              <Input placeholder="شماره تماس" required />
            </div>
            <Input type="email" placeholder="ایمیل" required />
            <Input placeholder="موضوع" />
            <Textarea placeholder="متن پیام شما..." rows={6} required />
            <Button type="submit" className="btn-gold rounded-full w-full">ارسال پیام</Button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
