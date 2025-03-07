import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center">
                <Lightbulb className="text-white h-5 w-5" />
              </div>
              <span className="font-bold text-xl">
                <span className="text-gaiad-purple">G</span>
                <span className="text-gaiad-teal">A</span>
                <span className="text-gaiad-purple">I</span>
                <span className="text-gaiad-teal">A</span>
                <span className="text-gaiad-purple">D</span>
                <span className="tracking-wider ml-2 text-gradient">IDEAS BANK</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Unleashing agentic solopreneurship through daily ideas and community.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ideas" className="text-muted-foreground hover:text-primary transition-colors">
                  Daily Ideas
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-muted-foreground hover:text-primary transition-colors">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gaiad Ideas Bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
