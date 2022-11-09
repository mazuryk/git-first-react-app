import React from "react";
import styleCss from "../Dialogs.module.css";

const NewMessage = () => {
  const newMessageElement = React.createRef();

  const addMessage = () => {
    const text = newMessageElement.current.value;
    alert (text);
  }


  return (
    <div className={styleCss.newMessage}>
      <span>
        <textarea ref={newMessageElement}></textarea>
      </span>
      <span>
        <button onClick={addMessage}>Додати</button>
      </span>
    </div>
  );
};

export default NewMessage;
