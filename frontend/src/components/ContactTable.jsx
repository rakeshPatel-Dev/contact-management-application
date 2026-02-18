import React from "react";
import { Mail, Phone, Eye, Edit2, Trash2, ChevronUp, ChevronDown, Search } from "lucide-react";
import { PRIORITY_META } from "../constants/index";

const COLUMNS = [
  { label: "Name", field: "name" },
  { label: "Email", field: "email" },
  { label: "Phone", field: "phone" },
  { label: "Priority", field: "priority" },
  { label: "Message", field: "message" },
  { label: "Actions", field: null },
];

function SortIcon({ active, dir }) {
  if (!active) return <ChevronUp size={12} className="text-neutral-700" />;
  return dir === "asc"
    ? <ChevronUp size={12} className="text-white" />
    : <ChevronDown size={12} className="text-white" />;
}

function ContactRow({ contact, index, onView, onEdit, onDelete }) {
  const meta = PRIORITY_META[contact.priority];

  return (
    <tr
      className="border-b border-neutral-800 last:border-0 hover:bg-neutral-800/50 transition cursor-pointer"
      style={{ animation: `fadeIn 0.2s ease ${index * 30}ms both` }}
      onClick={() => onView(contact)}
    >
      {/* Name + Avatar */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={contact.imageURL}
            alt={contact.name}
            className="w-10 h-10 rounded-xl object-cover ring-1 ring-neutral-700"
          />
          <span className="text-sm font-medium text-white whitespace-nowrap">{contact.name}</span>
        </div>
      </td>

      {/* Email */}
      <td className="px-6 py-4">
        <span className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap">
          <Mail size={13} className="text-neutral-600" />
          {contact.email}
        </span>
      </td>

      {/* Phone */}
      <td className="px-6 py-4">
        <span className="flex items-center gap-2 text-sm text-neutral-400 whitespace-nowrap">
          <Phone size={13} className="text-neutral-600" />
          {contact.phone}
        </span>
      </td>

      {/* Priority */}
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${meta.badge}`}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.dot }} />
          {contact.priority}
        </span>
      </td>

      {/* Message */}
      <td className="px-6 py-4 text-sm text-neutral-500 max-w-[200px] truncate">
        {contact.message}
      </td>

      {/* Actions — stop propagation so row click doesn't fire */}
      <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onView(contact)}
            className="p-2 rounded-lg hover:bg-neutral-700 text-neutral-500 hover:text-white transition"
            title="View"
          >
            <Eye size={14} />
          </button>
          <button
            onClick={() => onEdit(contact)}
            className="p-2 rounded-lg hover:bg-neutral-700 text-neutral-500 hover:text-blue-400 transition"
            title="Edit"
          >
            <Edit2 size={14} />
          </button>
          <button
            onClick={() => onDelete(contact._id)}
            className="p-2 rounded-lg hover:bg-red-500/10 text-neutral-500 hover:text-red-400 transition"
            title="Delete"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function ContactTable({
  contacts,
  totalCount,
  sortField,
  sortDir,
  onSort,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          {/* Head */}
          <thead className="border-b border-neutral-800 text-neutral-500 text-[10px] uppercase tracking-[0.15em]">
            <tr>
              {COLUMNS.map(({ label, field }) => (
                <th
                  key={label}
                  className={`px-6 py-4 font-medium whitespace-nowrap ${field ? "cursor-pointer hover:text-neutral-300 transition select-none" : ""}`}
                  onClick={() => field && onSort(field)}
                >
                  <span className="flex items-center gap-1.5">
                    {label}
                    {field && <SortIcon active={sortField === field} dir={sortDir} />}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-16 text-center text-neutral-600">
                  <Search size={28} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No contacts match your search.</p>
                </td>
              </tr>
            ) : (
              contacts.map((contact, i) => (
                <ContactRow
                  key={contact._id}
                  contact={contact}
                  index={i}
                  onView={onView}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 flex justify-between items-center text-xs text-neutral-600 border-t border-neutral-800 uppercase tracking-widest">
        <div>
          Showing {contacts.length} of {totalCount} contacts
        </div>
        <div className="flex gap-4">
          <button className="hover:text-white transition">Previous</button>
          <button className="hover:text-white transition">Next</button>
        </div>
      </div>
    </div>
  );
}