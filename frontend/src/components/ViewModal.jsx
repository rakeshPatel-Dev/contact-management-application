import React from "react";
import { X, Mail, Phone, MessageSquare, Edit2, Trash2 } from "lucide-react";
import { PRIORITY_META } from "../constants";

export default function ViewModal({ contact, onClose, onEdit, onDelete }) {
  if (!contact) return null;
  const meta = PRIORITY_META[contact.priority];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
        style={{ animation: "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${meta.dot}, transparent)` }}
        />

        <div className="p-7">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-500 hover:text-white transition"
          >
            <X size={18} />
          </button>

          {/* Avatar + name */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={contact.imageURL}
              alt={contact.name}
              className="w-20 h-20 rounded-2xl object-cover ring-2 ring-neutral-700"
            />
            <div>
              <h2 className="text-xl font-medium text-white">{contact.name}</h2>
              <span
                className={`mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide ${meta.badge}`}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.dot }} />
                {contact.priority}
              </span>
            </div>
          </div>

          {/* Detail rows */}
          <div className="space-y-3 mb-6">
            {[
              { icon: <Mail size={14} />, label: "Email", val: contact.email },
              { icon: <Phone size={14} />, label: "Phone", val: contact.phone },
              { icon: <MessageSquare size={14} />, label: "Message", val: contact.message },
            ].map(({ icon, label, val }) => (
              <div
                key={label}
                className="flex gap-3 p-3 rounded-xl bg-neutral-800/60 border border-neutral-800"
              >
                <span className="text-neutral-500 mt-0.5 shrink-0">{icon}</span>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-neutral-200 break-all">{val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => { onEdit(contact); onClose(); }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-sm text-white transition"
            >
              <Edit2 size={14} /> Edit
            </button>
            <button
              onClick={() => { onDelete(contact._id); onClose(); }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-sm text-red-400 transition"
            >
              <Trash2 size={14} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}