import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import NotifyContainer from "./utils/getNotify.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <NotifyContainer></NotifyContainer>
  </Provider>
);
