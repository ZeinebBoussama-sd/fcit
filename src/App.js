import React from "react";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./foundation/style.css";
import "@fortawesome/fontawesome-free";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apropos from "./pages/Apropos";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apropos" exact component={Apropos} />
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
