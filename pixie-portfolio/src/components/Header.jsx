import { useState } from 'react';
import { Button } from '@/components/ui/Button';  // Make sure Button is imported correctly
import { Laptop, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';  // react-router-dom for Vite app

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-background border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Laptop className="mr-2 h-6 w-6" />
            Jane Doe
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="#about" className="hover:underline">
              About
            </Link>
            <Link to="#work" className="hover:underline">
              Work
            </Link>
            <Link to="#contact" className="hover:underline">
              Contact
            </Link>
          </div>
          <Button variant="ghost" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-background p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="#about" className="hover:underline" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="#work" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Work
            </Link>
            <Link to="#contact" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
