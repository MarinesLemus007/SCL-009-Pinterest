import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Key from './App';
import Modal from './Modal';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Key />, document.getElementById('root'));
ReactDOM.render(<Modal />, document.getElementById('viewModal'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
