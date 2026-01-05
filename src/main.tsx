// src/main.tsx
// import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./index.css";
import "./components/App.module.css";
import "./components/CafeInfo/CafeInfo.module.css";
import "./components/Notification/Notification.module.css";
import "./components/VoteOptions/VoteOptions.module.css";
import "./components/VoteStats/VoteStats.module.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
