'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X, Home, BookOpen, Info, Sparkles, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Navbar({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home, description: 'Text formatter' },
    { name: 'Tutorial', href: '/tutorial', icon: BookOpen, description: 'Learn how to use' },
    { name: 'About', href: '/about', icon: Info, description: 'About TextFlow' },
    { name: 'Developer', href: '/developer', icon: User, description: 'About the developer' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isActive = (href) => pathname === href;

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'border-b border-border/60 bg-background/98 backdrop-blur-md shadow-sm' 
        : 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:from-blue-500 group-hover:to-indigo-500">
              <Sparkles className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300">
              TextFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <TooltipProvider delayDuration={300}>
              {navigation.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        isActive(item.href)
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 transition-all duration-200 ${
                        isActive(item.href) 
                          ? 'text-primary-foreground' 
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`} />
                      <span>{item.name}</span>
                      {isActive(item.href) && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-2">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    className="relative h-9 w-16 shrink-0 rounded-full p-0 transition-colors duration-300 focus-ring border border-border/40 hover:border-border/60"
                  >
                    {/* Track */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-500 ${
                        theme === 'light'
                          ? 'bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100'
                          : 'bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900'
                      }`}
                    />

                    {/* Decorative elements */}
                    <div
                      className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                        theme === 'dark' ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden="true"
                    >
                      {/* Stars */}
                      <span className="absolute left-2 top-2 h-1 w-1 rounded-full bg-white/90 animate-pulse" />
                      <span className="absolute left-4 top-3 h-0.5 w-0.5 rounded-full bg-white/80" />
                      <span className="absolute left-7 top-1.5 h-0.5 w-0.5 rounded-full bg-white/70" />
                      <span className="absolute left-10 top-2.5 h-0.5 w-0.5 rounded-full bg-white/60" />
                    </div>

                    {/* Sun icon (left) and Moon icon (right) */}
                    <Sun
                      className={`absolute left-2 top-2.5 h-4 w-4 text-amber-600 transition-opacity duration-300 ${
                        theme === 'light' ? 'opacity-100' : 'opacity-40'
                      }`}
                      aria-hidden="true"
                    />
                    <Moon
                      className={`absolute right-2 top-2.5 h-4 w-4 text-sky-300 transition-opacity duration-300 ${
                        theme === 'dark' ? 'opacity-100' : 'opacity-40'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Knob */}
                    <div
                      className={`absolute top-1 ${theme === 'dark' ? 'right-1' : 'left-1'} z-10 h-7 w-7 rounded-full shadow-md transition-all duration-300 ease-out ring-1 ${
                        theme === 'dark' 
                          ? 'bg-white ring-slate-300'  /* light knob on dark */
                          : 'bg-slate-800 ring-slate-500' /* dark knob on light */
                      }`}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Switch to {theme === 'light' ? 'dark' : 'light'} mode</p>
                </TooltipContent>
              </Tooltip>

              {/* Mobile Menu Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden rounded-full hover:bg-secondary/80 transition-all duration-200 hover:scale-110"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <div className="relative">
                      {isMenuOpen ? (
                        <X className="h-5 w-5 transition-all duration-300 rotate-90" />
                      ) : (
                        <Menu className="h-5 w-5 transition-all duration-300" />
                      )}
                    </div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isMenuOpen ? 'Close menu' : 'Open menu'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 space-y-1 pt-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInFromTop 0.3s ease-out forwards' : 'none'
                }}
              >
                <item.icon className={`w-4 h-4 transition-all duration-200 ${
                  isActive(item.href) 
                    ? 'text-primary-foreground' 
                    : 'text-muted-foreground group-hover:text-foreground'
                }`} />
                <span>{item.name}</span>
                {isActive(item.href) && (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse ml-auto" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}