
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Glass from "./ui/Glass";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/dasmain", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/diyan-ali-shaikh-8ba62a1b4/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shaikhdiyanali01@gmail.com", label: "Email" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Glass
        className={cn(
          "mx-auto px-6 py-4 md:px-12 transition-all duration-300 ease-in-out",
          isScrolled ? "backdrop-blur-md bg-opacity-80" : "bg-opacity-30"
        )}
      >
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-semibold">
            <span className="gradient-text">Diyan</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="hover:text-primary transition-colors duration-200"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Glass>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 pt-24 px-6 md:hidden animate-fade-in">
          <ul className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <a
                  href={link.href}
                  className="block text-center text-lg font-medium py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-8 mt-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-foreground hover:text-primary transition-colors"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
