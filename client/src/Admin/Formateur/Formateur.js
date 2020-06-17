import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_FORMATEURS } from "../GraphQl/Query";
import AddFormateur from "./AddFormateur";
import { DELETE_FORMATEUR } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
function Formateur() {
  const { loading, error, data, refetch } = useQuery(GET_FORMATEURS);
  const [deleteFormateur, res] = useMutation(DELETE_FORMATEUR);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteFormateur({
        variables: {
          code_formateur: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11">
      <AddFormateur refetch={refetch} />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                code
              </th>
              <th scope="col" className="col-2">
                Nom
              </th>
              <th scope="col" className="col-2">
                Prenom
              </th>
              <th scope="col" className="col-1">
                Classe
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
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="overflow-auto height-9">
            {data.allFormateurs.map((formateur, idx) => (
              <tr key={idx}>
                <th scope="row" className="col-1">
                  {formateur.code_formateur}
                </th>

                <Link to={`/formateur/${formateur.code_formateur}`}>
                  <td className="col-2">{formateur.nom_f}</td>
                </Link>
                <td className="col-2">{formateur.prenom_f}</td>
                <td className="col-1">{formateur.classe_f}</td>
                <td className="col-3">{formateur.email_f}</td>
                <td className="col-1">{formateur.tel_f}</td>
                <td className="col-1">
                  {formateur.salaire_f ? formateur.salaire_f : "--"}
                </td>
                <td className="col-1">
                  <center>
                    <WarningModal dlt={dlt} code={formateur.code_formateur} />
                  </center>
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
