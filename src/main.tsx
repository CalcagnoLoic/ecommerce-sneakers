import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "/public/assets/style/tailwind.css";
import { BasketProvider } from "./context/Basket/Basket.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
