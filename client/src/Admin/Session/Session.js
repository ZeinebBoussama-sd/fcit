import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_SESSIONS } from "../GraphQl/Query";
import AddSession from "./AddSession";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
import { DELETE_SESSION } from "../GraphQl/Mutation";

function Session() {
  const { loading, error, data, refetch } = useQuery(GET_SESSIONS);
  const [deleteSession, res] = useMutation(DELETE_SESSION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteSession({
        variables: {
          code_session: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };

  return (
    <div className="mt-11 ">
      <AddSession refetch={refetch} />
      <div className="table-responsive">
        <table className=" table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                code
              </th>
              <th scope="col" className="col-1">
                Type{" "}
              </th>
              <th scope="col" className="col-2">
                Date Debut{" "}
              </th>

              <th scope="col" className="col-2">
                Client
              </th>
              <th scope="col" className="col-2">
                Formation
              </th>
              <th scope="col" className="col-2">
                Formateur
              </th>
              <th scope="col" className="col-1">
                Support
              </th>
              <th scope="col" className="col-1">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allSessions &&
              data.allSessions.map((session, idx) => (
                <tr key={idx}>
                  <Link to={`/session/${session.CI_session}`}>
                    <th scope="row" className="col-1">
                      {session.code_session}
                    </th>
                  </Link>
                  <td className="col-1">{session.type_sess}</td>
                  <td className="col-2">{session.date_deb_sess}</td>
                  <td className="col-2">
                    {session && session.client && session.client.nom_client}
                  </td>
                  <td className="col-2">
                    {session.formation && session.formation.intitule}
                  </td>
                  <td className="col-2">
                    {session.formateur && session.formateur.nom_f}
                  </td>
                  <td className="col-1">
                    {session.support.titre_support
                      ? session.support.titre_support
                      : "--"}
                  </td>
                  <td className="col-1">
                    <center>
                      <WarningModal dlt={dlt} code={session.code_session} />
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
export default Session;
