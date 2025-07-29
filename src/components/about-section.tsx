
import { useEffect, useRef } from "react";
import { User, Code, Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
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

const skills = [
  { name: "React", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Django", category: "backend" },
  { name: "Kotlin", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "AWS", category: "devops" },
  { name: "Git", category: "devops" },
];


  // const experiences = [
  //   {
  //     title: "Senior Frontend Developer",
  //     company: "Tech Innovations Inc.",
  //     period: "2021 - Present",
  //     description: "Leading frontend development for enterprise applications"
  //   },
  //   {
  //     title: "UI/UX Designer",
  //     company: "Creative Solutions",
  //     period: "2019 - 2021",
  //     description: "Designed user interfaces for mobile and web applications"
  //   }
  // ];

  return (
    <section id="about" ref={sectionRef} className="relative py-10 md:py-32 lg:px-24 overflow-hidden reveal-container">
      {/* We're using the global background component now */}

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm text-sm font-medium">
            <span className="text-primary mr-2">✦</span>
            About Me
            <span className="text-primary ml-2">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text bg-gradient-to-r from-white via-black to-white">Journey</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through innovative code and thoughtful design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal-content" style={{transitionDelay: "0.1s"}}>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm shadow-lg">
                <img
                  src="/me.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

                {/* Decorative elements - matching hero section style */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl pulse-glow" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/20 rounded-full blur-xl pulse-glow" style={{animationDelay: '1.5s'}} />
                <div className="absolute top-1/2 -right-6 w-12 h-12 bg-pink-500/20 rounded-full blur-xl pulse-glow" style={{animationDelay: '2s'}} />
              </div>

              <div className="absolute -bottom-8 -right-8 p-6 glass-card rounded-xl border border-white/10 shadow-lg max-w-xs bg-background/80 backdrop-blur-md">
                <p className="font-serif italic text-lg">
                  "Code is like humor. When you have to explain it, it's bad!"
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-content" style={{transitionDelay: "0.3s"}}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 mr-3">
                    <User className="w-4 h-4 text-primary" />
                  </span>
                  About Me
                </h3>
                <div className="space-y-4 text-lg">
               <p>
                  I'm a skilled full-stack developer with strong expertise in web development, mobile application development, and DevOps. I have a solid foundation in programming languages such as Python, Java, and JavaScript, and work extensively across multiple layers of application architecture.
                </p>

                <p>
                  My technical stack includes frameworks like Django, Spring Boot, Kotlin, React, and Next.js. I specialize in building scalable, maintainable, and high-performance applications with modern development practices—delivering secure and seamless user experiences across platforms.
                </p>

                </div>
              </div>

              {/* <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 mr-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </span>
                  Experience
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, i) => (
                    <div key={i} className="p-4 rounded-lg border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{exp.title}</h4>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-1">{exp.company}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div> */}

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900/10 dark:bg-gray-100/10 mr-3">
                    <Code className="w-4 h-4 text-gray-900 dark:text-gray-100" />
                  </span>
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all
                        ${skill.category === 'frontend' ? 'border-gray-500/20 bg-gray-500/5 text-gray-700 dark:text-gray-300' : ''}
                        ${skill.category === 'backend' ? 'border-gray-600/20 bg-gray-600/5 text-gray-800 dark:text-gray-200' : ''}
                        ${skill.category === 'design' ? 'border-gray-400/20 bg-gray-400/5 text-gray-600 dark:text-gray-400' : ''}
                        ${skill.category === 'language' ? 'border-gray-700/20 bg-gray-700/5 text-gray-900 dark:text-gray-100' : ''}
                      `}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="group btn-glow pulse-glow"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <span className="flex items-center text-black">
                    Download Resume
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
