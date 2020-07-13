import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_INGENIEUR_PEDAGOGIQUE } from "../GraphQl/Query";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
import jwt_decode from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { getAccessToken } from "../../Utils/AccessToken";

function Intro() {
  var decoded = jwt_decode(getAccessToken());
  const { loading, error, data } = useQuery(GET_INGENIEUR_PEDAGOGIQUE, {
    variables: { code_IP: decoded.code_IP },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  return (
    <div className="intro height-8 mt-6" style={{ margin: "-20px" }}>
      {/* <h2>
        <b> Welcome:</b> {data.ingenieurpedagogique.prenom_ing}{" "}
        {data.ingenieurpedagogique.nom_ing}
      </h2> */}
    </div>
  );
}
export default Intro;
