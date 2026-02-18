import React from "react";
import { AlertTriangle } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-neutral-700 border-t-white rounded-full animate-spin" />
        <p className="text-neutral-500 text-sm tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}

export function ErrorScreen({ message }) {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="text-center">
        <AlertTriangle size={32} className="text-red-400 mx-auto mb-3" />
        <p className="text-red-400 font-medium">Error: {message}</p>
      </div>
    </div>
  );
}