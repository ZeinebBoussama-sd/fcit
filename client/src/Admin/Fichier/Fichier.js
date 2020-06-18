import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_FICHIERS } from "../GraphQl/Query";
import AddFichier from "./AddFichier";
import { DELETE_FICHIER } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
function Fichier() {
  const { loading, error, data, refetch } = useQuery(GET_FICHIERS);
  const [deleteFichier, res] = useMutation(DELETE_FICHIER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteFichier({
        variables: {
          code_fichier: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11">
      <AddFichier refetch={refetch} />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-2">
                Nom
              </th>
              <th scope="col" className="col-2">
                type
              </th>
              <th scope="col" className="col-1">
                Taille
              </th>
              <th scope="col" className="col-3">
                URL
              </th>
              <th scope="col" className="col-1">
                Nature Support
              </th>
              <th scope="col" className="col-2">
                Support
              </th>
            </tr>
          </thead>
          <tbody className="overflow-auto height-9">
            {data.allFichiers.map((fichier, idx) => (
              <tr key={idx}>
                <Link to={`/fichier/${fihier.code_fichier}`}>
                  <td className="col-2">{fichier.nom_fichier}</td>
                </Link>
                <td className="col-2">{fichier.type_fichier}</td>
                <td className="col-1">{fichier.taille_max}</td>
                <td className="col-3">{fichier.url_fichier}</td>
                <td className="col-1">{fichier.nature_support}</td>
                <td className="col-1">{fichier.support.titre_support}</td>
                <td className="col-1">
                  <center>
                    <WarningModal dlt={dlt} code={fichier.code_fichier} />
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
export default Fichier;
