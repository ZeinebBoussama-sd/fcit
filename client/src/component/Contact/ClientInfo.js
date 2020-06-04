import React, { useState, useEffect } from "react";
import AddDemande from "./AddDemande";
import AddClient from "./AddClient";

function ClientInfo(props) {
  const [info, setInfo] = useState(null);

  const res = props.res.data;
  const res2 = props.res2.data;
  const resClient = props.resClient;
  useEffect(() => {});

  if (props.person === "person") {
    if (res && resClient) {
      setInfo(null);
    } else if (res) {
      setInfo(res.personne.client);
    } else if (resClient) {
      setInfo(resClient.personne.client);
    }
  } else if (props.societe === "societe") {
    if (res && resClient) {
      setInfo(null);
    }
    if (res2) {
      setInfo(res2.societe.client);
    } else if (resClient) {
      resClient.societe && setInfo(resClient.societe.client);
    }
  }
  debugger;
  return (
    <div>
      {info ? (
        <div>
          <p>ID: {info.id}</p>
          <p>Name: {info.nom_client}</p>
          <p>Adress: {info.adr_client}</p>
          <p>Email: {info.email_client}</p>
          <p>Tel: {info.tel_client}</p>
          <AddDemande clientID={info.id} />
        </div>
      ) : (
        <div>
          <p className="text-red">
            "Vous n'aviez pas un compte chez nous veuillez creer un "
          </p>
        </div>
      )}
    </div>
  );
}
export default ClientInfo;
