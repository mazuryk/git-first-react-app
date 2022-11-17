import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './Redux/state.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

export const renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
          state={state} 
          addPost={addPost}
          updateNewPostText={updateNewPostText} 
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
