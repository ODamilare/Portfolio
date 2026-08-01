"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { proficiency } from "@/data/stack";

export default function SkillsChart() {
  return (
    <div className="h-64 -ml-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={proficiency} layout="vertical" margin={{ top: 4, right: 24, bottom: 4, left: 4 }}>
          <CartesianGrid horizontal={false} stroke="#1E2430" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="skill"
            width={130}
            tick={{ fill: "#8B93A7", fontSize: 12, fontFamily: "var(--font-jetbrains-mono)" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(76,141,255,0.06)" }}
            contentStyle={{
              background: "#10141C",
              border: "1px solid #1E2430",
              borderRadius: 8,
              fontSize: 12,
              fontFamily: "var(--font-jetbrains-mono)",
              color: "#E7EAF0",
            }}
            formatter={(value: number) => [`${value}%`, "confidence"]}
          />
          <Bar dataKey="value" fill="#4C8DFF" radius={[0, 4, 4, 0]} barSize={14} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
