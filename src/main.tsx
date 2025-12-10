// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./index.css";
import "./App.css";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
