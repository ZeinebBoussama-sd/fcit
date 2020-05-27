import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GetFormateur } from "../GraphQl/Query";
import AddFormateur from "./AddFormateur";
function Formateur() {
  const { loading, error, data } = useQuery(GetFormateur);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div className="mt-11">
      <AddFormateur />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                #
              </th>
              <th scope="col" className="col-2">
                Nom
              </th>
              <th scope="col" className="col-1">
                Prenom
              </th>
              <th scope="col" className="col-1">
                Classe
              </th>
              <th scope="col" className="col-1">
                Fonction
              </th>

              <th scope="col" className="col-3">
                Email
              </th>
              <th scope="col" className="col-1">
                Tel
              </th>

              <th scope="col" className="col-1">
                Salaire
              </th>
              <th scope="col" className="col-1">
                Specialite
              </th>
            </tr>
          </thead>
          <tbody className="overflow-auto height-9">
            {data.allFormateurs.map((formateur, idx) => (
              <tr key={idx}>
                <th scope="row" className="col-1">
                  {idx + 1}
                </th>
                <td className="col-2">{formateur.nom_f}</td>
                <td className="col-1">{formateur.prenom_f}</td>
                <td className="col-1">{formateur.classe_f}</td>
                <td className="col-1">{formateur.fonction_f}</td>
                <td className="col-3">{formateur.email_f}</td>
                <td className="col-1">{formateur.tel_f}</td>
                <td className="col-1">{formateur.salaire_f}</td>
                <td className="col-1">
                  {formateur.specialite_f ? formateur.specialite_f : "--"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Formateur;
