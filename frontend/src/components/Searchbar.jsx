import React from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { PRIORITY_META } from "../constants";

const PRIORITIES = ["All", "high", "medium", "low"];

export default function SearchBar({ search, onSearchChange, filterPriority, onFilterChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-5">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search
          size={15}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search by name, email, phone, message…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Priority Filter Pills */}
      <div className="flex gap-2 items-center">
        <SlidersHorizontal size={14} className="text-neutral-600 shrink-0" />
        {PRIORITIES.map((p) => {
          const isActive = filterPriority === p;
          const meta = PRIORITY_META[p];
          return (
            <button
              key={p}
              onClick={() => onFilterChange(p)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium uppercase tracking-wide transition border ${isActive
                ? p === "All"
                  ? "bg-white text-neutral-950 border-white"
                  : `${meta.badge} border-transparent`
                : "bg-neutral-900 text-neutral-500 border-neutral-800 hover:border-neutral-700 hover:text-white"
                }`}
            >
              {p}
            </button>
          );
        })}
      </div>
    </div>
  );
}