import React from "react";
import formation from "../../foundation/home/methodologie-formation.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
function Pt1() {
  return (
    <div>
      <div style={{ position: "relative", height: "400px" }}>
        <div style={{ position: "absolute", zIndex: "1" }}>
          <img src={formation} class="img-gd" alt="Responsive image" />
        </div>
        <div class="div-img" style={{ zIndex: "2", fontSize: "200%" }}>
          <h5 class="align-top" style={{ color: "white", margin: "20px" }}>
            Formation & consulting information technology
          </h5>
          <h1 class="h1-img1 align-top">
            Bienvenue chez le spécialiste de la formation contenue et du
            consulting
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Pt1;
