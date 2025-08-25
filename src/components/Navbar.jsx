import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, User, ShoppingBag, Menu, X } from "lucide-react";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "ELECTRIC", dropdown: ["/electric/ivy", "/electric/ace"] },
    { label: "CITY", dropdown: ["/city/cafe-racer", "/city/comet", "/city/breeze"] },
    { label: "KIDS", dropdown: ["/kids/tricycle", "/kids/balance-bike"] },
    { label: "ACCESSORIES", href: "/accessories" },
    { label: "STORES", href: "/stores" },
    { label: "LEASING", dropdown: ["/leasing/personal", "/leasing/business"] },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center">
          {/* <img src={logo} alt="PIECHARGE" className="h-8" /> */}
          <h1 className="h-6">P I E C H A R G E</h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative">
              {item.dropdown ? (
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="flex items-center gap-1 hover:text-gray-700"
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <Link to={item.href} className="hover:text-gray-700">
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.dropdown && openDropdown === idx && (
                <div className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-md">
                  {item.dropdown.map((path, i) => (
                    <Link
                      key={i}
                      to={path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {path.split("/").pop().replace("-", " ").toUpperCase()}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 text-sm">
          {/* Language selector */}
          <button className="flex items-center gap-1 hover:text-gray-700">
            EN
            <img
              src="https://flagcdn.com/w20/gb.png"
              alt="EN"
              className="h-4 w-4"
            />
          </button>

          {/* Profile */}
          <Link to="/profile" className="hover:text-gray-700">
            <User size={20} />
          </Link>

          {/* Cart */}
          <Link to="/cart" className="hover:text-gray-700">
            <ShoppingBag size={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4">
          {navItems.map((item, idx) => (
            <div key={idx}>
              {item.dropdown ? (
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-medium hover:text-gray-700">
                    {item.label}
                    <ChevronDown size={16} className="group-open:rotate-180 transition" />
                  </summary>
                  <div className="mt-2 ml-4 space-y-2">
                    {item.dropdown.map((path, i) => (
                      <Link
                        key={i}
                        to={path}
                        className="block text-sm hover:text-gray-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {path.split("/").pop().replace("-", " ").toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  to={item.href}
                  className="block text-sm hover:text-gray-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
