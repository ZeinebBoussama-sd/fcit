import React from "react";
import Nav from "./component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./foundation/style.css";
import Footer from "./component/Footer";
import "@fortawesome/fontawesome-free";
function App() {
  return (
    <div>
      <Nav />
      <button type="button" class="btn btn-success">
        Primary
      </button>
      <Footer />
    </div>
  );
}

export default App;
