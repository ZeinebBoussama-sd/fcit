import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { getSession } from "../GraphQl/Query";
import AddSession from "./AddSession";

function Session() {
  const { loading, error, data } = useQuery(getSession);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div className="mt-11 ">
      <AddSession />
      <div className="table-responsive">
        <table className=" table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                #
              </th>
              <th scope="col" className="col-1">
                Type{" "}
              </th>
              <th scope="col" className="col-2">
                Date Debut{" "}
              </th>
              <th scope="col" className="col-1">
                Lieux
              </th>
              <th scope="col" className="col-1">
                Prix
              </th>
              <th scope="col" className="col-2">
                Client
              </th>
              <th scope="col" className="col-2">
                Formation
              </th>
              <th scope="col" className="col-1">
                Formateur
              </th>
              <th scope="col" className="col-1">
                Support
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allSessions &&
              data.allSessions.map((session, idx) => (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{session.type_sess}</td>
                  <td>{session.date_deb_sess}</td>
                  <td>{session.lieu_sess}</td>
                  <td>{session.prix_session}</td>
                  <td>{session.client.nom_client}</td>
                  <td>{session.formation.intitule}</td>
                  <td>{session.formateur.nom_f}</td>
                  <td>{session.support.titre_support}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Session;
