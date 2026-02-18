import React from "react";
import { Trash2 } from "lucide-react";

export default function DeleteConfirmModal({ onConfirm, onCancel }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onCancel}
    >
      <div
        className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 w-full max-w-sm shadow-2xl"
        style={{ animation: "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon + text */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-red-500/10">
            <Trash2 size={18} className="text-red-400" />
          </div>
          <div>
            <h3 className="text-white font-medium">Delete Contact</h3>
            <p className="text-neutral-500 text-sm">This action cannot be undone.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-sm text-neutral-300 hover:bg-neutral-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl bg-red-500/90 hover:bg-red-500 text-sm text-white font-medium transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}