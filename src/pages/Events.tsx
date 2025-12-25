import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight,
  Video,
  Trophy
} from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "NxtGenSec CTF 2025",
    description: "Our flagship annual CTF competition with cash prizes and job opportunities.",
    date: "March 15-17, 2025",
    time: "48 hours",
    location: "Online",
    type: "CTF",
    attendees: 50,
    featured: true,
  },
  {
    id: 2,
    title: "Web Security Workshop",
    description: "Hands-on workshop covering OWASP Top 10 vulnerabilities and exploitation techniques.",
    date: "February 8, 2025",
    time: "10:00 AM IST",
    location: "Online",
    type: "Workshop",
    attendees: 25,
    featured: false,
  },
  {
    id: 3,
    title: "Ethical Hacking Bootcamp",
    description: "Intensive 2-day bootcamp on penetration testing methodology and tools.",
    date: "February 22-23, 2025",
    time: "9:00 AM IST",
    location: "Bangalore, India",
    type: "Bootcamp",
    attendees: 15,
    featured: false,
  },
];

const pastEvents = [
  {
    id: 5,
    title: "NxtGenSec CTF 2024",
    date: "December 2024",
    participants: 32,
    type: "CTF",
  },
  {
    id: 6,
    title: "Linux Security Fundamentals",
    date: "November 2024",
    participants: 18,
    type: "Workshop",
  },
];

export default function Events() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-glow opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Events & <span className="text-primary text-glow">Hackathons</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our workshops, CTF competitions, and community events to 
              level up your skills and network with fellow security enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents.filter(e => e.featured).map((event) => (
        <section key={event.id} className="py-8">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 p-8 md:p-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Featured Event</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h2>
                <p className="text-muted-foreground max-w-2xl mb-6">{event.description}</p>
                
                <div className="flex flex-wrap gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.attendees}+ Expected</span>
                  </div>
                </div>

                <Button variant="neon" size="lg" className="group">
                  Register Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.filter(e => !e.featured).map((event, index) => (
              <div
                key={event.id}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {event.type}
                  </span>
                  {event.location === "Online" && (
                    <Video className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>

                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button variant="neon-outline" size="sm" className="w-full">
                  Register
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            Past <span className="text-primary">Events</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                className="p-6 rounded-xl bg-card border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground mb-4 inline-block">
                  {event.type}
                </span>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{event.date}</span>
                  <span>{event.participants} participants</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
