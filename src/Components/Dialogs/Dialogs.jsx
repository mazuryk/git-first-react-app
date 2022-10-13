import React from "react";
import styleCss from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={styleCss.item_dialog + " " + styleCss.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styleCss.messages}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Сашко" },
    { id: 2, name: "Марічка" },
    { id: 3, name: "Устим" },
    { id: 4, name: "Бабуся Надя" },
    { id: 5, name: "Дід Іван" },
    { id: 6, name: "Бабуся Наталя" },
    { id: 7, name: "тато Кікі" },
    { id: 8, name: "Пломбочка" },
  ];

  let messagesData = [
    { id: 1, message: "Привіт" },
    { id: 2, message: "Вітаю" },
    { id: 3, message: "Як твоє навчання?" },
    { id: 4, message: "Добре. Як твої справи? " },
    { id: 5, message: "Я добре. Побачимось?" },
  ];



  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialog_with_user}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={styleCss.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
