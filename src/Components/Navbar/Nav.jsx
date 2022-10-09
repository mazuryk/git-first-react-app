import React from 'react';
import styleCss from './Nav.module.css';

const Navbar = () => {
  return (
    <nav className={styleCss.nav}>
      <div className={styleCss.item}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={`${styleCss.item} ${styleCss.active}`}>
        <a href='/dialogs'>Message</a>
      </div>
      <div className={styleCss.item}>
        <a href='/news'>News</a>
      </div>
      <div className={styleCss.item}>
        <a href='/music'>Music</a>
      </div>
      <div className={styleCss.item}>
        <a href='/settings'>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
