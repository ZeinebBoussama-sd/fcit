import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import AddClient from "./AddClient";
import { GET_CLIENT } from "../GraphQl/Query";
import { DELETE_CLIENT } from "../GraphQl/Mutation";

function Client() {
  const { loading, error, data } = useQuery(GET_CLIENT);
  const [deleteCLient, res] = useMutation(DELETE_CLIENT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  console.log(data);
  const dlt = async (values) => {
    debugger;
    await deleteCLient({
      variables: {
        code_client: values,
      },
    });
  };
  return (
    <div className="mt-11 ">
      <AddClient />
      <div className="table-responsive">
        <table className="table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                code
              </th>
              <th scope="col" className="col-2">
                Nom
              </th>
              <th scope="col" className="col-3">
                Email
              </th>
              <th scope="col" className="col-2">
                Telephone
              </th>

              <th scope="col" className="col-1">
                CIN
              </th>
              <th scope="col" className="col-2">
                Matricule Fiscale
              </th>
              <th scope="col" className="col-1">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allClients &&
              data.allClients.map((client, idx) => (
                <tr key={idx}>
                  <th scope="row" className="col-1">
                    {client.code_client}
                  </th>
                  <td className="col-2">{client.nom_client}</td>
                  <td className="col-3">{client.email_client}</td>
                  <td className="col-2">{client.tel_client}</td>
                  <td className="col-1">
                    {client.personne && client.personne.cin_p}
                  </td>
                  <td className="col-2">
                    {client.societe
                      ? client.societe && client.societe.mat_fisc_sc
                      : "--"}
                  </td>
                  <td className="col-1 ">
                    <center>
                      <a>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="mr-1"
                          color="cornflowerblue"
                          onClick={() => dlt(client.code_client)}
                        />
                      </a>
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
export default Client;
