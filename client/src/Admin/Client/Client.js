import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import AddClient from "./AddClient";
import { GET_CLIENTS } from "../GraphQl/Query";
import { DELETE_CLIENT } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";

function Client() {
  const { loading, error, data, refetch } = useQuery(GET_CLIENTS);
  const [deleteCLient, res] = useMutation(DELETE_CLIENT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteCLient({
        variables: {
          code_client: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11 ">
      <AddClient refetch={refetch} />
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
            </tr>
          </thead>
          <tbody>
            {data.allClients &&
              data.allClients.map((client, idx) => (
                <tr key={idx}>
                  <th scope="row" className="col-1">
                    {client.code_client}
                  </th>
                  <Link to={`/client/${client.code_client}`}>
                    <td className="col-2">{client.nom_client}</td>
                  </Link>
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
                      <WarningModal dlt={dlt} code={client.code_client} />
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
