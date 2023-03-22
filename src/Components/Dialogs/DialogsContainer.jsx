import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return ( 
    <StoreContext.Consumer> 
      {(store) => {
          const state = store.getState().dialogsPage;
          const newMessageText= state.newMessageText;
      
          const addMessage = () => {
            store.dispatch(addMessageActionCreator())
          }
      
          const messageChange = (text) => {
            store.dispatch(updateNewMessageTextActionCreator(text));
          }
        return <Dialogs
          dialogs = {state.dialogs}
          messages = {state.messages}
          addMessage={addMessage}
          messageChange={messageChange}
          newMessageText={newMessageText}
        /> 
      }
    }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
