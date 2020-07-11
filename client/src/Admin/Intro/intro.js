import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_INGENIEUR_PEDAGOGIQUE } from "../GraphQl/Query";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  const { loading, error, data } = useQuery(GET_INGENIEUR_PEDAGOGIQUE, {
    variables: { code_IP: "1" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  console.log(data.ingenieurpedagogique);
  return (
    <div className="mt-11">
      <h2>
        <b> Welcome:</b> {data.ingenieurpedagogique.prenom_ing}{" "}
        {data.ingenieurpedagogique.nom_ing}
      </h2>
    </div>
  );
}
export default Intro;
