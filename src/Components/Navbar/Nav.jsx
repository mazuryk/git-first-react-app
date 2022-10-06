import React from 'react';
import styleCss from './Nav.module.css';

const Navbar = () => {
  return (
    <nav className={styleCss.nav}>
      <div className={styleCss.item}>
        <a>Profile</a>
      </div>
      <div className={`${styleCss.item} ${styleCss.active}`}>
        <a>Message</a>
      </div>
      <div className={styleCss.item}>
        <a>News</a>
      </div>
      <div className={styleCss.item}>
        <a>Music</a>
      </div>
      <div className={styleCss.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
