import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_DEMANDE_FORMATIONS } from "../GraphQl/Query";
import AddDemande from "./AddDemande";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
import { DELETE_DEMANDE } from "../GraphQl/Mutation";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function DemandeFormation() {
  const { loading, error, data, refetch } = useQuery(GET_DEMANDE_FORMATIONS);
  const [deletedemande, res] = useMutation(DELETE_DEMANDE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deletedemande({
        variables: {
          code_demande: parseInt(values),
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11 ">
      <AddDemande refetch={refetch} />
      <div className="table-responsive">
        <table className=" table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-2">
                Date demande
              </th>
              <th scope="col" className="col-1">
                Etat
              </th>
              <th scope="col" className="col-2">
                Client
              </th>
              <th scope="col" className="col-2">
                Formation
              </th>
              <th scope="col" className="col-1">
                Type
              </th>
              <th scope="col" className="col-1">
                Mode
              </th>
              <th scope="col" className="col-1">
                Prix
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allDemandeFormations.map((demandeformation, idx) => (
              <tr key={idx}>
                <td className="col-2">
                  <Link
                    to={`/demandeformation/${demandeformation.code_demande}`}
                  >
                    {moment(demandeformation.date_demande).format("YYYY-DD-MM")}
                  </Link>
                </td>
                <td className="col-1">{demandeformation.etat_demande}</td>
                <td className="col-2">
                  {demandeformation.client
                    ? demandeformation.client.nom_client
                    : "--"}
                </td>
                <td className="col-2">{demandeformation.formation.intitule}</td>
                <td className="col-1">{demandeformation.type_demande}</td>
                <td className="col-1">{demandeformation.mode_demande}</td>
                <td className="col-1">
                  {demandeformation.prix_prevu
                    ? demandeformation.prix_prevu
                    : "--"}
                </td>
                <td className="col-1">
                  <center>
                    <Link
                      to={`/demandeformation/${demandeformation.code_demande}`}
                    >
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
                    <WarningModal
                      dlt={dlt}
                      code={demandeformation.code_demande}
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
export default DemandeFormation;
