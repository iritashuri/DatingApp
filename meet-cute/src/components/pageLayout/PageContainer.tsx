import React from "react";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import "./PageContainer.css";
import { Outlet } from "react-router";

const PageContainer: React.FC = () => {
  return (
    <div className="wrapper">
      
      <div className="topBar" id="topBar">
        <TopBar />
      </div>

      <div className="leftBar">
        <LeftBar />
      </div>

      <div className="main_content">
        <Outlet />
      </div>
    </div>
  );
};

export default PageContainer;
