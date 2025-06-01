import { useEffect, useRef, useState } from "react";
import { ExternalLink, Folder, Filter, Layout, Server, Search , Smartphone, Monitor, Github, Lock, ImageIcon  } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectCategory = "static" | "fullstack" | "mobile" | "desktop" | "all";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  urltext: string;
  featured?: boolean;
};

function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

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


  const projects: Project[] = [
  {
    title: "SK Tradings",
    description: "A professional company website for SK Tradings, showcasing their metal scrap trading business and promoting dismantling joint sales. Features responsive design, contact forms, and service highlights with optimized performance.",
    tags: ["Vite", "React", "Tailwind CSS", "Responsive Design"],
    category: "static",
    imageUrl: "/sktrading.png",
    liveUrl: "https://www.sktradings.in",
    urltext: "www.sktradings.in",
    featured: true
  },
    {
    title: "Key2YourHome",
    description: "A comprehensive real estate management platform featuring property listings, advanced search filters, and a complete admin dashboard for property management with user authentication and authorization.",
    tags: ["Django", "PostgreSQL", "Flowbite", "REST API"],
    category: "fullstack",
    imageUrl: "/key2yourhome.png",
    liveUrl: "https://www.key2yourhome.co.in",
    urltext: "www.key2yourhome.co.in",
    featured: true
  },
  {
    title: "InitCore",
    description: "A cutting-edge digital solutions company website featuring modern UI/UX design principles. Implemented with performance optimization techniques and smooth animations for enhanced user engagement.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SSR"],
    category: "static",
    imageUrl: "/initcore.png",
    liveUrl: "https://initcore.in",
    urltext: "www.initcore.in"
  },

  {
    title: "QSync Queue Management",
    description: "An innovative queue management system designed to streamline customer flow in high-traffic environments. Features real-time queue updates, multi-platform support, and analytics dashboard.",
    tags: ["Spring Boot", "Kotlin", "Flask", "Streamlit", "Vite"],
    category: "fullstack",
    imageUrl: "/qsync.png",
    githubUrl: "https://github.com/hamzakhan0712/qsync-frontend.git",
    liveUrl: "",
    urltext: "Proprietary System (Mobile App Available)"
  },
    {
    title: "CallCenter CRM",
    description: "A multi-role call center management system with comprehensive features for agents, supervisors, and administrators. Includes call logging, performance metrics, and real-time monitoring capabilities.",
    tags: ["Django", "PostgreSQL", "HTMX", "WebSockets"],
    category: "fullstack",
    imageUrl: "/crm.png",
    githubUrl: "https://github.com/hamzakhan0712/InitCore_CallCenter_CRM.git",
    liveUrl: "",
    urltext: "Enterprise Solution (On-premise Deployment)"
  },
  {
    title: "ICTMT Conference 2025",
    description: "Official conference website for International Conference on Technology in Mathematics Teaching. Features event schedules, speaker profiles, registration system, and abstract submission portal.",
    tags: ["Vite", "ShadCN", "Tailwind CSS", "Responsive Design"],
    category: "static",
    imageUrl: "/ictmt.png",
    liveUrl: "https://ictmt-2025.vercel.app",
    urltext: "ictmt-2025.vercel.app"
  },
  {
    title: "International Conference on Sustainable Technologies",
    description: "Official website for ICST 2023 - An international conference hosted by Saraswati College of Engineering. Features conference details, speaker profiles, paper submission portal, and registration system with payment integration.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn" ],
    category: "static",
    imageUrl: "/sustech.jpg",
    liveUrl: "https://scoe.vercel.app/",
    githubUrl: "https://github.com/yourusername/icst-conference",
    urltext: "",
  },
   {
    title: "FaceAuth Attendance System",
    description: "Android application for student attendance management using facial recognition technology. Implements machine learning models for accurate identification with offline capabilities.",
    tags: ["Kotlin", "TensorFlow Lite", ],
    category: "mobile",
    imageUrl: "",
    githubUrl: "https://github.com/hamzakhan0712/Face_Recognition_attendance_App.git",
    liveUrl: "",
    urltext: "Enterprise Mobile Application"
  },
  {
    title: "DineEase POS System",
    description: "Windows desktop application for restaurant billing and inventory management with thermal printer integration. Features table management, order tracking, and comprehensive reporting.",
    tags: ["C#", ".NET", "SQLite", "Thermal Printing"],
    category: "desktop",
    imageUrl: "",
    githubUrl: "https://github.com/hamzakhan0712/Resturant_Bill_Desktop_application.git",
    liveUrl: "",
    urltext: "Desktop Application (Installation Required)"
  },
  {
    title: "Tarique Perfumes E-Commerce",
    description: "Complete e-commerce solution for luxury perfumes with product catalog, shopping cart, and secure checkout. Includes admin panel for inventory and order management.",
    tags: ["Django", "PostgreSQL", "Stripe", "HTMX"],
    category: "fullstack",
    imageUrl: "",
    githubUrl: "https://github.com/hamzakhan0712/tariq_perfumes.git",
    liveUrl: "",
    urltext: "No Url"
  }
];



  // Filter projects based on category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch = searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
 
    <section id="projects" ref={sectionRef} className="relative py-10 md:py-22 md:px-12 lg:px-24 overflow-hidden reveal-container">
  {/* Local decorative elements */}
  <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
  <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

  <div className="container mx-auto relative z-10">
    <div className="text-center mb-12 reveal-content">
      <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm text-sm font-medium">
        <span className="text-primary mr-2">✦</span>
        My Work
        <span className="text-primary ml-2">✦</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Featured <span className="gradient-text bg-gradient-to-r from-white via-black to-white">Projects</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        A collection of my projects across different platforms and technologies.
      </p>
    </div>

    {/* Filter Tabs */}
    <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-content" style={{transitionDelay: "0.1s"}}>
      <Button
        variant={filter === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("all")}
        className="rounded-full transition-all duration-300 flex items-center gap-2"
      >
        <Filter className="h-4 w-4" />
        All Projects
      </Button>
      <Button
        variant={filter === "static" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("static")}
        className="rounded-full transition-all duration-300 flex items-center gap-2"
      >
        <Layout className="h-4 w-4" />
        Static Website
      </Button>
      <Button
        variant={filter === "fullstack" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("fullstack")}
        className="rounded-full transition-all duration-300 flex items-center gap-2"
      >
        <Server className="h-4 w-4" />
        Full Stack Web
      </Button>
      <Button
        variant={filter === "mobile" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("mobile")}
        className="rounded-full transition-all duration-300 flex items-center gap-2"
      >
        <Smartphone className="h-4 w-4" />
        Mobile App
      </Button>
      <Button
        variant={filter === "desktop" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("desktop")}
        className="rounded-full transition-all duration-300 flex items-center gap-2"
      >
        <Monitor className="h-4 w-4" />
        Desktop App
      </Button>

      {/* Search Input */}
      <div className="relative ml-2">
        <div className="flex items-center border border-primary/20 rounded-full bg-background/50 backdrop-blur-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2 px-4 bg-transparent outline-none text-sm w-full max-w-[150px] md:max-w-[200px]"
          />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>

    {/* Project Count */}
    <div className="text-center mb-8 text-sm text-muted-foreground">
      Showing {filteredProjects.length} of {projects.length} projects
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-content" style={{transitionDelay: "0.2s"}}>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, index) => {
          // Category styling configuration
          const categoryStyles = {
            static: {
              bg: 'bg-blue-500/10',
              text: 'text-blue-500',
              icon: <Layout className="h-4 w-4 mr-1" />
            },
            fullstack: {
              bg: 'bg-green-500/10',
              text: 'text-green-500',
              icon: <Server className="h-4 w-4 mr-1" />
            },
            mobile: {
              bg: 'bg-purple-500/10',
              text: 'text-purple-500',
              icon: <Smartphone className="h-4 w-4 mr-1" />
            },
            desktop: {
              bg: 'bg-orange-500/10',
              text: 'text-orange-500',
              icon: <Monitor className="h-4 w-4 mr-1" />
            }
          };

          const currentCategory = categoryStyles[project.category as keyof typeof categoryStyles] || 
                                categoryStyles.static;

          return (
            <Card
              key={index}
              className="card-hover border-border overflow-hidden bg-background/30 backdrop-blur-md hover:bg-background/40 transition-all duration-300 flex flex-col h-full"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2 py-1 bg-blue-700 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                </div>
              )}
              <CardHeader className="relative p-0">
                {project.imageUrl ? (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-secondary/30 to-muted/50 flex flex-col items-center justify-center gap-2 p-4 text-center">
                    <ImageIcon className="h-10 w-10 text-muted-foreground/50" />
                    <span className="text-sm text-muted-foreground/70">No preview available</span>
                    <span className="text-xs text-muted-foreground/50">{project.title}</span>
                  </div>
                )}
              </CardHeader>

              <CardContent className="flex-grow p-6">
                <div className="mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full inline-flex items-center ${currentCategory.bg} ${currentCategory.text}`}>
                    {currentCategory.icon}
                    {project.category === 'static' && 'Static Website'}
                    {project.category === 'fullstack' && 'Full Stack Web'}
                    {project.category === 'mobile' && 'Mobile App'}
                    {project.category === 'desktop' && 'Desktop App'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary/50 backdrop-blur-sm text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex flex-col gap-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full group">
                      <span className="flex items-center justify-center gap-2">
                        View Live Project
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </a>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full group">
                      <span className="flex items-center justify-center gap-2">
                        View on GitHub
                        <Github className="h-4 w-4" />
                      </span>
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" className="w-full" disabled>
                    <span className="flex items-center justify-center gap-2">
                      Source Code Private
                      <Lock className="h-4 w-4" />
                    </span>
                  </Button>
                )}
                
                <div className="text-xs text-muted-foreground text-center">
                  {project.urltext}
                </div>
              </CardFooter>
            </Card>
          );
        })
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">No projects found matching your criteria.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setFilter("all");
              setSearchQuery("");
            }}
            className="mt-4"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  </div>
</section>

  );
}

export default ProjectsSection;