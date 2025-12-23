import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  Users, 
  ArrowRight, 
  Search,
  Filter,
  Shield,
  Terminal,
  Globe,
  Server,
  Lock,
  Code
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const skillPaths = [
  {
    id: 1,
    icon: Shield,
    title: "Cybersecurity Fundamentals",
    description: "Build a strong foundation in security concepts, threat landscapes, CIA triad, and defensive strategies.",
    modules: 12,
    duration: "20 hours",
    level: "Beginner",
    enrolled: 2340,
    topics: ["CIA Triad", "Threat Modeling", "Security Controls", "Risk Assessment"],
  },
  {
    id: 2,
    icon: Terminal,
    title: "Linux Mastery for Security",
    description: "Master Linux command line, system administration, permissions, and security hardening techniques.",
    modules: 15,
    duration: "25 hours",
    level: "Beginner",
    enrolled: 1890,
    topics: ["Bash Scripting", "System Admin", "Permissions", "Hardening"],
  },
  {
    id: 3,
    icon: Globe,
    title: "Web Application Security",
    description: "Learn to identify and exploit web vulnerabilities including XSS, SQLi, CSRF, and authentication flaws.",
    modules: 18,
    duration: "30 hours",
    level: "Intermediate",
    enrolled: 1567,
    topics: ["OWASP Top 10", "XSS", "SQL Injection", "Authentication"],
  },
  {
    id: 4,
    icon: Server,
    title: "Network Security",
    description: "Deep dive into network protocols, traffic analysis, IDS/IPS, and network-based attacks.",
    modules: 16,
    duration: "28 hours",
    level: "Intermediate",
    enrolled: 1234,
    topics: ["TCP/IP", "Wireshark", "Firewalls", "IDS/IPS"],
  },
  {
    id: 5,
    icon: Lock,
    title: "Ethical Hacking & Penetration Testing",
    description: "Comprehensive methodology from reconnaissance to exploitation and professional reporting.",
    modules: 24,
    duration: "40 hours",
    level: "Advanced",
    enrolled: 956,
    topics: ["Recon", "Exploitation", "Privilege Escalation", "Reporting"],
  },
  {
    id: 6,
    icon: Code,
    title: "CTF Preparation",
    description: "Master the skills needed to excel in Capture The Flag competitions across all categories.",
    modules: 20,
    duration: "35 hours",
    level: "Intermediate",
    enrolled: 1123,
    topics: ["Forensics", "Crypto", "Reversing", "PWN"],
  },
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredPaths = skillPaths.filter((path) => {
    const matchesSearch = path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === "All" || path.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-glow opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Skill <span className="text-primary text-glow">Paths</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Structured learning tracks designed to take you from beginner 
              to cybersecurity professional.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search skill paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-2">
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Paths Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map((path, index) => (
              <Link
                key={path.id}
                to={`/skills/${path.id}`}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <path.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                    {path.level}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {path.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {path.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {path.topics.slice(0, 3).map((topic) => (
                    <span 
                      key={topic} 
                      className="px-2 py-1 rounded-md text-xs bg-primary/10 text-primary"
                    >
                      {topic}
                    </span>
                  ))}
                  {path.topics.length > 3 && (
                    <span className="px-2 py-1 rounded-md text-xs bg-secondary text-muted-foreground">
                      +{path.topics.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{path.modules} modules</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{path.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{path.enrolled.toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPaths.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No skill paths found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
