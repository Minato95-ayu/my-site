import { profileStats } from "@/data/repos";
import { Github, Twitter, Globe } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663669547532/T8emSQgZQ2xqntK7fGc8gE/hero-bg-dark-2rUcPkd4FcDCxKNBvfthFm.webp";
const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663669547532/T8emSQgZQ2xqntK7fGc8gE/logo-minato-4YXTEZ6CNTEQpBs7FhP26G.webp";

// Hero section showing the main profile header, stats, and external links.
export function ProfileHeader() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden glass p-2 glow-cyan">
              <img
                src={LOGO}
                alt="Minato Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Center: Profile Info */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="mb-2 inline-block md:inline">
              <span className="text-cyan-400 text-sm font-mono">@minato95-ayu</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ayush Kaushik
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              🚀 Founder @ Adumate | Creator of CODEX | Full Stack Developer | AI/ML Enthusiast | DSA Expert
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="glass rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-cyan-400">{profileStats.totalRepos}</div>
                <div className="text-xs text-muted-foreground">Repositories</div>
              </div>
              <div className="glass rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{profileStats.followers}</div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              <div className="glass rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-orange-400">{profileStats.following}</div>
                <div className="text-xs text-muted-foreground">Following</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://github.com/Minato95-ayu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg p-3 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/o_Ayush_kaushik"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg p-3 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://adumate.in"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg p-3 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-smooth"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </div>
  );
}
