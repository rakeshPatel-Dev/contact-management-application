import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { PRIORITY_META } from "../constants/index";
import toast from "react-hot-toast";

export function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ── search / filter / sort state ──────────────────────────
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [sortField, setSortField] = useState("name");
  const [sortDir, setSortDir] = useState("asc");

  // ── fetch ─────────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("http://localhost:3000/api/contacts");
        setContacts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // ── crud ──────────────────────────────────────────────────
  const updateContact = useCallback(async (updated) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/contacts/${updated._id}`,
        updated
      );
      // Use server response as source of truth
      setContacts((cs) => cs.map((c) => (c._id === data.data._id ? data.data : c)));
      toast.success("Contact updated successfully");
    } catch (err) {
      console.error("Failed to update contact:", err.message);
      toast.error("Failed to update contact");
    }
  }, []);

  const deleteContact = useCallback(async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/contacts/${id}`);
      setContacts((cs) => cs.filter((c) => c._id !== id));
      toast.success("Contact deleted successfully");
    } catch (err) {
      console.error("Failed to delete contact:", err.message);
      toast.error("Failed to delete contact");
    }
  }, []);

  // ── derived (filtered + sorted) list ──────────────────────
  const filtered = contacts
    .filter((c) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.includes(q) ||
        c.message.toLowerCase().includes(q);

      const matchPriority =
        filterPriority === "all" || c.priority === filterPriority;

      return matchSearch && matchPriority;
    })
    .sort((a, b) => {
      if (sortField === "priority") {
        const av = (PRIORITY_META[a.priority] ?? PRIORITY_META["low"]).sort;
        const bv = (PRIORITY_META[b.priority] ?? PRIORITY_META["low"]).sort;
        return sortDir === "asc" ? av - bv : bv - av;
      }
      const av = a[sortField] || "";
      const bv = b[sortField] || "";
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });

  // ── sort toggle ───────────────────────────────────────────
  const handleSort = useCallback((field) => {
    setSortField((prev) => {
      if (prev === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      else setSortDir("asc");
      return field;
    });
  }, []);

  return {
    contacts,
    filtered,
    isLoading,
    error,
    search, setSearch,
    filterPriority, setFilterPriority,
    sortField, sortDir, handleSort,
    updateContact,
    deleteContact,
  };
}