import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Calendar,
  Copy,
  CheckCircle,
  Download,
  Phone,
  Globe,
  FileText,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface ContactInfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  action: (() => void) | null;
  actionIcon: React.ReactNode | null;
  href: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  bgColor: string;
}

function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<"contact" | "connect">("contact");
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

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

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${type} copied to clipboard!`, {
        position: "top-center",
        duration: 2000,
      });
    }).catch(() => {
      toast.error("Failed to copy to clipboard", {
        position: "top-center",
        duration: 2000,
      });
    });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!", {
        description: "I'll get back to you soon.",
        position: "top-center",
      });
      form.reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hamza81khan81@gmail.com",
      action: () => copyToClipboard("hamza81khan81@gmail.com", "Email"),
      actionIcon: <Copy className="h-4 w-4" />,
      href: "mailto:hamza81khan81@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 12345 67890",
      action: () => copyToClipboard("+911234567890", "Phone number"),
      actionIcon: <Copy className="h-4 w-4" />,
      href: "tel:+911234567890"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Mumbra, India",
      action: null,
      actionIcon: null,
      href: "https://maps.google.com?q=Mumbra,India"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Availability",
      value: "Open to opportunities",
      action: null,
      actionIcon: null,
      href: "#"
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/hamzakhan0712",
      color: "hover:bg-gray-900 hover:text-white",
      bgColor: "bg-gray-900/10"
    },
    {
      name: "Resume",
      icon: <FileText className="h-5 w-5" />,
      url: "/resume.pdf",
      color: "hover:bg-gray-900 hover:text-white",
      bgColor: "bg-gray-900/10"
    },
    {
      name: "Website",
      icon: <Globe className="h-5 w-5" />,
      url: "https://initcore.vercel.app/",
       color: "hover:bg-gray-900 hover:text-white",
      bgColor: "bg-gray-900/10"
    },
   
  ];

  return (
    <section 
      id="contact" 
      className="relative py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden reveal-container"
    >
      <div ref={sectionRef} className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background opacity-30" />
        <div className="absolute left-1/2 top-0 -ml-[500px] h-[500px] w-[1000px] rounded-full bg-radial-gradient from-primary/30 via-transparent to-transparent opacity-20" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 ">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm text-sm font-medium"
          >
            <span className="text-primary mr-2">✦</span>
            Contact Me
            <span className="text-primary ml-2">✦</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Get In <span className="gradient-text bg-gradient-to-r from-primary via-foreground to-primary">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Looking for a full-stack developer with DevOps expertise to build scalable web/mobile applications?
            I'm available for projects involving modern frameworks, cloud solutions, and end-to-end system development.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Side - Contact Info & Form */}
          <div className="w-full md:w-1/2 space-y-8">
            <Card className="overflow-hidden border-border/50 bg-background/70 backdrop-blur-md hover:shadow-lg transition-all duration-300">
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold">Contact Information</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant={activeTab === "contact" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("contact")}
                      className="flex-1 sm:flex-initial"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      <span className="hidden xs:inline">Contact</span>
                    </Button>
                    <Button
                      variant={activeTab === "connect" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("connect")}
                      className="flex-1 sm:flex-initial"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      <span className="hidden xs:inline">Connect</span>
                    </Button>
                  </div>
                </div>

                {activeTab === "contact" ? (
                  <div className="space-y-3 sm:space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all bg-background/50"
                      >
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center space-x-3 sm:space-x-4 flex-grow min-w-0"
                        >
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            {item.icon}
                          </div>
                          <div className="min-w-0 overflow-hidden">
                            <h4 className="text-xs sm:text-sm font-medium text-muted-foreground truncate">
                              {item.label}
                            </h4>
                            <p className="text-sm sm:font-medium truncate">
                              {item.value}
                            </p>
                          </div>
                        </a>
                        {item.action && (
                          <button
                            onClick={item.action}
                            className="flex-shrink-0 p-1 sm:p-2 rounded-lg hover:bg-primary/10 transition-colors"
                            aria-label={`Copy ${item.label}`}
                          >
                            {item.actionIcon}
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        placeholder="Your Name"
                        {...form.register("name")}
                       
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        placeholder="Your Email"
                        {...form.register("email")}
                        
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        {...form.register("message")}
                       
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="h-4 w-4 ml-2" />
                      </Button>
                    </motion.div>
                  </form>
                )}
              </div>
            </Card>

            
          </div>

          {/* Right Side - Social Links */}
          <div className="w-full md:w-1/2">
            <Card className="overflow-hidden border-border/50 bg-background/70 backdrop-blur-md hover:shadow-lg transition-all duration-300 h-full">
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Connect With Me</h3>
                  <p className="text-muted-foreground">
                    Follow me on social media or check out my work
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex flex-col items-center justify-center p-4 rounded-lg border border-border/30 transition-all",
                          "hover:border-primary/50 bg-background/50",
                          link.color,
                          "h-full"
                        )}
                      >
                        <div className={cn("w-10 h-10 flex items-center justify-center rounded-lg mb-2", link.bgColor)}>
                          {link.icon}
                        </div>
                        <span className="font-medium text-sm">{link.name}</span>
                      </a>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/30">
                  <h4 className="font-medium mb-4">Direct Downloads</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="/resume.pdf" download>
                        <Download className="h-4 w-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                   
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Looking forward to hearing from you! I typically respond within 24-48 hours.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">
              <Mail className="h-5 w-5 mr-2" />
              Send Me a Message
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;