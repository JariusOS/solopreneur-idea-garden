
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Lightbulb, Zap } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center">
            <Lightbulb className="text-white h-5 w-5" />
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">Gaiad Ideas Bank</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/ideas" className="font-medium hover:text-primary transition-colors">
            Daily Ideas
          </Link>
          <Link to="/categories" className="font-medium hover:text-primary transition-colors">
            Categories
          </Link>
          <Link to="/community" className="font-medium hover:text-primary transition-colors">
            Community
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline">Sign In</Button>
          <Button className="bg-gradient-purple" asChild>
            <Link to="/waitlist">
              <Zap className="h-4 w-4 mr-2" />
              Join Waitlist
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[57px] bg-background z-40 md:hidden">
          <div className="container flex flex-col gap-6 py-8">
            <Link 
              to="/ideas" 
              className="font-medium text-lg p-3 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Daily Ideas
            </Link>
            <Link 
              to="/categories" 
              className="font-medium text-lg p-3 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/community" 
              className="font-medium text-lg p-3 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-lg p-3 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Button>
              <Button 
                className="bg-gradient-purple" 
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <Link to="/waitlist">
                  <Zap className="h-4 w-4 mr-2" />
                  Join Waitlist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
