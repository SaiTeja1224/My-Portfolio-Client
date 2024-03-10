import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ActiveSectionProvider } from "./context/ActiveSectionContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ActiveSectionProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
      </ActiveSectionProvider>
    </Provider>
  </React.StrictMode>
);
