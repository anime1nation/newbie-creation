import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Store } from "./app-manager/store";
import { Provider } from "react-redux";
import AuthProvider from "./app-manager/login/AuthProvider";
import QueryProvider from "./app-manager/login/QueryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Provider store={Store}>
      <BrowserRouter>
        <QueryProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </QueryProvider>
      </BrowserRouter>
    </Provider>
  </AuthProvider>
);
