
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Wrench, Cpu, Filter, ChevronDown, Check, ChevronsUpDown, Server, Database, Smartphone, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screens
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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


const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    category: "frontend",
    color: "blue",
    skills: [
      // Core Web Technologies
      // { name: "HTML5", icon: "/icons/html5.svg" },
      // { name: "CSS3", icon: "/icons/css3.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      
      // Frameworks & Libraries
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Redux", icon: "/icons/redux.svg" },
      
      // UI/Component Libraries
      { name: "Shadcn", icon: "/icons/shadcn.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "Bootstrap5", icon: "/icons/bootstrap.svg" }
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    category: "backend",
    color: "green",
    skills: [
      // Programming Languages
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      
      // Frameworks
      { name: "Django", icon: "/icons/django.svg" },
      { name: "Flask", icon: "/icons/flask.svg" },
      { name: "Spring Boot", icon: "/icons/spring.svg" },
      
      // API Technologies
      { name: "REST APIs", icon: "/icons/api.svg" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    category: "mobile",
    color: "purple",
    skills: [
      // Cross-Platform
      // { name: "React Native", icon: "/icons/react.svg" },
      
      // Native Android
      { name: "Kotlin", icon: "/icons/kotlin.svg" },
      // { name: "Android SDK", icon: "/icons/android.svg" },
      { name: "JetPack Compose", icon: "/icons/jetpack.svg" },
      
      // Backend Services
      { name: "Firebase", icon: "/icons/firebase.svg" }
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    category: "devops",
    color: "orange",
    skills: [
      // Cloud Platforms
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Google Cloud", icon: "/icons/googlecloud.svg"},
      
      // Deployment & Hosting
      { name: "Vercel", icon: "/icons/vercel.svg" },
      { name: "Render", icon: "/icons/render.svg" },
      
      // Containers & Orchestration
      { name: "Docker", icon: "/icons/docker.svg" },
      
      // CI/CD & DevOps Tools
      // { name: "CI/CD", icon: "/icons/cicd.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      
      // Networking
      // { name: "Nginx", icon: "/icons/nginx.svg" },
      // { name: "WebSockets", icon: "/icons/websocket.svg" },
      
      // API Tools
      { name: "Postman", icon: "/icons/postman.svg" }
    ],
  },
  {
    title: "Databases",
    icon: Database,
    category: "database",
    color: "pink",
    skills: [
      // Relational
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      // { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "SQLite", icon: "/icons/sqlite.svg" },
      
      // NoSQL
      // { name: "MongoDB", icon: "/icons/mongodb.svg" },
      // { name: "Firestore", icon: "/icons/firestore.svg" }
    ],
  },
];

  const filteredCategories = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter(category => category.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="relative py-10 md:py-28 md:px-12 lg:px-24 overflow-hidden reveal-container">


      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 reveal-content">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm text-sm font-medium">
            <span className="text-primary mr-2">✦</span>
            My Expertise
            <span className="text-primary ml-2">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text bg-gradient-to-r from-white via-black to-white">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From programming languages to cloud technologies, these are the tools I use to build scalable, high-performance applications.
          </p>
        </div>

        {/* Modern Tabs Interface */}
        <div className="mb-12 reveal-content" style={{transitionDelay: "0.1s"}}>
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              {/* Desktop Tabs */}
              <div className="hidden md:block w-full max-w-2xl">
                <TabsList className="grid grid-cols-6 p-1 bg-background/50 backdrop-blur-md border border-border/50 rounded-full w-full">
                  <TabsTrigger
                    value="all"
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    <span>All Skills</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="frontend"
                    className="rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    <span>Frontend</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="backend"
                    className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white"
                  >
                    <Server className="w-4 h-4 mr-2" />
                    <span>Backend</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="mobile"
                    className="rounded-full data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    <span>Mobile</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="devops"
                    className="rounded-full data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    <Cloud className="w-4 h-4 mr-2" />
                    <span>DevOps</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="database"
                    className="rounded-full data-[state=active]:bg-pink-500 data-[state=active]:text-white"
                  >
                    <Database className="w-4 h-4 mr-2" />
                    <span>Database</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Mobile Dropdown */}
              <div className="md:hidden w-full max-w-xs">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between bg-background/50 backdrop-blur-md border border-border/50"
                    >
                      <div className="flex items-center">
                        {activeCategory === "all" && <Filter className="w-4 h-4 mr-2" />}
                        {activeCategory === "frontend" && <Code className="w-4 h-4 mr-2" />}
                        {activeCategory === "backend" && <Server className="w-4 h-4 mr-2" />}
                        {activeCategory === "mobile" && <Smartphone className="w-4 h-4 mr-2" />}
                        {activeCategory === "devops" && <Cloud className="w-4 h-4 mr-2" />}
                        {activeCategory === "database" && <Database className="w-4 h-4 mr-2" />}
                        <span>
                          {activeCategory === "all" && "All Skills"}
                          {activeCategory === "frontend" && "Frontend"}
                          {activeCategory === "backend" && "Backend"}
                          {activeCategory === "mobile" && "Mobile"}
                          {activeCategory === "devops" && "DevOps"}
                          {activeCategory === "database" && "Database"}
                        </span>
                      </div>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-full min-w-[200px]">
                    <DropdownMenuItem
                      onClick={() => setActiveCategory("all")}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Filter className="w-4 h-4 mr-2" />
                        <span>All Skills</span>
                      </div>
                      {activeCategory === "all" && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => setActiveCategory("frontend")}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        <span>Frontend</span>
                      </div>
                      {activeCategory === "frontend" && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => setActiveCategory("backend")}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Server className="w-4 h-4 mr-2" />
                        <span>Backend</span>
                      </div>
                      {activeCategory === "backend" && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => setActiveCategory("mobile")}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Smartphone className="w-4 h-4 mr-2" />
                        <span>Mobile</span>
                      </div>
                      {activeCategory === "mobile" && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => setActiveCategory("devops")}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Cloud className="w-4 h-4 mr-2" />
                        <span>DevOps</span>
                      </div>
                      {activeCategory === "devops" && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => setActiveCategory("database")}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Database className="w-4 h-4 mr-2" />
                        <span>Database</span>
                      </div>
                      {activeCategory === "database" && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {/* Create a flat array of all skills from all categories */}
                {(() => {
                  // Flatten all skills into a single array with category information
                  const allSkills = filteredCategories.flatMap(category =>
                    category.skills.map((skill, i) => ({
                      ...skill,
                      category,
                      id: `${category.category}-${i}`
                    }))
                  );

                  // For mobile: show limited skills initially, for desktop: show all
                  const visibleSkills = isMobile && !showAllSkills ? allSkills.slice(0, 6) : allSkills;

                  return (
                    <>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                        {visibleSkills.map((skillItem, index) => (
                          <motion.div
                            key={skillItem.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="col-span-1"
                          >
                            <Card className={cn(
                              "overflow-hidden border-border/50 bg-background/30 backdrop-blur-md hover:bg-background/40 transition-all duration-300 h-full",
                              skillItem.category.category === "frontend" && "hover:border-blue-500/50",
                              skillItem.category.category === "backend" && "hover:border-green-500/50",
                              skillItem.category.category === "mobile" && "hover:border-purple-500/50",
                              skillItem.category.category === "devops" && "hover:border-orange-500/50",
                              skillItem.category.category === "database" && "hover:border-pink-500/50"
                            )}>
                              <CardContent className="p-4 flex flex-col items-center gap-2">
                                <div className={cn(
                                  "flex-shrink-0 w-12 h-12 rounded-lg p-2 flex items-center justify-center",
                                  skillItem.category.category === "frontend" && "bg-blue-500/10",
                                  skillItem.category.category === "backend" && "bg-green-500/10",
                                  skillItem.category.category === "mobile" && "bg-purple-500/10",
                                  skillItem.category.category === "devops" && "bg-orange-500/10",
                                  skillItem.category.category === "database" && "bg-pink-500/10"
                                )}>
                                  <img
                                    src={skillItem.icon}
                                    alt={skillItem.name}
                                    className="w-8 h-8 object-contain"
                                    onError={(e) => {
                                      e.currentTarget.src = "/icons/placeholder.svg";
                                    }}
                                  />
                                </div>
                                <div className="text-center mt-1">
                                  <p className="text-xs font-medium">{skillItem.name}</p>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      {/* Show More Button - only visible on mobile if there are more skills to show */}
                      {allSkills.length > 6 && (
                        <div className="md:hidden flex justify-center mt-8">
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setShowAllSkills(!showAllSkills)}
                            className="group"
                          >
                            {showAllSkills ? "Show Less" : "Show All Skills"}
                            <ChevronDown className={cn(
                              "ml-2 h-4 w-4 transition-transform",
                              showAllSkills && "rotate-180"
                            )} />
                          </Button>
                        </div>
                      )}
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
