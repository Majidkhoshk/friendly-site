import React from 'react';
import { MapPin } from 'lucide-react';

const projects = [
  {
    title: 'دهکده سلامت محب کردان',
    location: 'کردان',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'هتل رکسان و رمیس',
    location: 'فرودگاه امام خمینی',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'زیگورات سنتر',
    location: 'سیرجان',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'کاروانیکا',
    location: 'کرمان',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'هتل رکسان سیرجان',
    location: 'سیرجان · به‌زودی',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'هتل قصرالضیافه',
    location: 'مشهد',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 text-sm text-primary font-medium">
            <span className="h-px w-8 bg-accent" /> تخصص ما
          </div>
          <h2 className="mb-4">پروژه‌های <span className="text-gradient">مستقیم و غیرمستقیم</span></h2>
          <p className="text-foreground/70 leading-loose">
            مجموعه‌ای از پروژه‌های هتلی و گردشگری در سراسر کشور، با همکاری و مدیریت هلدینگ سمگا.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-2xl overflow-hidden h-72 shadow-md hover:shadow-xl transition-shadow">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(190_60%_10%)] via-[hsl(190_60%_10%)]/40 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-6 text-primary-foreground">
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <div className="flex items-center gap-1 text-sm text-accent">
                  <MapPin size={14} />
                  {p.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
