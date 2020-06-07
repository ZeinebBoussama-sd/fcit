import React from "react";
import { useQuery } from "@apollo/react-hooks";
import AddDemandeur from "./AddDemandeur";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { GET_DEMANDEURS } from "../GraphQl/Query";
function Demandeur() {
  const { loading, error, data, refetch } = useQuery(GET_DEMANDEURS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div className="mt-11">
      <AddDemandeur refetch={refetch} />
      <div className="table-responsive">
        <table className="table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-3">
                Nom
              </th>
              <th scope="col" className="col-3">
                Prénom
              </th>
              <th scope="col" className="col-3">
                email
              </th>
              <th scope="col" className="col-2">
                tel
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allDemandeurs.map((demandeur, idx) => (
              <tr key={idx}>
                <td scope="row" className="col-3">
                  {demandeur.nom_demandeur}
                </td>
                <td scope="row" className="col-3">
                  {demandeur.prenom_demandeur}
                </td>
                <td scope="row" className="col-3">
                  {demandeur.email_demandeur}
                </td>
                <td className="col-2">
                  {demandeur.tel_demandeur ? demandeur.tel_demandeur : "--"}
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
export default Demandeur;
