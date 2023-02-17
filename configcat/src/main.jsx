import React from "react";
import { ConfigCatProvider } from "configcat-react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigCatProvider sdkKey="SDK-KEY">
      <App />
    </ConfigCatProvider>
  </React.StrictMode>
);
