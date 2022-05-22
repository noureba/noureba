import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <div>
        <div>
          <SideBar />
        </div>
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
