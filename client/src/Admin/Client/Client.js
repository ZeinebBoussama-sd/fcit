import React from "react";
import { useQuery } from "@apollo/react-hooks";
import AddClient from "./AddClient";
import { GetClient } from "../GraphQl/Query";

function Client() {
  const { loading, error, data } = useQuery(GetClient);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div className="mt-11 ">
      <AddClient />
      <div className="table-responsive">
        <table className="table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                #
              </th>
              <th scope="col" className="col-2">
                Nom
              </th>
              <th scope="col" className="col-2">
                Email
              </th>
              <th scope="col" className="col-1">
                Telephone
              </th>
              <th scope="col" className="col-2">
                Adresse
              </th>
              <th scope="col" className="col-2">
                CIN
              </th>
              <th scope="col" className="col-2">
                Matricule Fiscale
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allClients &&
              data.allClients.map((client, idx) => (
                <tr key={idx}>
                  <th scope="row" className="col-1">
                    {idx + 1}
                  </th>
                  <td className="col-2">{client.nom_client}</td>
                  <td className="col-2">{client.email_client}</td>
                  <td className="col-1">{client.tel_client}</td>
                  <td className="col-2">{client.adr_client}</td>
                  <td className="col-2">
                    {client.personne && client.personne.cin_p}
                  </td>
                  <td className="col-2">
                    {client.societe
                      ? client.societe && client.societe.mat_fisc_sc
                      : "--"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Client;
