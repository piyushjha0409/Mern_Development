import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  p = "Piyush";
  render() {
    return (
      <>
        <div>
          <Navbar />
          <News />
        </div>
        <div></div>
      </>
    );
  }
}
