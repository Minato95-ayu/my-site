import { profileStats } from "@/data/repos";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Top Languages */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-cyan-400">→</span> Top Languages
          </h2>
          <div className="space-y-4">
            {profileStats.topLanguages.map((lang) => (
              <div key={lang.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium">{lang.name}</span>
                  <span className="text-cyan-400 text-sm">{lang.count} repos</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(0,217,255,0.5)]"
                    style={{ width: `${(lang.count / profileStats.topLanguages[0].count) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Topics */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-purple-400">→</span> Areas of Expertise
          </h2>
          <div className="flex flex-wrap gap-3">
            {profileStats.topTopics.map((topic) => (
              <Badge
                key={topic.name}
                className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30 text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-smooth cursor-default text-sm py-2 px-3"
              >
                {topic.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
