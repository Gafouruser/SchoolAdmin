"use client";
import AdminHeader from "@/app/Components/AdminHeader";
import Footer from "@/app/Components/Footer";
import React, { useState } from "react";
import AdminNavBar from "../Components/AdminNavBar";

const AdminDashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-[#EAEEF3] min-h-screen">
      <AdminHeader toggleNav={toggleNav} />
      <div className="flex">
        {isNavOpen && <AdminNavBar />}
        <div className="p-8 flex-1">
          <p className="mb-60">Welcome to dashboard page ...</p>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
