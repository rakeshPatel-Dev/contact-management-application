import React, { useState } from "react";
import { X, Check } from "lucide-react";

const FIELDS = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone", name: "phone", type: "tel" },
  { label: "Image URL", name: "imageURL", type: "url" },
];

export default function EditModal({ contact, onClose, onSave }) {
  const [form, setForm] = useState({ ...contact });
  if (!contact) return null;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
        style={{ animation: "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div className="h-1 w-full bg-linear-to-r from-blue-500 to-violet-500" />
        <div className="p-7">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-white">Edit Contact</h2>
            <button onClick={onClose} className="text-neutral-500 hover:text-white transition">
              <X size={18} />
            </button>
          </div>

          {/* Fields */}
          <div className="space-y-4">
            {FIELDS.map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-1.5">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={form[name] || ""}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition"
                />
              </div>
            ))}

            {/* Priority select */}
            <div>
              <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-1.5">
                Priority
              </label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition"
              >
                {["High", "Medium", "Low"].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Message textarea */}
            <div>
              <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={form.message || ""}
                onChange={handleChange}
                rows={2}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition resize-none"
              />
            </div>
          </div>

          {/* Footer buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-sm text-neutral-300 hover:bg-neutral-700 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-100 transition"
            >
              <Check size={14} /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}