import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Content from "./content";

const Layout = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="bg-[#FCFCFD] h-[100%] ml-[280px]">
        <Header />
        <div className="p-[24px]">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Layout;
