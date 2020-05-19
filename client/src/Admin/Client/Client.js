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
      <table className=" table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom </th>
            <th scope="col">Email </th>
            <th scope="col">Telephone</th>
            <th scope="col">Adresse</th>
            <th scope="col">CIN</th>
            <th scope="col">Matricule Fiscale</th>
          </tr>
        </thead>
        <tbody>
          {data.allClients &&
            data.allClients.map((client, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{client.nom_client}</td>
                <td>{client.email_client}</td>
                <td>{client.tel_client}</td>
                <td>{client.Adr_client}</td>
                <td>{client.personne && client.personne.cin_p}</td>
                <td>{client.societe && client.societe.mat_fisc_sc}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Client;
