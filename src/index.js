import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let Posts = [
  { id: 1, post: "Як справи, світе?", likesCount : 15 },
  { id: 2, post: "Це мій порший пост!", likesCount : 30 }
];

let Dialogs = [
  { id: 1, name: "Сашко" },
  { id: 2, name: "Марічка" },
  { id: 3, name: "Устим" },
  { id: 4, name: "Бабуся Надя" },
  { id: 5, name: "Дід Іван" },
  { id: 6, name: "Бабуся Наталя" },
  { id: 7, name: "тато Кікі" },
  { id: 8, name: "Пломбочка" },
];

let Messages = [
  { id: 1, message: "Привіт" },
  { id: 2, message: "Вітаю" },
  { id: 3, message: "Як твоє навчання?" },
  { id: 4, message: "Добре. Як твої справи? " },
  { id: 5, message: "Я добре. Побачимось?" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App Posts={Posts} Dialogs={Dialogs} Messages={Messages}/>
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