import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>پروژه‌ها | هلدینگ سمگا</title>
        <meta name="description" content="پروژه‌های مستقیم و غیرمستقیم هلدینگ سمگا در حوزه هتلداری و گردشگری؛ از دهکده سلامت کردان تا هتل‌های رکسان و رمیس." />
        <link rel="canonical" href="https://friendly-site-design.lovable.app/projects" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-l from-primary to-[hsl(184_60%_28%)] text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-right">
            <div className="text-accent text-sm mb-3">پروژه‌ها</div>
            <h1 className="mb-4">پروژه‌های هلدینگ سمگا</h1>
            <p className="text-primary-foreground/85 max-w-3xl leading-loose">
              مروری بر مهم‌ترین پروژه‌های هتلی و گردشگری در دست اجرا و بهره‌برداری مجموعه.
            </p>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
