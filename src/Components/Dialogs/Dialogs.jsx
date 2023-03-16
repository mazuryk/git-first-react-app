import React from "react";
import styleCss from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage";

const Dialogs = (props) => {

  const state = props.store.getState().dialogsPage;
  let dialogsElements = state.Dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesElement = state.Messages.map((el) => (
    <Message message={el.message} />
  ));

  // debugger;

  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialog_with_user}>{dialogsElements}</div>
      <div className={styleCss.messages}>
        {messagesElement}
        <NewMessage 
        store={props.store} />
      </div>
    </div>
  );
};

export default Dialogs;
