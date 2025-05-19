import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Download,
  Award,
  Trophy,
  Code2,
  Briefcase,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

type AchievementType = "certification" | "hackathon" | "internship" | "award";

interface Achievement {
  id: string;
  type: AchievementType;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  image: string;
  description: string;
  location?: string;
  prize?: string;
  duration?: string;
}

export default function AchievementsSection() {
  const [activeFilter, setActiveFilter] = useState<AchievementType | "all">("all");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  // Sample achievement data - replace with your actual achievements
  const achievements: Achievement[] = [
      {
      "id": "1",
      "type": "hackathon",
      "title": "CODECRAFTERS 2.0",
      "issuer": "Saraswati College of Engineering",
      "date": "March 2025",
      "prize": "Participation",
      "location": "Kharghar",
      "skills": ["Spring", "React", "REST API", "Team Leadership"],
      "image": "/hackathon1.jpg",
      "description": "Participated in the 'CODECRAFTERS 2.0' hackathon held from 15th to 16th March 2025 at Saraswati College of Engineering, Kharghar, representing InitCore. Contributed to the development of a digital asset management solution for financial instruments as part of a collaborative team effort."
    },

    {
      id: "2",
      type: "certification",
      title: "CISCO Python Essentials",
      issuer: "CISCO Networking Academy",
      date: "June 2024",
      skills: ["Python"],
      image: "/certificate1.jpg",
      description:
        "Completed Python Essentials 1 by Cisco & OpenEDG. Gained hands-on skills in Python 3 programming, algorithms, and core libraries. Prepared for PCEP certification.",
    },
    {
      "id": "3",
      "type": "award",
      "title": "SCOE AVISHKAR 2025 - Project Competition",
      "issuer": "Saraswati College of Engineering",
      "date": "April 2025",
      "skills": ["Project Leadership", "Team Management", "Engineering Innovation"],
      "image": "/award1.jpg",
      "description": "Secured a position 2nd in the 'SCOE AVISHKAR - 2025' Project Competition held on 4th April 2025 as the Team Leader, showcasing excellence in project execution and technical innovation."
    }

  ];

  const filteredAchievements =
    activeFilter === "all"
      ? achievements
      : achievements.filter((ach) => ach.type === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getTypeIcon = (type: AchievementType) => {
    switch (type) {
      case "certification":
        return <Award className="h-4 w-4" />;
      case "hackathon":
        return <Code2 className="h-4 w-4" />;
      case "internship":
        return <Briefcase className="h-4 w-4" />;
      case "award":
        return <Trophy className="h-4 w-4" />;
      default:
        return <Award className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: AchievementType) => {
    switch (type) {
      case "certification":
        return "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300";
      case "hackathon":
        return "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300";
      case "internship":
        return "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300";
      case "award":
        return "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300";
    }
  };

 const handleImageClick = (image: string, title: string) => {
  console.log('Opening image:', image, title); // Debugging
  setFullScreenImage({ url: image, title });
};

  return (
    <section id="achievements" className="relative py-16 md:py-24 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 bg-background/80 backdrop-blur-sm border-primary/20 text-primary hover:bg-background/90"
          >
            <Award className="h-4 w-4 mr-2" />
            Professional Milestones
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognitions, certifications, and experiences that demonstrate my
            skills and dedication.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("all")}
          >
            All
          </Button>
          <Button
            variant={activeFilter === "certification" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("certification")}
            className="gap-2"
          >
            <Award className="h-4 w-4" />
            Certifications
          </Button>
          <Button
            variant={activeFilter === "hackathon" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("hackathon")}
            className="gap-2"
          >
            <Code2 className="h-4 w-4" />
            Hackathons
          </Button>
          <Button
            variant={activeFilter === "internship" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("internship")}
            className="gap-2"
          >
            <Briefcase className="h-4 w-4" />
            Internships
          </Button>
          <Button
            variant={activeFilter === "award" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("award")}
            className="gap-2"
          >
            <Trophy className="h-4 w-4" />
            Awards
          </Button>
        </motion.div>

        {/* Achievements grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredAchievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <div className="h-full flex flex-col bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden hover:shadow-lg transition-all">
                {/* Image header */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-background/50 overflow-hidden group">
                  {achievement.image ? (
                    <>
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover cursor-zoom-in"
                        onClick={() =>
                          handleImageClick(achievement.image, achievement.title)
                        }
                      />
                     
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <div className="text-center p-4">
                        <Award className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-600" />
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          {achievement.type === "certification"
                            ? "Certification Preview"
                            : achievement.type === "hackathon"
                            ? "Hackathon Project"
                            : achievement.type === "internship"
                            ? "Company Logo"
                            : "Award Image"}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <Badge
                      className={cn(
                        "text-xs font-medium",
                        getTypeColor(achievement.type))
                      }
                    >
                      {getTypeIcon(achievement.type)}
                      <span className="ml-2 capitalize">{achievement.type}</span>
                    </Badge>
                    <button
                      onClick={() => toggleExpand(achievement.id)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={
                        expandedCard === achievement.id
                          ? "Collapse card"
                          : "Expand card"
                      }
                    >
                      {expandedCard === achievement.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  {/* Title and issuer */}
                  <h3 className="text-lg font-bold mb-1 line-clamp-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {achievement.issuer}
                  </p>

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-4">
                    <span>{achievement.date}</span>
                    {achievement.location && (
                      <>
                        <span>•</span>
                        <span>{achievement.location}</span>
                      </>
                    )}
                    {achievement.prize && (
                      <>
                        <span>•</span>
                        <span className="font-medium text-primary">
                          {achievement.prize}
                        </span>
                      </>
                    )}
                    {achievement.duration && (
                      <>
                        <span>•</span>
                        <span>{achievement.duration}</span>
                      </>
                    )}
                  </div>

                  {/* Expanded content */}
                  {expandedCard === achievement.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground mb-4">
                        {achievement.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-xs font-medium text-muted-foreground mb-2">
                          SKILLS DEMONSTRATED
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs bg-accent/50 hover:bg-accent/70 text-foreground"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Actions */}
                  <div className="mt-auto pt-4 flex gap-2">
                    {achievement.credentialUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-2"
                      >
                        <a
                          href={achievement.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Verify
                        </a>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button variant="outline" className="gap-2">
            <Award className="h-4 w-4" />
            View Full Achievement History
          </Button>
        </motion.div>

        {/* Full screen image dialog */}
        <Dialog
        open={!!fullScreenImage}
        onOpenChange={(open) => !open && setFullScreenImage(null)}
        >
        <DialogContent className="fixed  flex items-center justify-center p-0 bg-black/90 backdrop-blur-sm border-none max-h-[100dvh]">
            {fullScreenImage && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Close button (top-right, fixed position) */}
                <DialogClose asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -top-6 -right-6 z-50 rounded-full bg-white/30 hover:bg-white/50 text-white"
                    onClick={() => setFullScreenImage(null)}
                >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                </Button>
                </DialogClose>

                {/* Image container (centered with max constraints) */}
                <div className="relative flex flex-col items-center justify-center w-full h-full">
                <div className="flex items-center justify-center w-full h-full max-w-[100vw] max-h-[100vh]">
                    <img
                    src={fullScreenImage.url}
                    alt={fullScreenImage.title}
                    className="object-contain w-80% h-80% rounded-lg"
                    style={{
                        aspectRatio: "auto",
                    }}
                    />
                </div>

                {/* Caption (fixed at bottom-center) */}
                {fullScreenImage.title && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 max-w-[90%]">
                    <p className="text-sm text-white text-center truncate">
                        {fullScreenImage.title}
                    </p>
                    </div>
                )}
                </div>
            </div>
            )}
        </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}