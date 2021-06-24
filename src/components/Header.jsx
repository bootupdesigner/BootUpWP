import React from "react";


import ContactMenu from './ContactMenu';
import Banner from "./Banner";
import Menu from "./Menu";

const Header = () => {
  return (
    <div>
      <ContactMenu />
      <Banner />
      <Menu />
    </div>
  );
};

export default Header;
