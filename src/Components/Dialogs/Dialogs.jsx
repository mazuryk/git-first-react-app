import React from "react";
import styleCss from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage";

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesElement = props.messages.map((el) => (
    <Message message={el.message} />
  ));

  // debugger;

  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialog_with_user}>{dialogsElements}</div>
      <div className={styleCss.messages}>
        {messagesElement}
        <NewMessage 
          addMessage={props.addMessage}
          messageChange={props.messageChange}
          newMessageText={props.newMessageText}
          />
      </div>
    </div>
  );
};

export default Dialogs;
