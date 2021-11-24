import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GamesContextProvider from "./context/GamesContext";
import CartGameContextProvider from "./context/CardGameContext";

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

