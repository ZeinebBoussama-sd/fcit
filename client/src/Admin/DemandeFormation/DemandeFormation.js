import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GetDemandeFormation } from "../GraphQl/Query";
function DemandeFormation() {
  const { loading, error, data } = useQuery(GetDemandeFormation);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div className="mt-11 ">
      <div className="table-responsive">
        <table className=" table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                #
              </th>
              <th scope="col" className="col-2">
                Date demande{" "}
              </th>
              <th scope="col" className="col-1">
                Etat{" "}
              </th>
              <th scope="col" className="col-2">
                Client{" "}
              </th>
              <th scope="col" className="col-2">
                Formation
              </th>
              <th scope="col" className="col-1">
                Type
              </th>
              <th scope="col" className="col-2">
                Mode
              </th>
              <th scope="col" className="col-1">
                Prix
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allDemandeFormations.map((demandeformation, idx) => (
              <tr key={idx}>
                <th scope="row" className="col-1">
                  {idx + 1}
                </th>
                <td className="col-2">{demandeformation.createdAt}</td>
                <td className="col-1">{demandeformation.etat_demande}</td>
                <td className="col-2">{demandeformation.client.nom_client}</td>
                <td className="col-2">{demandeformation.formation.intitule}</td>
                <td className="col-1">{demandeformation.type_demande}</td>
                <td className="col-2">{demandeformation.mode_demande}</td>
                <td className="col-1">
                  {demandeformation.prix_prevu
                    ? demandeformation.prix_prevu
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
export default DemandeFormation;
