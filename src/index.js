import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import "./index.css";
import App from "./App";

// console.log("store ->", store);
// console.log("Before", store.getState());

// store.dispatch({
//   type: "CREATE",
//   contacts: [{ name: "US" }],
// });

// console.log("after", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastProvider autoDismiss autoDismissTimout={5000} placement="top-right">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
  </React.StrictMode>
);
