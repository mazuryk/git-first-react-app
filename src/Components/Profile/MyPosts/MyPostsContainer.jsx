import { connect } from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profile-reducer"
import MyPosts from "./MyPosts";



// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer> 
//       {(store) => {
//           const state = store.getState();
//           const addPost = () => {
//             store.dispatch(addPostActionCreator());
//           } 
      
//           const onPostChange = (text) =>{
//             const action = updateNewPostTextActionCreator(text);
//             store.dispatch(action);
//           }
//         return <MyPosts 
//                   updateNewPostText={onPostChange}
//                   addPost={addPost}
//                   posts={state.profilePage.posts}
//                   newPostText={state.profilePage.newPostText}/>
//       }
//     }
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts : state.profilePage.posts,
    newPostText : state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText : (text) => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost : () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
