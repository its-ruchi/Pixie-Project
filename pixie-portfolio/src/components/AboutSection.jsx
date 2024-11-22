import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

import { Menu, X } from 'lucide-react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-background border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          Pixie Portfolio
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#work" className="hover:underline">Work</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
        <Button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-background p-4">
          <Link href="#about" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#work" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="#contact" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
