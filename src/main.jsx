// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// REMOVA OU COMENTE A LINHA ABAIXO:
// import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
