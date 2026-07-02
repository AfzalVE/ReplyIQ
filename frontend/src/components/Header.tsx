import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Mail,
  Sparkles,
  LogOut,
} from "lucide-react";

import LogoutModal from "./LogoutModal";

export default function Header() {

  const navigate = useNavigate();

  const [showLogout, setShowLogout] =
    useState(false);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login", {
      replace: true,
    });

  };

  return (

    <>
      <header className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div className="rounded-xl bg-blue-600 p-3 text-white">

              <Mail size={24} />

            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                ReplyIQ
              </h1>

              <p className="text-sm text-gray-500">
                AI Email Intelligence Platform
              </p>

            </div>

          </Link>

          <nav className="flex items-center gap-6">

            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Analyze
            </Link>

            <Link
              to="/history"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              History
            </Link>

            <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-700">

              <Sparkles size={18} />

              <span className="text-sm font-medium">
                Powered by AI
              </span>

            </div>

            <button
              onClick={() => setShowLogout(true)}
              className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
            >
              <LogOut size={18} />
              Logout
            </button>

          </nav>

        </div>

      </header>

      <LogoutModal
        open={showLogout}
        onClose={() => setShowLogout(false)}
        onLogout={handleLogout}
      />
    </>
  );
}