import { Layout } from "@/components/layout/Layout";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Search,
  Wrench,
  BookOpen,
  FileCode,
  Link as LinkIcon
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  { id: "all", name: "All", icon: BookOpen },
  { id: "tools", name: "Tools", icon: Wrench },
  { id: "cheatsheets", name: "Cheat Sheets", icon: FileCode },
  { id: "notes", name: "Notes", icon: FileText },
  { id: "links", name: "Links", icon: LinkIcon },
];

const resources = [
  {
    id: 1,
    title: "Nmap Cheat Sheet",
    description: "Comprehensive guide to Nmap commands for network scanning and enumeration.",
    category: "cheatsheets",
    type: "PDF",
    size: "2.4 MB",
    downloadable: true,
  },
  {
    id: 2,
    title: "Linux Command Reference",
    description: "Essential Linux commands for security professionals and system administrators.",
    category: "cheatsheets",
    type: "PDF",
    size: "1.8 MB",
    downloadable: true,
  },
  {
    id: 3,
    title: "Burp Suite Tutorial",
    description: "Complete guide to using Burp Suite for web application security testing.",
    category: "notes",
    type: "PDF",
    size: "5.2 MB",
    downloadable: true,
  },
  {
    id: 4,
    title: "Metasploit Framework",
    description: "Popular penetration testing framework for exploit development and testing.",
    category: "tools",
    type: "Link",
    link: "https://www.metasploit.com",
    downloadable: false,
  },
  {
    id: 5,
    title: "OWASP Testing Guide",
    description: "Comprehensive web application security testing methodology by OWASP.",
    category: "links",
    type: "Link",
    link: "https://owasp.org/www-project-web-security-testing-guide/",
    downloadable: false,
  },
  {
    id: 6,
    title: "SQL Injection Cheat Sheet",
    description: "Quick reference for SQL injection techniques and payloads.",
    category: "cheatsheets",
    type: "PDF",
    size: "980 KB",
    downloadable: true,
  },
  {
    id: 7,
    title: "Wireshark",
    description: "Network protocol analyzer for traffic capture and analysis.",
    category: "tools",
    type: "Link",
    link: "https://www.wireshark.org",
    downloadable: false,
  },
  {
    id: 8,
    title: "Reverse Engineering Notes",
    description: "Notes on binary analysis, debugging, and reverse engineering techniques.",
    category: "notes",
    type: "PDF",
    size: "3.7 MB",
    downloadable: true,
  },
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-glow opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Resources <span className="text-primary text-glow">Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tools, cheat sheets, notes, and curated links to accelerate your learning.
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
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <div
                key={resource.id}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  {resource.downloadable ? (
                    <>
                      <span className="text-sm text-muted-foreground">{resource.size}</span>
                      <Button variant="neon-outline" size="sm">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="text-sm text-muted-foreground">External</span>
                      <Button variant="neon-outline" size="sm" asChild>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Visit
                        </a>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
