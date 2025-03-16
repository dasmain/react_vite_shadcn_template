
import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Glass from "./ui/Glass";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Smart Attendance",
    description: "Facial recognition project that recognizes the faces of whole class from one picture. Built with MERN Stack, Python, PyTorch, openCV and TensorFlow.",
    technologies: ["Python", "React.js", "Node.js", "PyTorch", "TensorFlow", "openCV"],
    githubUrl: "https://github.com/dasmain/SAPythonServer",
  },
  {
    title: "Fitness Application (BeFit)",
    description: "Fitness application using Flutter as frontend for mobile application and Node.js as backend server. Utilizing mobile sensors to make a pedometer in the application and manage all health information.",
    technologies: ["Flutter", "Node.js", "Mobile Sensors", "Health Tracking"],
    githubUrl: "https://github.com/dasmain/BeFit",
  },
  {
    title: "DICOM Viewer",
    description: "Custom DICOM Viewer using cornerstoneTools for interactive medical imaging tools. Handled DICOM files in React.js with features for loading, manipulating, and displaying images.",
    technologies: ["React.js", "cornerstoneTools", "DICOM", "AWS S3"],
  },
  {
    title: "Clue By Candlelight",
    description: "A MERN Stack project for reading books and finding clues from them to solve murder mysteries.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  }
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="section-p">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4 opacity-0 animate-on-scroll">
            <span className="subtitle">Projects</span>
          </div>
          <h2 className="heading-lg mb-6 opacity-0 animate-on-scroll">
            Featured Work
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto opacity-0 animate-on-scroll">
            A showcase of my most impactful projects, demonstrating technical skill and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="opacity-0 animate-on-scroll group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Glass className="h-full p-8 overflow-hidden transition-all duration-300 hover:shadow-elevated group-hover:border-primary/20">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="heading-sm mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={18} className="mr-2" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors ml-auto"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={18} className="ml-1" />
                      </a>
                    )}
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </div>
              </Glass>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
