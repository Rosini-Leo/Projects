import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";

import { useGlobalContext } from "../context";

const Sidebar = () => {
  // Import custom hook that's used for close-open sidebar
  const{isSidebarOpen,closeSidebar} = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen?"sidebar show-sidebar":'sidebar'}`} >
      <div className="sidebar-content">
        <header className="nav-header container">
          <div className="nav-brand" >
            <h3>Drink Team</h3>
          </div>
          <button 
          onClick={closeSidebar}
          className="btn icon-btn nav-toggler">
            <VscArrowSmallLeft className="nav-icon" />
          </button>
        </header>
        <div className="container" >
          <LinkComponent classLink="sidebar-links" />
        </div>
        <SocialComponent classSocial="sidebar-social" />
      </div>
    </aside>
  );
};

export default Sidebar;
