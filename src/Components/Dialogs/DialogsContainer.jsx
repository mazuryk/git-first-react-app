import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  const state = props.store.getState().dialogsPage;

  const newMessageText= state.newMessageText;

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  const messageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  // debugger;

  return (
    <Dialogs
    dialogs = {state.dialogs}
    messages = {state.messages}
    addMessage={addMessage}
    messageChange={messageChange}
    newMessageText={newMessageText}
    />
  );
};

export default DialogsContainer;
