import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import Routes from "./routers";

const App = () => {
  return <BrowserRouter><Routes /></BrowserRouter>;
};

ReactDOM.render(<App />, document.getElementById("index"));