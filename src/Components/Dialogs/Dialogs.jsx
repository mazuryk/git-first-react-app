import React from "react";
import styleCss from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialog_with_user}>
        <div className={styleCss.item_dialog + " " + styleCss.active}>
          <NavLink to="/dialogs/1">Sashko</NavLink>
        </div>
        <div className={styleCss.item_dialog}>
          <NavLink to="/dialogs/2">Marichka</NavLink>
        </div>
        <div className={styleCss.item_dialog}>
          <NavLink to="/dialogs/3">Ustym</NavLink>
        </div>
        <div className={styleCss.item_dialog}>
          <NavLink to="/dialogs/4">tato KiKi</NavLink>
        </div>
        <div className={styleCss.item_dialog}>
          <NavLink to="/dialogs/5">mama Katya</NavLink>
        </div>
        <div className={styleCss.item_dialog}>
          <NavLink to="/dialogs/6">babusya Nadya</NavLink>
        </div>
        <div className={styleCss.item_dialog}>
          <NavLink to="/dialogs/7">did Ivan</NavLink>
        </div>
        <div className={styleCss.item_dialog}>
        <NavLink to="/dialogs/8">babusya Natasha</NavLink>
          </div>
      </div>
      <div className={styleCss.messages}>
        <div className={styleCss.messages}>Hi</div>
        <div className={styleCss.messages}>Hello</div>
        <div className={styleCss.messages}>How is your studying?</div>
        <div className={styleCss.messages}>It is normal</div>
      </div>
    </div>
  );
};

export default Dialogs;
