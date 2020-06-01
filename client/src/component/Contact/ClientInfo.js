import React from "react";
import AddDemande from "./AddDemande";
import AddClient from "./AddClient";

function ClientInfo(props) {
  const res = props.res.data;
  const res2 = props.res2.data;
  return (
    <div>
      {props.person === "person" && res && (
        <div>
          {res.personne ? (
            <div>
              <p>ID: {res.personne.client.id}</p>
              <p>Name: {res.personne.client.nom_client}</p>
              <p>Adress: {res.personne.client.adr_client}</p>
              <p>Email: {res.personne.client.email_client}</p>
              <p>Tel: {res.personne.client.tel_client}</p>
              <AddDemande clientID={res.personne.client.id} />
            </div>
          ) : (
            <div>
              <AddClient ClientType={props.person} />
            </div>
          )}
        </div>
      )}
      {props.person === "societe" && res2 && (
        <div>
          {res2.societe ? (
            <div>
              <p>ID: {res2.societe.client.id}</p>
              <p>Name: {res2.societe.client.nom_client}</p>
              <p>Adress: {res2.societe.client.adr_client}</p>
              <p>Email: {res2.societe.client.email_client}</p>
              <p>Tel: {res2.societe.client.tel_client}</p>
              <AddDemande clientID={res2.societe.client.id} />
            </div>
          ) : (
            <div>
              <p className="text-red">"Not found societe"</p>
              {!props.res2.data.societe && (
                <AddClient ClientType={props.person} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default ClientInfo;
