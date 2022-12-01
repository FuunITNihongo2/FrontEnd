import React from "react";
import Header from "./Header";
import HeaderLogin from "./HeaderLogin";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      {localStorage.getItem("user") ? <HeaderLogin /> : <Header />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
