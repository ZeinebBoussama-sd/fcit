import React from "react";
import orsys from "../../foundation/home/orsys.png";
import PLB from "../../foundation/home/logoPlb.png";
import ib from "../../foundation/home/ib.png";
function Pt4() {
  return (
    <div
      class="row"
      style={{
        backgroundColor: "CadetBlue",
        padding: "15px 0px 10px 0px",
        marginRight: "0px"
      }}
    >
      <div class="col-4">
        <center>
          <a href="https://www.orsys.fr/">
            <img src={orsys} alt="" />
          </a>
        </center>
      </div>
      <div class="col-4">
        <center>
          <a href="https://www.plb.fr/">
            <img src={PLB} alt="" />
          </a>
        </center>
      </div>
      <div class="col-4">
        <center>
          <a href="https://www.ib-formation.fr/">
            <img src={ib} alt="" />
          </a>
        </center>
      </div>
    </div>
  );
}
export default Pt4;
