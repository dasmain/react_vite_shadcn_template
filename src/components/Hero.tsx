import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";
import ProfilePicture from "../../public/gitlul.jpeg";

import { Github } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10"></div>

      <div
        ref={containerRef}
        className="container max-w-6xl mx-auto text-center md:text-left"
      >
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-3/5">
            <div className="mb-6 opacity-0 animate-on-scroll">
              <span className="subtitle inline-block py-1 px-3 rounded-full bg-primary/10">
                Fullstack Software Engineer
              </span>
            </div>
            <h1 className="heading-xl mb-6 opacity-0 animate-on-scroll animate-delay-100">
              <span className="gradient-text">Diyan Ali Shaikh</span>
            </h1>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl opacity-0 animate-on-scroll animate-delay-200">
              With expertise in building scalable web applications and machine
              learning solutions using MongoDB, Express.js, React, Node.js, and
              Python, I create seamless user experiences with clean, efficient,
              and maintainable code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-on-scroll animate-delay-300">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="https://github.com/dasmain"
                className="px-6 py-3 rounded-full flex gap-x-3 bg-secondary text-secondary-foreground font-medium transition-transform hover:scale-105"
              >
                <Github color="lightblue" size={20} />
                Github
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 opacity-0 animate-on-scroll animate-delay-400">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                {/* <div className="text-8xl font-display font-bold text-foreground/10">DS</div> */}
                <img src={ProfilePicture} className="w-[80%] object-contain" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-elevated">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-foreground/50" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
