import React from "react";
import { TrendingUp } from "lucide-react";

export default function StatCard({ title, value, icon, trend, accent }) {
  return (
    <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 overflow-hidden group hover:border-neutral-700 transition-all duration-300">
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at top right, ${accent}18, transparent 70%)` }}
      />

      <div className="relative flex justify-between items-start">
        <div>
          <p className="text-neutral-500 text-xs uppercase tracking-widest mb-3 font-medium">
            {title}
          </p>
          <p className="text-4xl font-extralight text-white tracking-tight">{value}</p>
          {trend && (
            <div className="mt-2 flex items-center gap-1 text-emerald-400 text-xs font-medium">
              <TrendingUp size={12} />
              {trend} this month
            </div>
          )}
        </div>
        <div className="p-2.5 rounded-xl bg-neutral-800 text-neutral-400">{icon}</div>
      </div>
    </div>
  );
}