import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";

// Store
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import user from "./components/SlidePost";
const store = configureStore({ reducer: { user } });


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
