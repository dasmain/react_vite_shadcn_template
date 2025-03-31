
import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-slide-up");
                el.classList.remove("opacity-0");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-p bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="w-full md:w-1/2">
            <div className="mb-6 opacity-0 animate-on-scroll">
              <span className="subtitle">About Me</span>
            </div>
            <h2 className="heading-lg mb-8 opacity-0 animate-on-scroll">
              Crafting Digital Experiences with Precision
            </h2>
            <div className="opacity-0 animate-on-scroll">
              <p className="body-lg text-muted-foreground mb-6">
                As a Fullstack Software Engineer, I specialize in building scalable web applications 
                that seamlessly blend form and function. With expertise in the MERN stack, Next.js, 
                and TypeScript, I've developed everything from radiologist portals to custom text editors.
              </p>
              <p className="body-lg text-muted-foreground mb-6">
                My approach combines technical excellence with creative problem-solving, 
                ensuring that each project not only meets but exceeds expectations.
              </p>
              <p className="body-lg text-muted-foreground">
                I'm passionate about creating intuitive user experiences while writing clean, 
                maintainable code that stands the test of time.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-background/80 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll">
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Karachi, Sindh, Pakistan</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/80 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll animate-delay-100">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">Bahria University</p>
                <p className="text-sm text-muted-foreground">Software Engineering, 3.81 CGPA</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/80 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll animate-delay-200">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+92 332 2829893</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/80 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll animate-delay-300">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">shaikhdiyanali01@gmail.com</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll animate-delay-400">
              <h3 className="text-xl font-semibold mb-2">Achievement</h3>
              <p className="text-muted-foreground">- Merit Scholarship holder (GPA based) from 3rd - 7th Semester</p>
              <p className="text-muted-foreground">- Graduated with Magna Cum Laude honors</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
