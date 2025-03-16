import React, { useEffect, useRef } from "react";
import Glass from "./ui/Glass";

interface Skill {
  name: string;
  rating: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", rating: 100 },
      { name: "Next.js", rating: 100 },
      { name: "TypeScript", rating: 95 },
      { name: "HTML/CSS", rating: 100 },
      { name: "Tailwind CSS", rating: 100 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", rating: 100 },
      { name: "Express.js", rating: 100 },
      { name: "Python", rating: 90 },
      { name: "ASP.Net", rating: 70 },
      { name: "API Development", rating: 95 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", rating: 95 },
      { name: "SQL", rating: 85 },
      { name: "NoSQL", rating: 90 },
      { name: "Data Modeling", rating: 85 },
    ],
  },
  {
    name: "DevOps/Tools",
    skills: [
      { name: "AWS", rating: 80 },
      { name: "Git", rating: 95 },
      { name: "CI/CD", rating: 80 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skillsArray = [
    "MERN Stack",
    "Next.js",
    "TypeScript",
    "Python",
    "SQL / NoSQL",
    "ASP.Net",
    "AWS",
    "Git",
  ];

  const otherSkillsArray = [
    "Redux.js",
    "WebSocket",
    "Appwrite",
    "Sentry.io",
    "Testing",
    "Optimization",
    "Content Management Systems (CMS)",
    "Analytical Skills",
    "Communication",
    "Flask",
    "REST APIs",
    "JSON Web Token (JWT)",
    ".NET Framework",
    "C#",
    "Object-Oriented Programming (OOP)",
    "Java",
    "Data Structures",
    "Problem Solving",
    "Database Management System (DBMS)",
    "Algorithm Design",
    "HTML5",
    "Cascading Style Sheets (CSS)",
    "English",
    "Requirements Engineering",
  ];
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
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
    <section
      id="skills"
      ref={sectionRef}
      className="section-p bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4 opacity-0 animate-on-scroll">
            <span className="subtitle">Skills</span>
          </div>
          <h2 className="heading-lg mb-6 opacity-0 animate-on-scroll">
            Technical Expertise
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto opacity-0 animate-on-scroll">
            A comprehensive toolkit that enables me to build complete, scalable
            applications from concept to deployment.
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
                    <li key={idx} className="flex items-center justify-between">
                      <span className="text-foreground/80">{skill.name}</span>
                      <div className="w-1/3 bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${skill.rating}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Glass>
            </div>
          ))}
        </div>

        <h2 className="heading-sm mt-20 mb-10 text-center animate-on-scroll animate-delay-300">
          Main Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-0 animate-on-scroll animate-delay-300">
          {skillsArray.map((skill, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm md:text-base font-medium text-foreground/80">
                {skill}
              </span>
            </div>
          ))}
        </div>
        <h2 className="heading-sm mt-20 mb-10 text-center animate-on-scroll animate-delay-300">
          Other Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-0 animate-on-scroll animate-delay-300">
          {otherSkillsArray.map((skill, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm md:text-base font-medium text-foreground/80">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
