import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./nav.css";
import "./landing.css";
import "./categori.css";
import "./product.css";
import "./footer.css"
import App from "./component/App.jsx";   // ✅ Fix import

createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* ✅ Fix: Keep Navbar outside of App */}
    <App />
  </BrowserRouter>
);
