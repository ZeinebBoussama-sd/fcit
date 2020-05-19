import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GetSupport } from "../GraphQl/Query";
function Support() {
  const { loading, error, data } = useQuery(GetSupport);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div className="mt-11 ">
      <table className=" table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre </th>
            <th scope="col">Date </th>
            <th scope="col">Formateur</th>
            <th scope="col">Decision</th>
            <th scope="col">Ingenieur.P</th>
            <th scope="col">Fichiers</th>
          </tr>
        </thead>
        <tbody>
          {data.allSupports.map((support, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{support.titre_support}</td>
              <td>{support.date_support}</td>
              <td>{support.validation.formateur.nom_f}</td>
              <td>{support.validation.decision}</td>
              <td>{support.validation.ingenieurpedagogique.nom_ing}</td>
              <td>{support.fichier.nom_fichier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Support;
