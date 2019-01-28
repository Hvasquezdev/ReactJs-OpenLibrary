import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import data from './data.json';

const title = 'React.Js OpenLibrary';
const headings = ['When', 'Who', 'Description'];

ReactDOM.render(
  <App 
    title={title}
    headings={headings} 
  />, 
  document.querySelector('#app')
);