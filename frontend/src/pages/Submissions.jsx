import React, { useState } from "react";
import { Plus, Users, AlertTriangle, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

// ── hooks ────────────────────────────────────────────────────
import { useContacts } from "../hooks/useContacts";

// ── components ───────────────────────────────────────────────
import StatCard from "../components/StatCard";
import SearchBar from "../components/SearchBar";
import ContactTable from "../components/ContactTable";
import ViewModal from "../components/ViewModal";
import EditModal from "../components/EditModal";
import DeleteConfirmModal from "../components/DeleteContactModal";
import { LoadingScreen, ErrorScreen } from "../components/Screens";

/* ─── Dashboard ──────────────────────────────────────────── */
export default function Dashboard() {
  const {
    contacts, filtered,
    isLoading, error,
    search, setSearch,
    filterPriority, setFilterPriority,
    sortField, sortDir, handleSort,
    updateContact, deleteContact,
  } = useContacts();

  // modal state
  const [viewContact, setViewContact] = useState(null);
  const [editContact, setEditContact] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  // ── stat cards config ──────────────────────────────────────
  const stats = [
    {
      title: "Total Contacts",
      value: contacts.length.toLocaleString(),
      icon: <Users size={18} />,
      trend: "+12%",
      accent: "#3b82f6",
    },
    {
      title: "High Priority",
      value: contacts.filter((c) => c.priority === "high").length,
      icon: <AlertTriangle size={18} />,
      accent: "#ef4444",
    },
    {
      title: "Unread Messages",
      value: "18",
      icon: <MessageSquare size={18} />,
      accent: "#a855f7",
    },
  ];

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;

  return (
    <>

      <div className="min-h-screen bg-neutral-950 text-neutral-200">
        <main className="max-w-7xl mx-auto p-6 md:p-10">

          {/* ── Page Header ─────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <p className="text-neutral-600 text-xs uppercase tracking-[0.2em] mb-2 font-medium">
                CRM Dashboard
              </p>
              <h1 className="text-4xl font-extralight text-white tracking-tight">
                Contact Directory
              </h1>
              <p className="text-neutral-500 text-sm mt-2">
                Manage and monitor your professional network
              </p>
            </div>

            <Link to="/create/contact">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-100 transition text-sm font-medium text-neutral-950 shadow-lg shadow-white/5">
                <Plus size={15} /> Add Contact
              </button>
            </Link>
          </div>

          {/* ── Stat Cards ──────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>

          {/* ── Search + Filter ─────────────────────────────── */}
          <SearchBar
            search={search}
            onSearchChange={setSearch}
            filterPriority={filterPriority}
            onFilterChange={setFilterPriority}
          />

          {/* ── Results count ───────────────────────────────── */}
          <p className="text-neutral-600 text-xs uppercase tracking-widest mb-4 font-medium">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            {filterPriority !== "All" && ` · ${filterPriority} priority`}
            {search && ` · "${search}"`}
          </p>

          {/* ── Contact Table ───────────────────────────────── */}
          <ContactTable
            contacts={filtered}
            totalCount={contacts.length}
            sortField={sortField}
            sortDir={sortDir}
            onSort={handleSort}
            onView={setViewContact}
            onEdit={setEditContact}
            onDelete={setDeleteId}
          />
        </main>
      </div>

      {/* ── Modals ──────────────────────────────────────────── */}
      {viewContact && !editContact && (
        <ViewModal
          contact={viewContact}
          onClose={() => setViewContact(null)}
          onEdit={(c) => { setViewContact(null); setEditContact(c); }}
          onDelete={(id) => { setDeleteId(id); setViewContact(null); }}
        />
      )}

      {editContact && (
        <EditModal
          contact={editContact}
          onClose={() => setEditContact(null)}
          onSave={updateContact}
        />
      )}

      {deleteId && (
        <DeleteConfirmModal
          onConfirm={() => { deleteContact(deleteId); setDeleteId(null); }}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </>
  );
}