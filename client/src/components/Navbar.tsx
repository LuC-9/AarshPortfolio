import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Added for routing
import BlogPage from './BlogPage'; // Added BlogPage component


const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" }, // Added blog link
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="w-10 h-10" /> {/* Placeholder for floating profile */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}  // Changed to Link for routing
                    className={`text-sm font-medium transition-colors hover:text-foreground ${
                      activeSection === item.href.slice(1) || item.href === '/blog' ? "text-foreground" : "text-muted-foreground"
                    }`}
                    onClick={(e) => {
                      if (item.href !== '/blog'){ // prevents default behavior for non-blog links
                        e.preventDefault();
                        scrollToSection(item.href);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialLinks />
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ul className="py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} // Changed to Link for routing
                    className={`block py-2 px-4 text-sm font-medium transition-colors hover:text-foreground ${
                      activeSection === item.href.slice(1) || item.href === '/blog' ? "text-foreground" : "text-muted-foreground"
                    }`}
                    onClick={(e) => {
                      if (item.href !== '/blog'){ // prevents default behavior for non-blog links
                        e.preventDefault();
                        scrollToSection(item.href);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-4 py-2">
              <SocialLinks />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}


// Added BlogPage component
import React from 'react';

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>This is where you can post your blogs.</p>
      {/* Add blog post form or display here */}
    </div>
  );
};

export default BlogPage;


// Added App.tsx (Assumed structure)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BlogPage from './BlogPage'; // Import BlogPage

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/blog" element={<BlogPage />} /> {/* Added blog route */}
          {/* Other routes */}
        </Routes>
    </Router>
  );
}

export default App;