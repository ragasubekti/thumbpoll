import React from "react";
import ReactDOM from "react-dom";

import Router from "components/Router";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(<Router />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    console.log("Hot Module Disposed");
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
