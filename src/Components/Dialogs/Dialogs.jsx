import React from "react";
import styleCss from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id; 
  return ( 
    <div className={styleCss.item_dialog + " " + styleCss.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
  <div className={styleCss.messages}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialog_with_user}>
        <DialogItem name='Сашко' id='1'/>
        <DialogItem name='Марічка' id='2'/>
        <DialogItem name='Устим' id='3'/>
        <DialogItem name='Бабуся Надя' id='4'/>
        <DialogItem name='Дід Іван' id='5'/>
        <DialogItem name='Бабуся Наталя' id='6'/>
        <DialogItem name='тато Кікі' id='7'/>
        <DialogItem name='Пломбочка' id='8'/>
      </div>
      <div className={styleCss.messages}>
        <Message message='Привіт' />
        <Message message='Вітаю!' />
        <Message message='Як твоє навчання?' />
        <Message message='Добре' />
      </div>
    </div>
  );
};

export default Dialogs;
