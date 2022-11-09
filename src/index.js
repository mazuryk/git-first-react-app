import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={state}/>
    </BrowserRouter>
  </React.StrictMode>
);

// let Posts = [
//   { id: 1, post: "Як справи, світе?", likesCount : 15 },
//   { id: 2, post: "Це мій порший пост!", likesCount : 30 }
// ];
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export default Posts;