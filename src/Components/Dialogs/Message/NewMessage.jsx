import React from "react";
import styleCss from "../Dialogs.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../Redux/dialogs-reducer"


const NewMessage = (props) => {
  // const newMessageElement = React.createRef();

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  const onMessageChange = (e) => {
    const text = e.target.value;
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }


  return (
    <div className={styleCss.newMessage}>
      <span>
        <textarea onChange={onMessageChange} 
        placeholder = {"enter text"}
        value = {props.store.getState().dialogsPage.newMessageText}
        // ref={newMessageElement}
         ></textarea>
      </span>
      <span>
        <button onClick={addMessage}>Відправити повідомлення</button>
      </span>
    </div>
  );
};

export default NewMessage;
