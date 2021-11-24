import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GamesContextProvider from "./Context/GamesContext";
import CartGameContextProvider from "./Context/CardGameContext";

ReactDOM.render(
  <React.StrictMode>
   <GamesContextProvider>
   <CartGameContextProvider>
    <App />
  </CartGameContextProvider>
  </GamesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

