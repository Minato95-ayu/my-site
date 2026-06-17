import { profileStats } from "@/data/repos";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const activityData = Object.entries(profileStats.activityStats).map(([type, count]) => ({
  type: type.replace("Event", ""),
  count,
}));

const colors = ["#00d9ff", "#a855f7", "#ff6b35", "#00d9ff", "#a855f7", "#ff6b35", "#00d9ff"];

export function ActivitySection() {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <span className="text-orange-400">→</span> Recent Activity
      </h2>

      <div className="glass rounded-lg p-6 md:p-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={activityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="type" stroke="#94a3b8" style={{ fontSize: "12px" }} />
            <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(15, 20, 25, 0.95)",
                border: "1px solid rgba(0, 217, 255, 0.3)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#00d9ff" }}
              formatter={(value) => [`${value} events`, "Count"]}
            />
            <Bar dataKey="count" fill="#00d9ff" radius={[8, 8, 0, 0]}>
              {activityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {activityData.map((activity) => (
          <div key={activity.type} className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">{activity.count}</div>
            <div className="text-xs text-muted-foreground mt-1">{activity.type}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
