import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pt1 from "../component/Home/Pt1";
import Pt2 from "../component/Home/Pt2";
import Pt3 from "../component/Home/Pt3";
import Pt4 from "../component/Home/Pt4";
function Home() {
  return (
    <div className="Home">
      <Pt1 />
      <Pt3 />
      <Pt2 />
      <Pt4 />
    </div>
  );
}
export default Home;
