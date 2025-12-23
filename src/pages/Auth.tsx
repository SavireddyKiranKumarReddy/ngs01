import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Mail, Lock, User, ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("mode") === "signup") {
      setMode("signup");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Placeholder for auth logic - will be connected to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="h-8 w-8 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.7)]" />
            <span className="text-xl font-bold">
              <span className="text-primary">NxtGen</span>
              <span className="text-foreground">Sec</span>
            </span>
          </Link>

          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-6">
              Master <span className="text-primary text-glow">Cybersecurity</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Join thousands of students learning ethical hacking, penetration testing, 
              and defense strategies through hands-on labs and real-world challenges.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div>Active Students</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div>Skill Paths</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div>Challenges</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                <span className="text-primary">NxtGen</span>
                <span className="text-foreground">Sec</span>
              </span>
            </Link>
          </div>

          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              {mode === "signin" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="text-muted-foreground">
              {mode === "signin" 
                ? "Sign in to continue your learning journey" 
                : "Start your cybersecurity learning journey today"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="pl-10 bg-secondary/50 border-border h-12"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="pl-10 bg-secondary/50 border-border h-12"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="pl-10 pr-10 bg-secondary/50 border-border h-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {mode === "signin" && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <Button 
              type="submit" 
              variant="neon" 
              className="w-full h-12" 
              disabled={isLoading}
            >
              {isLoading 
                ? "Please wait..." 
                : mode === "signin" 
                  ? "Sign In" 
                  : "Create Account"}
            </Button>
          </form>

          {/* Mode Toggle */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {mode === "signin" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("signin")}
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </p>

          {/* Terms */}
          {mode === "signup" && (
            <p className="text-center text-xs text-muted-foreground mt-4">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
