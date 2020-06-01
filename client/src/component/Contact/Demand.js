import React, { useState } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import PerSociete from "./PerSociete";
import { GetPerson, GetSociete } from "../../Admin/GraphQl/Query";
import ClientInfo from "./ClientInfo";

function Demand() {
  const [getPerson, res] = useLazyQuery(GetPerson);
  const [getSociete, res2] = useLazyQuery(GetSociete);
  const [person, setPerson] = useState("");

  return (
    <div className="container mt-11 minHeight-6">
      <PerSociete
        getPerson={getPerson}
        getSociete={getSociete}
        setPerson={setPerson}
        person={person}
      />
      <ClientInfo res={res} res2={res2} person={person} />
    </div>
  );
}
export default Demand;
