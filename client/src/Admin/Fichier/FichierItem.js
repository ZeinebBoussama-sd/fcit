import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_FICHIER } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditFichier from "./EditFichier";
function FichierItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_FICHIER, {
    variables: { code_fichier: id },
  });
  const [edit, setEdit] = useState(false);
  const fichier = data ? data.fichier : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(fichier);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">
            About: {fichier && fichier.nom_fichier}
          </h5>
          <span className="col-0 text-right">
            <FontAwesomeIcon
              icon={faCog}
              className="ml-5 mt-2 pointer"
              onClick={() => action()}
              data-toggle="collapse"
              data-target="#settingContent"
            />
          </span>
        </div>
        {!edit ? (
          <Item fichier={fichier} />
        ) : (
          <EditFichier
            className=""
            id="navbarSupportedContent"
            fichier={fichier}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default FichierItem;
