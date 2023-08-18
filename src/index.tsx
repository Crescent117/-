import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import store from "./redux/store"

const 체중 = 100;

function reducer(state = 체중, action:string) { 
  return state
}

const rootElement = document.getElementById("root");

if (rootElement) { 
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

