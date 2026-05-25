
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'هتل‌ها', path: '/services/hotel' },
    { name: 'رویدادها', path: '/services/events' },
    { name: 'خدمات تکمیلی', path: '/services/supplementary' },
    { name: 'وی‌آی‌پی بین‌الملل', path: '/services/vip' },
  ];

  return (
    <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">ب</span>
              <span className="text-xl font-bold text-primary">
                بسوی سامیار سفر
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <Button size="sm" className="btn-gold rounded-full px-5">تماس با ما</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">باز کردن منو</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out pt-16",
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col space-y-4 px-4 pt-6 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="py-2 text-foreground/80 hover:text-primary transition-colors text-right"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="mt-4 w-full" onClick={() => setIsMenuOpen(false)}>
            تماس با ما
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
