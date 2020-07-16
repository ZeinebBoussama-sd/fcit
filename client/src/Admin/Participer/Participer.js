import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_PARTICIPANTS,
  GET_PARTICIPERS,
  GET_PARTICIPER,
} from "../GraphQl/Query";
import { DELETE_PARTICIPER } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
import moment from "moment";

function Participer(props) {
  //const { loading, error, data, refetch } = useQuery(GET_PARTICIPERS);
  const [deleteParticiper, res] = useMutation(DELETE_PARTICIPER);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteParticiper({
        variables: {
          SessionCISession: parseInt(values.s),
          ParticipantCodeParticipant: parseInt(values.p),
        },
      });
    } catch (error) {
      console.log(error);
    }
    props.refetch();
  };
  const data = props.data;
  return (
    <div className="mt-4">
      {/* <AddParticipant refetch={refetch} /> */}
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-4">
                Raport
              </th>
              <th scope="col" className="col-3">
                Note QCM
              </th>
              <th scope="col" className="col-3">
                Date D'évaluation
              </th>
              <th scope="col" className="col-1">
                -
              </th>
            </tr>
          </thead>
          <tbody className="overflow-auto height-9">
            {data &&
              data.participer.map((participer, idx) => {
                const ids = {
                  p: participer.ParticipantCodeParticipant,
                  s: participer.SessionCISession,
                };
                return (
                  <tr key={idx}>
                    <td className="col-4">
                      {/* <Link to={`/participant/${participer.code_participant}`}> */}
                      {participer.rapport_eval.replace(/^.*[\\\/]/, "")}
                      {/* </Link> */}
                    </td>
                    <td className="col-3">{participer.note_QCM}</td>
                    <td className="col-3">
                      {moment(participer.date_eval).format("YYYY-MM-DD")}
                    </td>
                    <td className="col-1">
                      <center>
                        <WarningModal dlt={dlt} code={ids} />
                      </center>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Participer;
