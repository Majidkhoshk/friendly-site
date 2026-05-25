import React from 'react';
import { Phone, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section id="contact-cta" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-primary to-[hsl(184_70%_42%)] p-10 md:p-14 text-primary-foreground shadow-xl">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-sm text-accent mb-3">تماس</div>
              <h2 className="mb-4">می‌خواهید مستقیم با ما در تماس باشید؟</h2>
              <p className="text-primary-foreground/85 leading-loose">
                تیم سمگا آماده‌ی پاسخگویی به سوالات، پیشنهادها و درخواست‌های همکاری شما است.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a href="tel:+982188729566">
                <Button size="lg" className="btn-gold rounded-full gap-2 w-full sm:w-auto">
                  <Phone size={16} />
                  ۰۲۱-۸۸۷۲۹۵۶۶
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2 w-full sm:w-auto"
                >
                  فرم تماس <ArrowLeft size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
