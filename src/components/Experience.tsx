
import React, { useEffect, useRef } from "react";
import { Building2, ExternalLink } from "lucide-react";
import Glass from "./ui/Glass";

interface Job {
  company: string;
  role: string;
  period: string;
  website: string;
  description: string[];
}

const experiences: Job[] = [
  {
    company: "Nixaam LLC",
    role: "MERN Stack & Python Developer",
    period: "July 2024 - Present",
    website: "https://www.nixaam.com/",
    description: [
      "DICOM Viewer Development: Built a custom DICOM Viewer using cornerstoneTools for interactive medical imaging tools. Handled DICOM files in React.js with features for loading, manipulating, and displaying images.",
      "API Development: Built Python and Node.js APIs for data management, authentication, and external service interactions, including DICOM standard API development for handling medical imaging data with pydicom and AWS S3 integration.",
      "Custom Text Editors: Developed custom text editors within radiologist portals and applications to enhance documentation efficiency and support medical-specific formatting needs.",
      "Research and Development: Given the complex requirements of healthcare projects, performed extensive research to analyze and integrate diverse data sources."
    ]
  },
  {
    company: "Dijinx",
    role: "MERN Stack Developer",
    period: "September 2023 - July 2024",
    website: "https://www.dijinx.com",
    description: [
      "Clue By Candlelight: Built a MERN Stack project for reading books and finding clues from them to solve murder mysteries.",
      "Scavenger Hunt Server: A Node.js backend server for a mobile application game."
    ]
  },
  {
    company: "SoftFit Technologies",
    role: "ASP.Net Intern",
    period: "July 2023 - September 2023",
    website: "https://www.softfit.net/",
    description: [
      "HR Management System: Used ASP.NET to maintain and troubleshoot the application, fixing bugs and ensuring smooth functionality."
    ]
  }
];

const Experience = () => {
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
    <section id="experience" ref={sectionRef} className="section-p">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4 opacity-0 animate-on-scroll">
            <span className="subtitle">Experience</span>
          </div>
          <h2 className="heading-lg mb-6 opacity-0 animate-on-scroll">
            My Professional Journey
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto opacity-0 animate-on-scroll">
            A track record of delivering exceptional digital solutions across various industries.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

          <div className="space-y-16">
            {experiences.map((job, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16 items-center opacity-0 animate-on-scroll`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="mb-2">
                    <span className="subtitle">{job.period}</span>
                  </div>
                  <h3 className="heading-md mb-2">{job.role}</h3>
                  <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                    <Building2 size={18} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{job.company}</span>
                  </div>
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <span className="mr-1">Visit website</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="relative w-full md:w-1/2">
                  <Glass className="p-6 md:p-8">
                    <ul className="space-y-3">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="body-md text-foreground/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Glass>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 md:left-auto md:right-0 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 md:translate-x-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
