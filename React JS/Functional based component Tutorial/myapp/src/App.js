import "./App.css";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextForm.js";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " #002147";
      showAlert("Dark mode is enabled.", "Success!");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled.", "Success!");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextAnalyzer :)
          aboutText= "/About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
            <Route  exact path="/">
            <TextForm showAlert={showAlert} heading="Get your text analyzed!" title="Text Analyzation box" mode={mode} alert={alert}/>
            </Route>
            <Route  exact path="/about">
             <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
