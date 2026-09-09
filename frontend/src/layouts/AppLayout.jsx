import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import "./AppLayout.css";

export default function AppLayout({ children }) {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-layout">

      <Sidebar
        mobileOpen={sidebarOpen}
        closeMobile={closeSidebar}
      />

      <div className="main-area">

        <Header
          onMenuClick={openSidebar}
        />

        <main className="page-content">
          {children || <Outlet />}
        </main>

      </div>

    </div>
  );
}