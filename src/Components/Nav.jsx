import React from 'react';
import n from './Nav.module.css';

const Navbar = () => {
  return (
    <nav className={n.nav}>
      <div className={n.item}>
        <a>Profile</a>
      </div>
      <div className={`${n.item} ${n.active}`}>
        <a>Message</a>
      </div>
      <div className={n.item}>
        <a>News</a>
      </div>
      <div className={n.item}>
        <a>Music</a>
      </div>
      <div className={n.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
