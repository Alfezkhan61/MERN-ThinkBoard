import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "daisyui/dist/full.css";
import "react-quill/dist/quill.snow.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
