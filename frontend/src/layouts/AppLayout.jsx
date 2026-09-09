import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import "./AppLayout.css";

export default function AppLayout({ children }) {
  const location = useLocation();

  // Mobile sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Open sidebar
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  // Close sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Route change hone par mobile sidebar automatically close
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-layout">

      {/* =========================
          SIDEBAR
      ========================== */}

      <Sidebar
        mobileOpen={sidebarOpen}
        closeMobile={closeSidebar}
      />

      {/* =========================
          MAIN AREA
      ========================== */}

      <div className="main-area">

        {/* =========================
            HEADER
        ========================== */}

        <Header
          onMenuClick={openSidebar}
        />

        {/* =========================
            PAGE CONTENT
        ========================== */}

        <main className="page-content">
          {children || <Outlet />}
        </main>

      </div>

    </div>
  );
}