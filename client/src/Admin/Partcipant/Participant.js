import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_PARTICIPANTS } from "../GraphQl/Query";
import AddParticipant from "./AddParticipant";
import { DELETE_PARTICIPANT } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
function Participant() {
  const { loading, error, data, refetch } = useQuery(GET_PARTICIPANTS);
  const [deleteParticipant, res] = useMutation(DELETE_PARTICIPANT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteParticipant({
        variables: {
          code_participant: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11">
      <AddParticipant refetch={refetch} />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                code
              </th>
              <th scope="col" className="col-2">
                Nom
              </th>
              <th scope="col" className="col-2">
                Prenom
              </th>
              <th scope="col" className="col-1">
                CIN
              </th>
              <th scope="col" className="col-1">
                Eai
              </th>
              <th scope="col" className="col-1"></th>
              <th scope="col" className="col-1"></th>
            </tr>
          </thead>
          <tbody className="overflow-auto height-9">
            {data.allParticipants.map((particpant, idx) => (
              <tr key={idx}>
                <th scope="row" className="col-1">
                  {particpant.code_participant}
                </th>

                <Link to={`/participant/${participant.code_participant}`}>
                  <td className="col-2">{participant.nom_participant}</td>
                </Link>
                <td className="col-2">{particpant.prenom_participant}</td>
                <td className="col-1">{participant.carte_identite}</td>
                <td className="col-1"></td>
                <td className="col-1"></td>

                <td className="col-1">
                  <center>
                    <WarningModal
                      dlt={dlt}
                      code={particpant.code_participant}
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
export default Participant;
