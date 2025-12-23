import { Layout } from "@/components/layout/Layout";
import { Shield, Target, Users, Lightbulb, Globe, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We practice what we preach. Security is embedded in everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly evolving our curriculum to match the latest threat landscapes.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive network of security professionals and learners.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making quality cybersecurity education available to everyone, everywhere.",
  },
];

const team = [
  {
    name: "Security Research Team",
    description: "Our experts continuously analyze emerging threats and develop practical training scenarios.",
  },
  {
    name: "Curriculum Development",
    description: "Industry veterans craft learning paths that translate to real-world skills.",
  },
  {
    name: "Platform Engineering",
    description: "Building secure, scalable infrastructure for hands-on learning experiences.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-glow opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary text-glow">NxtGenSec</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to democratize cybersecurity education and 
              empower the next generation of security professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-xl bg-card border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading platform for accessible, practical 
                cybersecurity education, creating a global community of skilled 
                defenders who protect our digital future.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-card border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide students with industry-relevant skills through hands-on 
                learning, real-world challenges, and recognized certifications that 
                open doors to cybersecurity careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card border border-border/50 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Built by <span className="text-primary">Experts</span>
            </h2>
            <p className="text-muted-foreground">
              Our platform is developed by industry professionals with decades 
              of combined experience in cybersecurity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((dept, index) => (
              <div
                key={dept.name}
                className="p-6 rounded-xl bg-card border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold mb-2 text-primary">{dept.name}</h3>
                <p className="text-sm text-muted-foreground">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
