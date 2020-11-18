import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes/Routes";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const themeMode = isLightTheme ? light : dark;
  console.log(isLightTheme);
  const { appBackground } = themeMode;

  return (
    <div className="App" style={{ background: appBackground }}>
      <Router>
        <Switch>
          <Header />
        </Switch>
        <Navbar />
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
