import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

//створюємо функції для налаштування connect () і ці функції мають повертати об'єкти
const mapStateToProps = (state) => {
  return{
    dialogs : state.dialogsPage.dialogs,
    messages : state.dialogsPage.messages,
    newMessageText : state.dialogsPage.newMessageText
  }
}
 
//можна було б сказати, що це фукнція mapCallbackToProps
const mapDispatchToProps = (dispatch) =>{
  return {
    addMessage: ()=>{
      dispatch(addMessageActionCreator())
    },
    messageChange : (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    }

  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); //з'єднали наш Dialogs зі Store


export default DialogsContainer;
