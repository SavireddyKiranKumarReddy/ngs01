import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  FileText, 
  User, 
  Settings,
  LogOut,
  Target,
  Shield,
  Trophy,
  Users,
  Flame,
  FlaskConical,
  HelpCircle,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
      setLoading(false);
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-12 w-12 text-primary animate-pulse mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const displayName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Student";

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Home", href: "/dashboard", active: true },
    { icon: User, label: "Profile", href: "/dashboard/profile" },
    { icon: Trophy, label: "Scoreboard", href: "/dashboard/scoreboard" },
    { icon: Target, label: "Missions", href: "/dashboard/missions", badge: 2 },
    { icon: Award, label: "Certifications", href: "/dashboard/certifications" },
  ];

  const upskillsItems = [
    { icon: BookOpen, label: "Academy", href: "/skills" },
    { icon: Flame, label: "Warmups", href: "/dashboard/warmups" },
    { icon: Target, label: "Scenarios", href: "/dashboard/scenarios" },
    { icon: FlaskConical, label: "Labs", href: "/dashboard/labs" },
  ];

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

        <nav className="flex-1 p-4 overflow-y-auto">
          {/* Upgrade Banner */}
          <Link
            to="/dashboard/upgrade"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 mb-4 hover:border-primary/50 transition-all"
          >
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Upgrade to VIP</span>
          </Link>

          {/* Main Nav */}
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
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
                  {item.badge && (
                    <span className="ml-auto bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Upskills Section */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Upskills
            </p>
            <ul className="space-y-1">
              {upskillsItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-300"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help Section */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Get Help
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-300"
                >
                  <HelpCircle className="h-5 w-5" />
                  <span className="font-medium">Support</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="p-4 border-t border-border/50">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-muted-foreground"
            onClick={handleSignOut}
          >
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
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <input
                  type="text"
                  placeholder="Quick search (Ctrl+/)"
                  className="px-4 py-2 bg-secondary/50 border border-border rounded-lg text-sm w-64 focus:outline-none focus:border-primary/50"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="https://ctf.nxtgensec.org" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="neon-outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  CONNECT
                </Button>
              </a>
              <div className="text-sm text-muted-foreground">0h 0m</div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {displayName.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium">{displayName}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-8 mb-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Welcome back, <span className="text-primary">{displayName}</span>!
                </h1>
                <p className="text-muted-foreground">Ready to continue your cybersecurity journey?</p>
              </div>
              <div className="hidden md:block">
                <Shield className="h-24 w-24 text-primary/30" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">This Month</span>
                  <Trophy className="h-4 w-4 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">0 Points</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Global Rank</span>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-3xl font-bold">-</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <h3 className="font-semibold mb-4">Warmups</h3>
              <div className="flex items-center justify-center h-20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">0</div>
                  <p className="text-sm text-muted-foreground">challenges completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hall of Fame & Ongoing */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 p-6 rounded-xl bg-card border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Hall of Fame</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground">All Time</Button>
                  <Button variant="neon-outline" size="sm">This Month</Button>
                </div>
              </div>
              <div className="text-center py-12 text-muted-foreground">
                <Trophy className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p>No rankings yet. Start learning to appear on the leaderboard!</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50">
              <h3 className="font-semibold mb-4">Ongoing</h3>
              <div className="text-center py-8 text-muted-foreground">
                <p className="text-sm">It seems you haven't started anything in progress.</p>
                <Link to="/skills">
                  <Button variant="neon-outline" size="sm" className="mt-4">
                    Start Learning
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
