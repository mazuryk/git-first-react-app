const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state : {
        ProfilePage : {
            Posts : [
                { id: 1, post: "Як справи, світе?", likesCount : 15 },
                { id: 2, post: "УРа!", likesCount : 30 },
                { id: 3, post: "Це мій перший пост!", likesCount : 10 }
            ],
            newPostText : "mazuryk"
        },
        DialogsPage : {
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
        }
    
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4, //поки не важливо
                post: this._state.ProfilePage.newPostText,
                likesCount: 0
            };
            this._state.ProfilePage.Posts.push(newPost);
            this._state.ProfilePage.newPostText = '';
            this._callSubscriber(this._state);
        }

        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber (this._state);
        }
    },  
}

// export const addPostActionCreator = () => {
//     return {
//       type: ADD_POST
//     }
// }

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextActionCreator = (text) =>{
    return {
      type: UPDATE_NEW_POST_TEXT, 
      newText: text
    }
}


export default store;
window.store = store;