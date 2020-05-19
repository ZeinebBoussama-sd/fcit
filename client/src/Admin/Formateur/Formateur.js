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
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom </th>
            <th scope="col"> Prenom</th>
            <th scope="col">Classe</th>
            <th scope="col">Fonction</th>
            <th scope="col">CV</th>
            <th scope="col">Email</th>
            <th scope="col">Tel</th>
            <th scope="col">NSS</th>
            <th scope="col">Salaire</th>
            <th scope="col">Specialite</th>
            <th scope="col">Adresse</th>
            <th scope="col">Date Ajout</th>
          </tr>
        </thead>
        <tbody>
          {data.allFormateurs.map((formateur, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{formateur.nom_f}</td>
              <td>{formateur.prenom_f}</td>
              <td>{formateur.class_f}</td>
              <td>{formateur.fonction_f}</td>
              <td>{formateur.cv_f}</td>
              <td>{formateur.email_f}</td>
              <td>{formateur.tel_f}</td>
              <td>{formateur.NSS}</td>
              <td>{formateur.salaire_f}</td>
              <td>{formateur.specialite_p}</td>
              <td>{formateur.adr_f}</td>
              <td>{formateur.date_dajout}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Formateur;
