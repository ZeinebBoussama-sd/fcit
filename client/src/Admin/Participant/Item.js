import React, { useState } from "react";
import AddParticiper from "../Participer/AddParticiper";
import Participer from "../Participer/Participer";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_PARTICIPER } from "../GraphQl/Query";

function Item(props) {
  let { id } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_PARTICIPER, {
    variables: {
      ParticipantCodeParticipant: parseInt(id),
      SessionCISession: parseInt(id),
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const participant = props.participant ? props.participant : null;
  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">Nom :</b>
          <p className="col">{participant && participant.nom_participant}</p>
        </div>
        <div className="row">
          <b className="col-2">Prenom:</b>
          <p className="col">{participant && participant.prenom_participant}</p>
        </div>
        <div className="row">
          <b className="col-2">CIN:</b>
          <p className="col">{participant && participant.carte_identite}</p>
        </div>
        <div className="row">
          <b className="col-2">Client:</b>
          <p className="col">
            {participant && participant.client && participant.client.nom_client}
          </p>
        </div>
      </div>
      <AddParticiper
        refetch={refetch}
        code_participant={data && data.code_participant}
      />
      <Participer data={data} refetch={refetch} />
    </div>
  );
}
export default Item;
