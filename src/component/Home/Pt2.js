import React from "react";
import technologie from "../../foundation/home/technologie.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
function Pt2() {
  return (
    <div>
      <div style={{ position: "relative", height: "400px" }}>
        <div style={{ position: "absolute", zIndex: "1" }}>
          <img src={technologie} class="img-gd" alt="Responsive image" />
        </div>
        <div class="div-img" style={{ zIndex: "2", fontSize: "200%" }}>
          <h5 class="h5-img2">Formation & consulting information technology</h5>
          <h1 class="h1-img2">Formations ciblées en nouvelles technologies</h1>
        </div>
      </div>
    </div>
  );
}
export default Pt2;
