
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/40 py-12 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-display font-semibold">
              <span className="gradient-text">Diyan.</span>
            </a>
            <p className="text-muted-foreground mt-2">
              Fullstack Software Engineer
            </p>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/dasmain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/diyan-ali-shaikh-8ba62a1b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shaikhdiyanali@01.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Diyan Ali Shaikh. All rights reserved.</p>
          <p className="mt-2">
            Designed and built with dedication and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
