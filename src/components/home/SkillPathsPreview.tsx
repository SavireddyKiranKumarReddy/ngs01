import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, BookOpen, Star } from "lucide-react";

const skillPaths = [
  {
    id: 1,
    title: "Cybersecurity Fundamentals",
    description: "Build a strong foundation in security concepts, threat landscapes, and defensive strategies.",
    modules: 12,
    duration: "20 hours",
    level: "Beginner",
    color: "from-green-500/20 to-transparent",
  },
  {
    id: 2,
    title: "Linux Mastery",
    description: "Master Linux command line, system administration, and security hardening techniques.",
    modules: 15,
    duration: "25 hours",
    level: "Beginner",
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: 3,
    title: "Web Application Security",
    description: "Learn to identify and exploit web vulnerabilities including XSS, SQLi, and more.",
    modules: 18,
    duration: "30 hours",
    level: "Intermediate",
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: 4,
    title: "Ethical Hacking",
    description: "Comprehensive penetration testing methodology from reconnaissance to reporting.",
    modules: 24,
    duration: "40 hours",
    level: "Advanced",
    color: "from-red-500/20 to-transparent",
  },
];

export function SkillPathsPreview() {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Popular <span className="text-primary">Skill Paths</span>
            </h2>
            <p className="text-muted-foreground">
              Start your journey with our most popular learning tracks
            </p>
          </div>
          <Link to="/skills">
            <Button variant="neon-outline" className="group">
              View All Paths
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Skill Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillPaths.map((path, index) => (
            <Link
              key={path.id}
              to={`/skills/${path.id}`}
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 overflow-hidden transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {path.level}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {path.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {path.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>{path.modules} Modules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{path.duration}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
