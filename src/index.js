import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App";
import theme from "./assets/jss/theme";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/styles.css";

const app = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));

reportWebVitals();
