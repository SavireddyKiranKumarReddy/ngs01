# NxtGenSec - Cybersecurity Learning Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
</div>

<br />

<div align="center">
  <strong>Master Cybersecurity. Build Your Future.</strong>
  <br />
  <em>A next-generation platform for aspiring security professionals</em>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Authentication System](#-authentication-system)
- [Database Schema](#-database-schema)
- [Edge Functions](#-edge-functions)
- [Design System](#-design-system)
- [Pages & Routes](#-pages--routes)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🎯 Overview

**NxtGenSec** is a comprehensive cybersecurity learning platform designed to train the next generation of security professionals. The platform offers structured skill paths, hands-on labs, CTF challenges, and industry-recognized certifications.

### Key Highlights

- 🛡️ **Cybersecurity-focused curriculum** with multiple learning paths
- 🎮 **Gamified learning experience** with points, rankings, and achievements
- 🔐 **Secure authentication** via email/password and Google OAuth
- 📊 **Progress tracking dashboard** with personalized metrics
- 🌐 **Responsive design** optimized for all devices

---

## ✨ Features

### Public Features
- **Landing Page** - Dynamic hero section with animated backgrounds and statistics
- **Skill Paths Preview** - Overview of available learning tracks
- **Features Showcase** - Platform capabilities and benefits
- **About Page** - Organization mission and team information
- **Contact Page** - Communication channels and support
- **Events Page** - Upcoming workshops, webinars, and competitions
- **Resources Page** - Learning materials and external links
- **Services Page** - Professional services and offerings

### Authenticated Features
- **User Dashboard** - Personalized home with progress metrics
- **Profile Management** - User settings and preferences
- **Scoreboard** - Global and monthly rankings
- **Missions** - Task-based challenges with rewards
- **Certifications** - Earned credentials and achievements
- **Academy** - Structured learning modules
- **Warmups** - Quick practice challenges
- **Scenarios** - Real-world simulation exercises
- **Labs** - Hands-on technical environments

### Platform Capabilities
- **Visitor Analytics** - Privacy-respecting unique visitor tracking
- **Role-Based Access** - Admin and student role differentiation
- **Real-time Updates** - Live session management
- **Responsive UI** - Mobile-first design approach

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18.3** | UI component library |
| **TypeScript** | Type-safe development |
| **Vite** | Build tool and dev server |
| **Tailwind CSS** | Utility-first styling |
| **React Router DOM** | Client-side routing |
| **TanStack Query** | Server state management |
| **Lucide React** | Icon library |
| **Framer Motion** | Animations (via Tailwind) |

### UI Components
| Library | Usage |
|---------|-------|
| **shadcn/ui** | Pre-built accessible components |
| **Radix UI** | Headless UI primitives |
| **class-variance-authority** | Component variants |
| **Sonner** | Toast notifications |

### Backend (Lovable Cloud)
| Service | Function |
|---------|----------|
| **Supabase Auth** | Authentication & sessions |
| **Supabase Database** | PostgreSQL data storage |
| **Edge Functions** | Serverless backend logic |
| **Row Level Security** | Data access control |

---

## 📁 Project Structure

```
nxtgensec/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   ├── assets/                    # Static assets
│   │
│   ├── components/
│   │   ├── home/                  # Landing page sections
│   │   │   ├── CTASection.tsx     # Call-to-action block
│   │   │   ├── FeaturesSection.tsx # Features grid
│   │   │   ├── HeroSection.tsx    # Hero with animations
│   │   │   └── SkillPathsPreview.tsx # Learning paths
│   │   │
│   │   ├── layout/                # Layout components
│   │   │   ├── Footer.tsx         # Site footer
│   │   │   ├── Layout.tsx         # Page wrapper
│   │   │   └── Navbar.tsx         # Navigation header
│   │   │
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx         # Custom button variants
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (40+ components)
│   │   │
│   │   └── NavLink.tsx            # Navigation link component
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   └── use-toast.ts           # Toast notifications
│   │
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts          # Supabase client instance
│   │       └── types.ts           # Auto-generated types
│   │
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn)
│   │
│   ├── pages/
│   │   ├── About.tsx              # About page
│   │   ├── Auth.tsx               # Login/Signup page
│   │   ├── Contact.tsx            # Contact page
│   │   ├── Dashboard.tsx          # User dashboard
│   │   ├── Events.tsx             # Events listing
│   │   ├── Index.tsx              # Home page
│   │   ├── NotFound.tsx           # 404 page
│   │   ├── Resources.tsx          # Resources page
│   │   ├── Services.tsx           # Services page
│   │   └── Skills.tsx             # Skill paths page
│   │
│   ├── App.css                    # Global styles
│   ├── App.tsx                    # Root component & routes
│   ├── index.css                  # Tailwind & design tokens
│   ├── main.tsx                   # App entry point
│   └── vite-env.d.ts              # Vite type declarations
│
├── supabase/
│   ├── config.toml                # Supabase configuration
│   └── functions/
│       └── track-visitor/
│           └── index.ts           # Visitor tracking function
│
├── .env                           # Environment variables
├── components.json                # shadcn/ui configuration
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML entry point
├── package.json                   # Dependencies
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript config
└── vite.config.ts                 # Vite configuration
```

---

## 🔐 Authentication System

### Supported Authentication Methods

#### 1. Email/Password Authentication
- **Sign Up**: New user registration with full name, email, and password
- **Sign In**: Existing user login
- **Password Requirements**: Standard security validation
- **Email Confirmation**: Configurable (auto-confirm enabled for development)

#### 2. Google OAuth
- **One-click sign-in** via Google account
- **Automatic profile creation** from Google metadata
- **Seamless session management**

### Authentication Flow

```
┌─────────────────────────────────────────────────────────────┐
│                         Auth Page                           │
│                        (/auth)                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────┴────────────────────┐
         │                                         │
         ▼                                         ▼
┌─────────────────┐                     ┌─────────────────┐
│  Email/Password │                     │  Google OAuth   │
│     Form        │                     │    Button       │
└────────┬────────┘                     └────────┬────────┘
         │                                       │
         ▼                                       ▼
┌─────────────────┐                     ┌─────────────────┐
│ Supabase Auth   │                     │ Google Sign-In  │
│  signUp/signIn  │                     │   Flow          │
└────────┬────────┘                     └────────┬────────┘
         │                                       │
         └───────────────────┬───────────────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ onAuthStateChange   │
                  │    Listener         │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │  Create Profile +   │
                  │  Assign Role        │
                  │  (via DB trigger)   │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Redirect to         │
                  │   /dashboard        │
                  └─────────────────────┘
```

### Session Management
- **Persistent sessions** via localStorage
- **Auto token refresh** handled by Supabase client
- **Protected routes** redirect unauthenticated users to `/auth`
- **Sign out** clears session and redirects to home

---

## 🗄️ Database Schema

### Tables

#### `profiles`
Stores extended user information linked to Supabase Auth.

| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| `id` | `uuid` | No | - | Primary key (matches auth.users.id) |
| `email` | `text` | Yes | - | User's email address |
| `full_name` | `text` | Yes | - | Display name |
| `avatar_url` | `text` | Yes | - | Profile picture URL |
| `created_at` | `timestamptz` | No | `now()` | Record creation time |
| `updated_at` | `timestamptz` | No | `now()` | Last update time |

**RLS Policies:**
- ✅ Users can view their own profile
- ✅ Users can update their own profile
- ❌ Users cannot insert profiles (handled by trigger)
- ❌ Users cannot delete profiles

---

#### `user_roles`
Manages role-based access control (RBAC).

| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| `id` | `uuid` | No | `gen_random_uuid()` | Primary key |
| `user_id` | `uuid` | No | - | Reference to user |
| `role` | `app_role` | No | `'student'` | User's role |

**Role Enum (`app_role`):**
- `admin` - Full administrative access
- `student` - Standard user access

**RLS Policies:**
- ✅ Users can view their own roles
- ❌ Users cannot insert/update/delete roles (admin only)

---

#### `visitors`
Privacy-respecting analytics for unique visitor tracking.

| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| `id` | `uuid` | No | `gen_random_uuid()` | Primary key |
| `ip_hash` | `text` | No | - | SHA-256 hash of IP (privacy) |
| `first_visit` | `timestamptz` | No | `now()` | First visit timestamp |
| `last_visit` | `timestamptz` | No | `now()` | Most recent visit |

**RLS Policies:**
- ✅ Anyone can insert visitors
- ✅ Anyone can view visitor count
- ✅ Visitors can update their own record

---

### Database Functions

#### `handle_new_user()`
**Trigger function** that runs on new user signup:
1. Creates a profile record with user metadata
2. Assigns the default `student` role

#### `has_role(_user_id, _role)`
**Security definer function** for role checking:
- Bypasses RLS for role verification
- Used in policies and application logic
- Prevents recursive RLS issues

#### `update_updated_at_column()`
**Trigger function** for automatic timestamp updates.

---

## ⚡ Edge Functions

### `track-visitor`

**Purpose:** Privacy-respecting unique visitor analytics

**Endpoint:** `POST /functions/v1/track-visitor`

**Authentication:** Public (no JWT required)

**Flow:**
1. Extract client IP from request headers
2. Generate SHA-256 hash of IP + salt (privacy protection)
3. Upsert visitor record (insert new or update last_visit)
4. Return total unique visitor count

**Request:**
```bash
POST /functions/v1/track-visitor
Headers:
  - Content-Type: application/json
```

**Response:**
```json
{
  "count": 42
}
```

**Privacy Features:**
- IP addresses are never stored in plain text
- Only salted hashes are persisted
- Compliant with privacy-focused analytics practices

---

## 🎨 Design System

### Color Palette

The platform uses a **dark cybersecurity theme** with neon green accents.

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | `0 0% 4%` | Page background |
| `--foreground` | `0 0% 100%` | Primary text |
| `--card` | `0 0% 7%` | Card surfaces |
| `--primary` | `152 100% 50%` | Brand color (neon green) |
| `--secondary` | `0 0% 12%` | Secondary surfaces |
| `--muted` | `0 0% 15%` | Muted elements |
| `--muted-foreground` | `0 0% 65%` | Secondary text |
| `--border` | `0 0% 18%` | Borders |
| `--destructive` | `0 84% 60%` | Error states |

### Custom Design Tokens

```css
/* Neon glow effects */
--neon-green-glow: 0 0 20px hsl(152 100% 50% / 0.5);
--neon-green-glow-strong: 0 0 40px hsl(152 100% 50% / 0.7);

/* Gradients */
--gradient-dark: linear-gradient(180deg, hsl(0 0% 7%) 0%, hsl(0 0% 4%) 100%);
--gradient-glow: linear-gradient(135deg, hsl(152 100% 50% / 0.1) 0%, transparent 50%);
--gradient-hero: radial-gradient(ellipse at top, hsl(152 100% 50% / 0.15) 0%, transparent 50%);
```

### Typography

- **Primary Font:** Inter (weights: 300-900)
- **Monospace Font:** JetBrains Mono (for code/technical content)

### Button Variants

| Variant | Description |
|---------|-------------|
| `neon` | Primary neon green with glow effect |
| `neon-outline` | Outlined neon green |
| `glass` | Glassmorphism style |
| `ghost` | Minimal/transparent |
| `destructive` | Error/danger actions |

### Utility Classes

```css
.glow-effect        /* Standard neon glow */
.glow-effect-strong /* Intense neon glow */
.glass-card         /* Glassmorphism card */
.gradient-border    /* Animated gradient border */
.text-glow          /* Text shadow glow */
.cyber-grid         /* Grid pattern background */
.hero-glow          /* Hero section gradient */
```

### Animations

| Class | Effect |
|-------|--------|
| `animate-glow-pulse` | Pulsing glow intensity |
| `animate-float` | Gentle floating motion |
| `animate-scan` | Scanning line effect |
| `animate-fade-in` | Fade in on load |
| `animate-ping` | Ping/ripple effect |

---

## 📍 Pages & Routes

| Route | Component | Access | Description |
|-------|-----------|--------|-------------|
| `/` | `Index` | Public | Landing page with hero and features |
| `/about` | `About` | Public | Organization information |
| `/services` | `Services` | Public | Professional services |
| `/contact` | `Contact` | Public | Contact information |
| `/skills` | `Skills` | Public | Learning paths overview |
| `/skills/:id` | `Skills` | Public | Specific skill path details |
| `/resources` | `Resources` | Public | Learning resources |
| `/events` | `Events` | Public | Events and workshops |
| `/auth` | `Auth` | Public | Login/Signup page |
| `/dashboard` | `Dashboard` | Protected | User dashboard |
| `*` | `NotFound` | Public | 404 error page |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nxtgensec
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🔧 Environment Variables

The following environment variables are automatically configured by Lovable Cloud:

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/public key |
| `VITE_SUPABASE_PROJECT_ID` | Supabase project ID |

**Note:** These are automatically managed and should not be modified manually.

---

## 🌐 Deployment

### Lovable Deployment

1. Click the **"Publish"** button in the Lovable editor
2. Frontend changes require clicking **"Update"** in the publish dialog
3. Backend changes (edge functions, database migrations) deploy automatically

### Custom Domain

1. Navigate to **Project → Settings → Domains**
2. Add your custom domain
3. Configure DNS records as instructed
4. (Requires paid Lovable plan)

---

## 🤝 Contributing

### Development Guidelines

1. **Code Style**
   - Use TypeScript for all new code
   - Follow existing naming conventions
   - Use semantic color tokens (not direct colors)

2. **Components**
   - Create small, focused components
   - Use shadcn/ui components when available
   - Add proper TypeScript types

3. **Styling**
   - Use Tailwind CSS utilities
   - Leverage design system tokens
   - Ensure responsive design

4. **Testing**
   - Test authentication flows
   - Verify RLS policies
   - Check mobile responsiveness

---

## 📄 License

This project is proprietary software developed for NxtGenSec.

---

## 🙏 Acknowledgments

- **Lovable** - AI-powered development platform
- **Supabase** - Backend infrastructure
- **shadcn/ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide** - Icon library

---

<div align="center">
  <strong>Built with 💚 for the cybersecurity community</strong>
  <br />
  <em>NxtGenSec © 2025</em>
</div>
