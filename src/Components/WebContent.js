import React from "react";
import RightSection from "./RightSection";
import SideBar from "./SideBar";

const WebContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-auto col-md-1 min-vh-100 text-center"
          style={{ backgroundColor: "#008080" }}
        >
          <SideBar />
        </div>
        <div className="col bg-light">
          <RightSection />
        </div>
      </div>
    </div>
  );
};
export default WebContent;
