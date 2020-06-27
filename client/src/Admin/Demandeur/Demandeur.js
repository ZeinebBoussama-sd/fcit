import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AddDemandeur from "./AddDemandeur";
import { GET_DEMANDEURS } from "../GraphQl/Query";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
import { DELETE_DEMANDEUR } from "../GraphQl/Mutation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Demandeur() {
  const { loading, error, data, refetch } = useQuery(GET_DEMANDEURS);
  const [deleteDemandeur, res] = useMutation(DELETE_DEMANDEUR);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteDemandeur({
        variables: {
          code_demandeur: parseInt(values),
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11">
      <AddDemandeur refetch={refetch} />
      <div className="table-responsive">
        <table className="table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-2">
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
              <th scope="col" className="col-1">
                --
              </th>
              <th scope="col" className="col-1">
                --
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allDemandeurs.map((demandeur, idx) => (
              <tr key={idx}>
                <Link to={`/demandeur/${demandeur.code_demandeur}`}>
                  <td scope="row" className="col-2">
                    {demandeur.nom_demandeur}
                  </td>
                </Link>
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
                    <Link to={`/demandeur/${demandeur.code_demandeur}`}>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="mr-1 pointer"
                        color="yellow"
                      />
                    </Link>
                  </center>
                </td>
                <td className="col-1">
                  <center>
                    <WarningModal dlt={dlt} code={demandeur.code_demandeur} />
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
