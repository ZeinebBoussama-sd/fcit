import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GetIngenieurPedagogique } from "../GraphQl/Query";
import AddIngenieurPedagogique from "./AddIngenieurPedagogique";
function IngenieurPedagogique() {
  const { loading, error, data } = useQuery(GetIngenieurPedagogique);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div className="mt-11">
      <AddIngenieurPedagogique />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom Ing</th>
            <th scope="col"> Prenom Ing</th>
            <th scope="col">Cv Ing</th>
            <th scope="col">Email Ing</th>
            <th scope="col">Telephone Ing</th>
            <th scope="col">NSS Ing</th>
            <th scope="col">Salaire Ing</th>
            <th scope="col">Specialité Ing</th>
            <th scope="col">Adresse Ing</th>
          </tr>
        </thead>
        <tbody>
          {data.allIngenieurPedagogiques.map((ingenieur_pedagogique, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{ingenieur_pedagogique.nom_ing}</td>
              <td>{ingenieur_pedagogique.prenom_ing}</td>
              <td>{ingenieur_pedagogique.cv_ing}</td>
              <td>{ingenieur_pedagogique.email_ing}</td>
              <td>{ingenieur_pedagogique.tel_ing}</td>
              <td>{ingenieur_pedagogique.NSS_ing}</td>
              <td>{ingenieur_pedagogique.salaire_ing}</td>
              <td>{ingenieur_pedagogique.specialite_ing}</td>
              <td>{ingenieur_pedagogique.adr_ing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default IngenieurPedagogique;
