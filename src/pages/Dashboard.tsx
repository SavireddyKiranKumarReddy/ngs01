import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  FileText, 
  User, 
  Settings,
  LogOut,
  ChevronRight,
  Play,
  Clock,
  Target,
  Trophy,
  Activity,
  TrendingUp,
  Shield
} from "lucide-react";

const stats = [
  { label: "Skill Paths", value: "3", icon: BookOpen, trend: "+1 this month" },
  { label: "Certifications", value: "2", icon: Award, trend: "1 in progress" },
  { label: "Challenges", value: "47", icon: Target, trend: "+12 this week" },
  { label: "Hours Learned", value: "86", icon: Clock, trend: "+8 this week" },
];

const recentActivity = [
  { 
    title: "Completed Module: SQL Injection Basics",
    path: "Web Application Security",
    time: "2 hours ago",
    type: "module"
  },
  { 
    title: "Earned Certificate: Linux Fundamentals",
    path: "Linux Mastery",
    time: "1 day ago",
    type: "certificate"
  },
  { 
    title: "Started: Network Security Path",
    path: "Network Security",
    time: "2 days ago",
    type: "path"
  },
  { 
    title: "Completed Challenge: Basic Buffer Overflow",
    path: "CTF Preparation",
    time: "3 days ago",
    type: "challenge"
  },
];

const currentPaths = [
  { 
    title: "Web Application Security", 
    progress: 65, 
    nextModule: "Authentication Vulnerabilities",
    modules: 18,
    completed: 12
  },
  { 
    title: "Linux Mastery", 
    progress: 100, 
    nextModule: "Completed!",
    modules: 15,
    completed: 15
  },
  { 
    title: "Network Security", 
    progress: 15, 
    nextModule: "TCP/IP Fundamentals",
    modules: 16,
    completed: 2
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border/50 bg-card/30">
        <div className="p-6 border-b border-border/50">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">
              <span className="text-primary">NxtGen</span>
              <span className="text-foreground">Sec</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {[
              { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
              { icon: BookOpen, label: "Skill Paths", href: "/skills" },
              { icon: Award, label: "Certifications", href: "/certifications" },
              { icon: FileText, label: "Resources", href: "/resources" },
              { icon: User, label: "Profile", href: "/profile" },
              { icon: Settings, label: "Settings", href: "/settings" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-border/50">
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
            <LogOut className="h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, John!</h1>
              <p className="text-muted-foreground">Continue your learning journey</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/ctf" target="_blank">
                <Button variant="neon-outline">
                  <Target className="h-4 w-4" />
                  CTF Platform
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-card border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-primary mt-2">{stat.trend}</div>
              </div>
            ))}
          </div>

          {/* Current Paths */}
          <div className="rounded-xl bg-card border border-border/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Your Skill Paths</h2>
              <Link to="/skills">
                <Button variant="ghost" size="sm">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {currentPaths.map((path, index) => (
                <div
                  key={path.title}
                  className="p-4 rounded-lg bg-secondary/30 border border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{path.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {path.completed}/{path.modules} modules
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${path.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Next: {path.nextModule}
                    </span>
                    {path.progress < 100 && (
                      <Button variant="neon-outline" size="sm">
                        <Play className="h-3 w-3" />
                        Continue
                      </Button>
                    )}
                    {path.progress === 100 && (
                      <span className="text-sm text-primary font-medium">
                        <Trophy className="h-4 w-4 inline mr-1" />
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-xl bg-card border border-border/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <Activity className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/30 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    {activity.type === "module" && <BookOpen className="h-4 w-4 text-primary" />}
                    {activity.type === "certificate" && <Award className="h-4 w-4 text-primary" />}
                    {activity.type === "path" && <Target className="h-4 w-4 text-primary" />}
                    {activity.type === "challenge" && <Trophy className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.path}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
