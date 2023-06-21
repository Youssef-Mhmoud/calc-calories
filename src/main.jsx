import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";
import ThemeContextProvider from "./context/theme-context.jsx";
import LoaderContextProvider from "./context/loader-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LoaderContextProvider>
        <App />
      </LoaderContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
