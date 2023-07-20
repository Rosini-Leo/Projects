import React from "react";
import { createRoot } from "react-dom/client";

// external files
import App from './components/App';
import './style/index.scss';


// React v.18 main 
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);