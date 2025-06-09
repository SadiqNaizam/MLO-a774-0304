import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

interface NavLink {
  href: string;
  label: string;
}

interface NavigationMenuProps {
  logoText?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

const defaultNavLinks: NavLink[] = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  logoText = 'SaaSProduct',
  navLinks = defaultNavLinks,
  ctaButtonText = 'Sign Up',
  onCtaClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log("Rendering NavigationMenu. Mobile menu open:", isMobileMenuOpen);

  const handleDefaultCtaClick = () => {
    console.log("Default CTA clicked. Navigate to /signup or custom action.");
    // Example: navigate('/signup'); or if onCtaClick is provided, it will be used.
  };

  const finalOnCtaClick = onCtaClick || handleDefaultCtaClick;

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          {/* <YourLogoComponent /> */}
          <span className="font-bold sm:inline-block">{logoText}</span>
        </Link>
        <div className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button onClick={finalOnCtaClick} className="hidden md:inline-flex">
            {ctaButtonText}
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <Link to="/" className="mb-4 flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-bold text-lg">{logoText}</span>
                </Link>
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-foreground/70 hover:text-foreground py-2 text-base"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button onClick={() => { finalOnCtaClick(); setIsMobileMenuOpen(false); }} className="w-full mt-4">
                    {ctaButtonText}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;