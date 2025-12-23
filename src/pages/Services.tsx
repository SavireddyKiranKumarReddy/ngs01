import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Search, 
  Lock, 
  Server, 
  Brain, 
  Cpu,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
    features: [
      "Web Application Testing",
      "Network Penetration Testing",
      "Mobile App Security",
      "API Security Assessment",
    ],
  },
  {
    icon: Shield,
    title: "Security Consulting",
    description: "Expert guidance to build and improve your organization's security posture.",
    features: [
      "Security Architecture Review",
      "Compliance Assessment",
      "Risk Management",
      "Security Policy Development",
    ],
  },
  {
    icon: Lock,
    title: "Incident Response",
    description: "Rapid response and recovery services when security incidents occur.",
    features: [
      "24/7 Emergency Response",
      "Forensic Analysis",
      "Breach Containment",
      "Recovery Planning",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Securing your cloud and on-premise infrastructure against modern threats.",
    features: [
      "Cloud Security (AWS, Azure, GCP)",
      "Container Security",
      "DevSecOps Integration",
      "Infrastructure Hardening",
    ],
  },
  {
    icon: Brain,
    title: "Security Training",
    description: "Custom training programs to upskill your team in security best practices.",
    features: [
      "Employee Awareness Training",
      "Developer Security Training",
      "Red Team Training",
      "Custom Workshops",
    ],
  },
  {
    icon: Cpu,
    title: "AI Security Solutions",
    description: "Leveraging AI and automation for enhanced threat detection and response.",
    features: [
      "AI-Powered Threat Detection",
      "Automated Security Monitoring",
      "Intelligent SIEM Solutions",
      "ML-Based Anomaly Detection",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-glow opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary text-glow">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Enterprise-grade cybersecurity solutions tailored to protect 
              your organization from evolving threats.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-lg bg-primary/10 inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom <span className="text-primary">Solution</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team can design tailored security solutions that meet your 
              specific requirements and compliance needs.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
