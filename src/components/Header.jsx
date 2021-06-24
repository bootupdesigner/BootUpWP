import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
