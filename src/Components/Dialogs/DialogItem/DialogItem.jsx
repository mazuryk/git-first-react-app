import React from "react";
import styleCss from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={styleCss.item_dialog + " " + styleCss.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
