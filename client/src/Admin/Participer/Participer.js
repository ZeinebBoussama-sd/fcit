import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_PARTICIPANTS, GET_PARTICIPERS } from "../GraphQl/Query";
// import AddParticipant from "./AddParticipant";
import { DELETE_PARTICIPER } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
function Participer() {
  const { loading, error, data, refetch } = useQuery(GET_PARTICIPERS);
  const [deleteParticiper, res] = useMutation(DELETE_PARTICIPER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteParticiper({
        variables: {
          SessionCISession: parseInt(values),
          ParticipantCodeParticipant: parseInt(values),
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  console.log(data);
  return (
    <div className="mt-11">
      {/* <AddParticipant refetch={refetch} /> */}
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-2">
                Nom
              </th>
              <th scope="col" className="col-2">
                Prenom
              </th>
              <th scope="col" className="col-2">
                Rapport d'évaluation
              </th>
              <th scope="col" className="col-2">
                Note QCM
              </th>
              <th scope="col" className="col-2">
                Date D'évaluation
              </th>
              <th scope="col" className="col-1">
                -
              </th>
              <th scope="col" className="col-1">
                -
              </th>
            </tr>
          </thead>
          <tbody className="overflow-auto height-9">
            {data.allParticipants.map((participant, idx) => (
              <tr key={idx}>
                <td className="col-3">
                  <Link to={`/participant/${participant.code_participant}`}>
                    {participant.nom_participant}
                  </Link>
                </td>
                <td className="col-3">{participant.prenom_participant}</td>
                <td className="col-2">{participant.carte_identite}</td>
                <td className="col-2">
                  {" "}
                  {participant.client
                    ? participant.client.nom_client
                    : "--"}{" "}
                </td>

                <td className="col-1">
                  <center>
                    <Link to={`/participant/${participant.code_participant}`}>
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
                      code={participant.code_participant}
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
export default Participer;
