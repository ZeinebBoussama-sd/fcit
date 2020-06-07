import React from "react";
import { useQuery } from "@apollo/react-hooks";
import AddFormation from "./AddFormation";
import { GET_FORMATION } from "../GraphQl/Query";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Formation() {
  const { loading, error, data } = useQuery(GET_FORMATION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  return (
    <div className="mt-11">
      <AddFormation />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                code
              </th>
              <th scope="col" className="col-3">
                Intitule
              </th>
              <th scope="col" className="col-1">
                Durée
              </th>
              <th scope="col" className="col-2">
                Catagorie
              </th>
              <th scope="col" className="col-1">
                Prix
              </th>

              <th scope="col" className="col-3">
                Theme
              </th>
              <th scope="col" className="col-1">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allFormations &&
              data.allFormations.map((formation, idx) => (
                <tr key={idx}>
                  <th scope="row" className="col-1">
                    {formation.code_formation}
                  </th>
                  <td className="col-3">{formation.intitule}</td>
                  <td className="col-1">{formation.duree_formation}</td>
                  <td className="col-2">{formation.catagorie_formation}</td>
                  <td className="col-1">{formation.prix_formation}</td>
                  <td className="col-3">
                    {formation.theme ? formation.theme.nom_theme : "--"}
                  </td>

                  <td className="col-1">
                    <center>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="mr-1"
                        color="cornflowerblue"
                      />
                    </center>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Formation;
