import { 
  BookOpen, 
  Award, 
  Terminal, 
  Users, 
  Shield, 
  Cpu,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    description: "Follow curated skill paths from beginner to advanced, covering everything from Linux basics to advanced penetration testing.",
    href: "/skills",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Earn recognized certifications that validate your skills and boost your career in cybersecurity.",
    href: "/certifications",
  },
  {
    icon: Terminal,
    title: "CTF Challenges",
    description: "Test your skills with real-world capture the flag challenges on our dedicated CTF platform.",
    href: "/ctf",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a thriving community of security enthusiasts. Collaborate, compete, and grow together.",
    href: "/events",
  },
  {
    icon: Shield,
    title: "Real-World Labs",
    description: "Practice in safe, isolated environments that simulate real attack and defense scenarios.",
    href: "/skills",
  },
  {
    icon: Cpu,
    title: "AI-Powered Insights",
    description: "Get personalized learning recommendations and adaptive assessments powered by AI.",
    href: "/skills",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-primary">Excel</span>
          </h2>
          <p className="text-muted-foreground">
            A comprehensive platform designed to take you from curious beginner 
            to confident cybersecurity professional.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.href}
              className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {feature.title}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
