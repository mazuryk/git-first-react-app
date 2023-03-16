const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    Dialogs : [
        { id: 1, name: "Сашко" },
        { id: 2, name: "Марічка" },
        { id: 3, name: "Устим" },
        { id: 4, name: "Бабуся Надя" },
        { id: 5, name: "Дід Іван" },
        { id: 6, name: "Бабуся Наталя" },
        { id: 7, name: "тато Кікі" },
        { id: 8, name: "Пломбочка" },
    ],

    Messages : [
        { id: 1, message: "Привіт" },
        { id: 2, message: "Вітаю" },
        { id: 3, message: "Як твоє навчання?" },
        { id: 4, message: "Добре. Як твої справи? " },
        { id: 5, message: "Я добре. Побачимось?" },
    ],

    newMessageText : ''
};

const dialogsReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }
    
    if (action.type === ADD_MESSAGE) {
        const newMessage = {
            id: 6, //поки не важливо
            message: state.newMessageText,
        };
        state.Messages.push(newMessage);
        state.newMessageText = '';
    }

    return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, 
    newText: text
  })

export default dialogsReducer;