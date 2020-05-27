import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GetSupport } from "../GraphQl/Query";
function Support() {
  const { loading, error, data } = useQuery(GetSupport);
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
                Titre{" "}
              </th>
              <th scope="col" className="col-1">
                Date{" "}
              </th>
              <th scope="col" className="col-2">
                Formateur
              </th>
              <th scope="col" className="col-2">
                Decision
              </th>
              <th scope="col" className="col-2">
                Ingenieur.P
              </th>
              <th scope="col" className="col-2">
                Fichiers
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allSupports.map((support, idx) => (
              <tr key={idx}>
                <th scope="row" className="col-1">
                  {idx + 1}
                </th>
                <td className="col-2">{support.titre_support}</td>
                <td className="col-1">{support.date_support}</td>
                <td className="col-2">{support.validation.formateur.nom_f}</td>
                <td className="col-2">{support.validation.decision}</td>
                <td className="col-2">
                  {support.validation.ingenieurpedagogique.nom_ing}
                </td>
                <td className="col-2">{support.fichier.nom_fichier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Support;
