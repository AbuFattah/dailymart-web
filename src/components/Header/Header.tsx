import React, { FC } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <TopBar />
      <div className="nc-HeaderLogged sticky top-0 z-40 w-full ">
        <MainNav />
      </div>
    </>
  );
};

export default Header;
