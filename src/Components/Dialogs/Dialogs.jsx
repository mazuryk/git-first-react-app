import React from "react";
import styleCss from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsState.Dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesElement = props.dialogsState.Messages.map((el) => (
    <Message message={el.message} />
  ));

  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialog_with_user}>{dialogsElements}</div>
      <div className={styleCss.messages}>
        {messagesElement}
        <NewMessage />
      </div>
    </div>
  );
};

export default Dialogs;
