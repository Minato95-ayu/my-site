import { useState, useMemo } from "react";
import { repositories, Repository } from "@/data/repos";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { ActivitySection } from "@/components/ActivitySection";
import { RepositoryCard } from "@/components/RepositoryCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

/**
 * Home page for the portfolio application.
 * This page renders the profile hero, skills, repo filters, and repository cards.
 * It also provides search and badge filters for language/topic selection.
 */

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Derive unique filter options from repository data.
  const allLanguages = Array.from(
    new Set(repositories.map((r) => r.language).filter(Boolean))
  ).sort();

  const allTopics = Array.from(
    new Set(repositories.flatMap((r) => r.topics))
  ).sort();

  // Memoized filter result to avoid recalculating on every render.
  const filteredRepos = useMemo(() => {
    return repositories.filter((repo) => {
      const matchesSearch =
        searchQuery === "" ||
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLanguage =
        selectedLanguage === null || repo.language === selectedLanguage;

      const matchesTopic =
        selectedTopic === null || repo.topics.includes(selectedTopic);

      return matchesSearch && matchesLanguage && matchesTopic;
    });
  }, [searchQuery, selectedLanguage, selectedTopic]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLanguage(null);
    setSelectedTopic(null);
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedLanguage !== null || selectedTopic !== null;

  return (
    <div className="min-h-screen bg-background">
      {/* Profile Header */}
      <ProfileHeader />

      {/* Skills Section */}
      <SkillsSection />

      {/* Repositories Section */}
      <section className="container py-16 md:py-24">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-cyan-400">→</span> Explore Projects
        </h2>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search repositories by name, description, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-card/50 border-cyan-500/20 text-foreground placeholder:text-muted-foreground focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-smooth"
            />
          </div>
        </div>

        {/* Filter Chips */}
        <div className="mb-8 space-y-4">
          {/* Language Filter */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Filter by Language:</p>
            <div className="flex flex-wrap gap-2">
              {allLanguages.map((lang) => (
                <Badge
                  key={lang}
                  onClick={() =>
                    setSelectedLanguage(selectedLanguage === lang ? null : lang)
                  }
                  className={`cursor-pointer transition-smooth ${
                    selectedLanguage === lang
                      ? "bg-cyan-500 text-background border-cyan-500"
                      : "bg-white/5 text-cyan-300 border-cyan-500/30 hover:border-cyan-500/50"
                  }`}
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          {/* Topic Filter */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Filter by Topic:</p>
            <div className="flex flex-wrap gap-2">
              {allTopics.slice(0, 8).map((topic) => (
                <Badge
                  key={topic}
                  onClick={() =>
                    setSelectedTopic(selectedTopic === topic ? null : topic)
                  }
                  className={`cursor-pointer transition-smooth ${
                    selectedTopic === topic
                      ? "bg-purple-500 text-background border-purple-500"
                      : "bg-white/5 text-purple-300 border-purple-500/30 hover:border-purple-500/50"
                  }`}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-smooth"
            >
              <X className="w-4 h-4" />
              Clear filters
            </button>
          )}
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredRepos.length} of {repositories.length} repositories
        </p>

        {/* Repository Grid */}
        {filteredRepos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, index) => (
              <div
                key={repo.name}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                }}
              >
                <RepositoryCard repo={repo} />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass rounded-lg p-12 text-center">
            <p className="text-muted-foreground mb-2">No repositories found</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </section>

      {/* Activity Section */}
      <ActivitySection />

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 md:py-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>
            Built with React + TypeScript + Tailwind CSS | Powered by GitHub API
          </p>
          <p className="mt-2">
            © 2026 Minato95-ayu. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
