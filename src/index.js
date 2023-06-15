import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppProvider } from "./AppContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
      <Toaster position="bottom-center"/>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
