import { useState } from "react";
import { Fa } from "./Fa";
import { faPaw, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Fa icon={faPaw} className="text-3xl text-petmeOrange mr-2" />
              <span className="text-xl font-bold text-petmeOrange">PetMe</span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {[
              { to: "#mission", label: "Our Mission" },
              { to: "#benefits", label: "Benefits" },
              { to: "#community", label: "Community" },
            ].map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-gray-700 hover:text-petmeOrange px-3 py-2 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              className="bg-petmeOrange text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile burger */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-petmeOrange focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Fa icon={faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { to: "#mission", label: "Our Mission" },
              { to: "#benefits", label: "Benefits" },
              { to: "#community", label: "Community" },
            ].map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-petmeOrange"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              className="block px-3 py-2 text-base font-medium bg-petmeOrange text-white rounded-md hover:bg-opacity-90 transition-all"
              onClick={() => setOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}