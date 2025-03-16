
import React, { useEffect, useRef } from "react";
import Glass from "./ui/Glass";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Python", "ASP.Net", "API Development"]
  },
  {
    name: "Database",
    skills: ["MongoDB", "SQL", "NoSQL", "Data Modeling"]
  },
  {
    name: "DevOps & Tools",
    skills: ["AWS", "Git", "CI/CD", "Docker"]
  }
];

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="section-p bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4 opacity-0 animate-on-scroll">
            <span className="subtitle">Skills</span>
          </div>
          <h2 className="heading-lg mb-6 opacity-0 animate-on-scroll">
            Technical Expertise
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto opacity-0 animate-on-scroll">
            A comprehensive toolkit that enables me to build complete, scalable applications 
            from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="opacity-0 animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Glass className="h-full p-8 hover:scale-[1.02] transition-transform duration-300 ease-out">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.name}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between"
                    >
                      <span className="text-foreground/80">{skill}</span>
                      <div className="w-1/3 bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: `${Math.floor(Math.random() * 30) + 70}%`,
                          }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Glass>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-0 animate-on-scroll animate-delay-300">
          {["MERN Stack", "Next.js", "TypeScript", "Python", "SQL / NoSQL", "ASP.Net", "AWS", "Git"].map((skill, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm md:text-base font-medium text-foreground/80">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
