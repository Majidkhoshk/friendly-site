import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Strategy from '../components/Strategy';
import CapitalGrowth from '../components/CapitalGrowth';
import Projects from '../components/Projects';
import Stats from '../components/Stats';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>سمگا | گروه سرمایه‌گذاری میراث فرهنگی و گردشگری ایران</title>
        <meta name="description" content="هلدینگ تخصصی سمگا؛ سرمایه‌گذاری در صنعت گردشگری، هتلداری و خدمات مالی ایران با سرمایه‌ی ۲۵٬۰۰۰ میلیارد ریال." />
        <link rel="canonical" href="https://friendly-site-design.lovable.app/" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Achievements />
        <Strategy />
        <CapitalGrowth />
        <Projects />
        <Stats />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
