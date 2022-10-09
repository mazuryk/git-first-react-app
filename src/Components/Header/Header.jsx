import React from "react";
import styleCss from './Header.module.css';


const Header = () => {
  return (
    <header className={styleCss.header}>
      <img src="https://d3f1hgx3lfk57q.cloudfront.net/wp-content/uploads/2022/04/default-company-logo.jpg"></img>
    </header>
  );
};

export default Header;