import React from "react";
import styleCss from "../Dialogs.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../Redux/dialogs-reducer"


const NewMessage = (props) => {
  // const newMessageElement = React.createRef();

  const onAddMessage = () => {
    props.addMessage()
  }

  const onMessageChange = (e) => {
    const text = e.target.value;
    props.messageChange(text)
  }


  return (
    <div className={styleCss.newMessage}>
      <span>
        <textarea onChange={onMessageChange} 
        placeholder = {"enter text"}
        value = {props.newMessageText}
        // ref={newMessageElement}
         ></textarea>
      </span>
      <span>
        <button onClick={onAddMessage}>Відправити повідомлення</button>
      </span>
    </div>
  );
};

export default NewMessage;
