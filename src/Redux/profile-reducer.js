const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts : [
        { id: 1, post: "Як справи, світе?", likesCount : 15 },
        { id: 2, post: "УРа!", likesCount : 30 },
        { id: 3, post: "Це мій перший пост!", likesCount : 10 }
    ],
    newPostText : "mazuryk"
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            const newPost = {
                id: 4, //поки не важливо
                post: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText:''

            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT, 
      newText: text
    })

export default profileReducer;