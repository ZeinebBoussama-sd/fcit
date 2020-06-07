import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { getSession } from "../GraphQl/Query";
import AddSession from "./AddSession";

function Session() {
  const { loading, error, data } = useQuery(getSession);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  console.log(data);

  return (
    <div className="mt-11 ">
      <AddSession />
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
                  <th scope="row" className="col-1">
                    {session.code_session}
                  </th>
                  <td className="col-1">{session.type_sess}</td>
                  <td className="col-2">{session.date_deb_sess}</td>
                  <td className="col-2">{session.client.nom_client}</td>
                  <td className="col-2">{session.formation.intitule}</td>
                  <td className="col-2">{session.formateur.nom_f}</td>
                  <td className="col-1">
                    {session.support.titre_support
                      ? session.support.titre_support
                      : "--"}
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
export default Session;
