import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'صفحه اصلی', path: '/' },
  { name: 'درباره سمگا', path: '/about' },
  { name: 'دستاوردها', path: '/#achievements' },
  { name: 'استراتژی', path: '/#strategy' },
  { name: 'پروژه‌ها', path: '/projects' },
  { name: 'اخبار', path: '/news' },
  { name: 'تماس', path: '/contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 w-full bg-background/85 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(184_70%_42%)] flex items-center justify-center text-primary-foreground font-extrabold text-lg shadow-md">س</span>
            <span className="text-lg font-bold text-primary">سمگا</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path ? "text-primary" : "text-foreground/75"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button size="sm" className="btn-gold rounded-full px-5">همکاری با ما</Button>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="باز کردن منو"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={cn(
        "lg:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out pt-16",
        open ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col gap-2 px-4 pt-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="py-3 border-b border-border text-foreground/80 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            <Button className="mt-4 w-full btn-gold rounded-full">همکاری با ما</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
