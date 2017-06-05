import React from "react";
import ReactDOM from "react-dom";
import css from "../styles/index.css";
import Header from "../components/header";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div>
        Hello, Tata!
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
