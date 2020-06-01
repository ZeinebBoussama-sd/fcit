import React from "react";
import { useQuery } from "@apollo/react-hooks";
import AddFormation from "./AddFormation";
import { GetFormation } from "../GraphQl/Query";

function Formation() {
  const { loading, error, data } = useQuery(GetFormation);
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
                #
              </th>
              <th scope="col" className="col-3">
                Intitule
              </th>
              <th scope="col" className="col-1">
                Durée
              </th>
              <th scope="col" className="col-1">
                Horaire
              </th>
              <th scope="col" className="col-3">
                Catagorie
              </th>
              <th scope="col" className="col-1">
                Prix
              </th>

              <th scope="col" className="col-2">
                Theme
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allFormations &&
              data.allFormations.map((formation, idx) => (
                <tr key={idx}>
                  <th scope="row" className="col-1">
                    {idx + 1}
                  </th>
                  <td className="col-3">{formation.intitule}</td>
                  <td className="col-1">{formation.duree_formation}</td>
                  <td className="col-1">{formation.horaire_formation}</td>
                  <td className="col-3">{formation.catagorie_formation}</td>
                  <td className="col-1">{formation.prix_formation}</td>
                  <td className="col-2">
                    {formation.theme ? formation.theme.nom_theme : "--"}
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
