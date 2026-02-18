import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Submit", icon: UserPlus, href: "/create/contact" },
    { label: "Contacts", icon: Users, href: "/" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-neutral-800 flex items-center justify-center">
              <Users size={16} className="text-neutral-300" />
            </div>
            <span className="text-white font-semibold tracking-tight">
              PrimeCRM
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map(({ label, icon: Icon, active }) => (
            <Link
              to={label === "Submit" ? "/create/contact" : "/"}
              key={label}>

              <button
                className={`flex items-center gap-2 cursor-pointer transition ${active
                  ? "text-white font-medium"
                  : "text-neutral-400 hover:text-white"
                  }`}
              >
                <Icon size={16} />
                {label}
              </button>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-300 cursor-pointer hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map(({ label, icon: Icon, active }) => (
              <Link
                to={label === "Submit" ? "/create/contact" : "/"}
                key={label}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 cursor-pointer text-sm transition ${active
                    ? "text-white font-medium"
                    : "text-neutral-400 hover:text-white"
                    }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
