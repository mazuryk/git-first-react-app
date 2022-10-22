import React from "react";
import styleCss from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Сашко" },
    { id: 2, name: "Марічка" },
    { id: 3, name: "Устим" },
    { id: 4, name: "Бабуся Надя" },
    { id: 5, name: "Дід Іван" },
    { id: 6, name: "Бабуся Наталя" },
    { id: 7, name: "тато Кікі" },
    { id: 8, name: "Пломбочка" },
  ];

  let messages = [
    { id: 1, message: "Привіт" },
    { id: 2, message: "Вітаю" },
    { id: 3, message: "Як твоє навчання?" },
    { id: 4, message: "Добре. Як твої справи? " },
    { id: 5, message: "Я добре. Побачимось?" },
  ];

  let dialogsElements = 
    dialogs.map( el => <DialogItem name={el.name} id={el.id} />)

  let messagesElement =
    messages.map(el => <Message message={el.message} /> );


  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialog_with_user}>

        {dialogsElements}
      </div>
      <div className={styleCss.messages}>
        {messagesElement}
      </div>
    </div>
  );
};

export default Dialogs;
