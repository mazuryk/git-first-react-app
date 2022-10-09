import React from 'react';
import { NavLink } from 'react-router-dom';
import styleCss from './Nav.module.css';

const Navbar = () => {
  return (
    <nav className={styleCss.nav}>
      <div className={styleCss.item}>
        <NavLink to='/profile' className={(navData) => (navData.isActive? styleCss.activeLink: styleCss.item)}>Profile</NavLink>
      </div>
      <div className={`${styleCss.item} ${styleCss.activeLink}`}>
        <NavLink to='/dialogs' className={(navData) => (navData.isActive? styleCss.activeLink: styleCss.item)}>Message</NavLink>
      </div>
      <div className={styleCss.item}>
        <NavLink to='/news' className={(navData) => (navData.isActive? styleCss.activeLink: styleCss.item)}>News</NavLink>
      </div>
      <div className={styleCss.item}>
        <NavLink to='/music' className={(navData) => (navData.isActive? styleCss.activeLink: styleCss.item)}>Music</NavLink>
      </div>
      <div className={styleCss.item}>
        <NavLink to='/settings' className={(navData) => (navData.isActive? styleCss.activeLink: styleCss.item)}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
