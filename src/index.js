import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

const reRenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
          state={state} 
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)} 
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

reRenderEntireTree (store.getState());

store.subscribe (reRenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
