export const MOCK_CONTACTS = [
  { _id: "1", name: "Aria Fontaine", email: "aria@studio.io", phone: "+1 202 555 0191", priority: "High", message: "Needs urgent callback re: Q3 proposal.", imageUrl: "https://i.pravatar.cc/150?img=47" },
  { _id: "2", name: "Marcus Webb", email: "m.webb@lens.co", phone: "+1 415 555 0182", priority: "Medium", message: "Interested in partnership discussion next week.", imageUrl: "https://i.pravatar.cc/150?img=12" },
  { _id: "3", name: "Selin Doğan", email: "selin@meridian.dev", phone: "+90 532 555 0174", priority: "Low", message: "Sent over design files, awaiting review.", imageUrl: "https://i.pravatar.cc/150?img=32" },
  { _id: "4", name: "James Okafor", email: "jokafor@apex.ng", phone: "+234 803 555 0155", priority: "High", message: "Escalated issue with onboarding pipeline.", imageUrl: "https://i.pravatar.cc/150?img=65" },
  { _id: "5", name: "Chloé Mercier", email: "chloe@vogue.fr", phone: "+33 6 55 01 23 45", priority: "Medium", message: "Requesting updated brand guidelines PDF.", imageUrl: "https://i.pravatar.cc/150?img=44" },
  { _id: "6", name: "Tariq Al-Rashid", email: "tariq@nexus.ae", phone: "+971 50 555 0188", priority: "Low", message: "Following up on last month's invoice.", imageUrl: "https://i.pravatar.cc/150?img=60" },
];

export const PRIORITY_META = {
  high: { dot: "#ef4444", badge: "bg-red-500/10 text-red-400 border border-red-500/20", sort: 0 },
  medium: { dot: "#eab308", badge: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20", sort: 1 },
  low: { dot: "#10b981", badge: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20", sort: 2 },
};

export const SORT_FIELDS = ["name", "email", "phone", "priority", "message"];