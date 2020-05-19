import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GetDemandeFormation } from "../GraphQl/Query";
function DemandeFormation() {
  const { loading, error, data } = useQuery(GetDemandeFormation);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div className="mt-11 ">
      <table className=" table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date demande </th>
            <th scope="col">Etat </th>
            <th scope="col">Client </th>
            <th scope="col">Formation</th>
            <th scope="col">Type</th>
            <th scope="col">Mode</th>
            <th scope="col">Prix</th>
          </tr>
        </thead>
        <tbody>
          {data.allDemandeFormations.map((demandeformation, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{demandeformation.date_demande}</td>
              <td>{demandeformation.etat_demande}</td>
              <td>{demandeformation.client.nom_client}</td>
              <td>{demandeformation.formation.intitule}</td>
              <td>{demandeformation.type_demande}</td>
              <td>{demandeformation.mode_demande}</td>
              <td>{demandeformation.prix_prevu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DemandeFormation;
