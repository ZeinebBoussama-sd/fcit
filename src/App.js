import React from "react";
import Nav from "./component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./foundation/style.css";
import Footer from "./component/Footer";
import "@fortawesome/fontawesome-free";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apropos from "../../fcit/src/pages/Apropos.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route />
          <Route path="/Apropos" exact component={Apropos} />
          <Route />
          <Route />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
