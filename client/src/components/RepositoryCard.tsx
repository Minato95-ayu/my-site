import { Repository } from "@/data/repos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, GitFork } from "lucide-react";

interface RepositoryCardProps {
  repo: Repository;
}

// Card component for individual repository entries.
// Displays name, description, language badge, topics, and GitHub stats.
export function RepositoryCard({ repo }: RepositoryCardProps) {
  const languageColors: Record<string, string> = {
    Python: "bg-blue-500/20 text-blue-300",
    TypeScript: "bg-blue-600/20 text-blue-200",
    JavaScript: "bg-yellow-500/20 text-yellow-300",
    HTML: "bg-orange-500/20 text-orange-300",
    Dart: "bg-cyan-500/20 text-cyan-300",
    "Jupyter Notebook": "bg-purple-500/20 text-purple-300",
  };

  const languageColor = languageColors[repo.language || ""] || "bg-gray-500/20 text-gray-300";

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass rounded-lg p-6 transition-smooth hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] hover:translate-y-[-4px]"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-smooth line-clamp-2">
          {repo.name}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-smooth flex-shrink-0 mt-1" />
      </div>

      {repo.description && (
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground transition-smooth">
          {repo.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {repo.language && (
          <Badge variant="secondary" className={`${languageColor} border-0`}>
            {repo.language}
          </Badge>
        )}
        {repo.topics.slice(0, 2).map((topic) => (
          <Badge
            key={topic}
            variant="outline"
            className="border-cyan-500/30 text-cyan-300 text-xs bg-cyan-500/5 hover:bg-cyan-500/10"
          >
            {topic}
          </Badge>
        ))}
        {repo.topics.length > 2 && (
          <Badge variant="outline" className="border-muted text-muted-foreground text-xs">
            +{repo.topics.length - 2}
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="flex gap-4 text-xs text-muted-foreground">
          {repo.stars > 0 && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              <span>{repo.stars}</span>
            </div>
          )}
          {repo.forks > 0 && (
            <div className="flex items-center gap-1">
              <GitFork className="w-3 h-3" />
              <span>{repo.forks}</span>
            </div>
          )}
        </div>
        <span className="text-xs text-muted-foreground">
          {new Date(repo.created_at).toLocaleDateString()}
        </span>
      </div>
    </a>
  );
}
