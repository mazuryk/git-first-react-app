import React from "react";
import styleCss from "../Dialogs.module.css";

const Message = (props) => {
  return <div className={styleCss.messages}>{props.message}</div>;
};


export default Message;
