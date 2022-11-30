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
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log("State changed");
    },
    addPost() {
        const newPost = {
            id: 4, //поки не важливо
            post: this._state.ProfilePage.newPostText,
            likesCount: 0
        };
        this._state.ProfilePage.Posts.push(newPost);
        this._state.ProfilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.ProfilePage.newPostText = newText;
        this._callSubscriber (this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }


    
}


export default store;
window.store = store;