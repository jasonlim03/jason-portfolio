import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SuperFanProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));

let _firebaseConfig = {
  apiKey: "AIzaSyCvOLqEkE3S0K6NKMW6vIO5MjVdxJ4k0Zw",
  authDomain: "superfan-3a794.firebaseapp.com",
  projectId: "superfan-3a794",
  storageBucket: "superfan-3a794.appspot.com",
  messagingSenderId: "18328979437",
  appId: "1:18328979437:web:b6fb5190d1b2ba9445c9e4",
  measurementId: "G-9MNC1K6CRJ",
};

let _collection = "coach-holiday-interective";
let _superfan = "coach-holiday-interective-superfans";

root.render(
  <SuperFanProvider
    value={{
      firebaseConfig: _firebaseConfig,
      collection: _collection,
      superfan: _superfan,
    }}
  >
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </SuperFanProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
