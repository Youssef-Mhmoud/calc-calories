import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";
import ThemeContextProvider from "./context/theme-context.jsx";
import LoaderContextProvider from "./context/loader-context.jsx";
import UserContextProvider from "./context/userData-context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <LoaderContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </LoaderContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
