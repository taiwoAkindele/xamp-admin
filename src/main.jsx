import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Toaster
          toastOptions={{
            style: {
              fontSize: "0.8rem",
            },
            duration: 5000,
          }}
          position="top-center"
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
