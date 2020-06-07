import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { GetIngenieurPedagogique } from "../GraphQl/Query";
import AddIngenieurPedagogique from "./AddIngenieurPedagogique";
import { DELETE_INGENIEURPEDAGOGIQUE } from "../GraphQl/Mutation";
function IngenieurPedagogique() {
  const { loading, error, data, refetch } = useQuery(GetIngenieurPedagogique);
  const [DeleteIngenieurPedagogique, rest] = useMutation(
    DELETE_INGENIEURPEDAGOGIQUE
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  const dlt = async (values) => {
    try {
      await DeleteIngenieurPedagogique({
        variables: {
          code_IP: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11">
      <AddIngenieurPedagogique refetch={refetch} />
      <div className="table-responsive">
        <table className="table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-2">
                Nom
              </th>
              <th scope="col" className="col-1">
                {" "}
                Prenom
              </th>

              <th scope="col" className="col-3">
                Email
              </th>
              <th scope="col" className="col-2">
                Telephone
              </th>

              <th scope="col" className="col-1">
                Salaire
              </th>
              <th scope="col" className="col-2">
                Specialité
              </th>
              <th scope="col" className="col-1">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allIngenieurPedagogiques.map((ingenieur_pedagogique, idx) => (
              <tr key={idx}>
                <td className="col-2">{ingenieur_pedagogique.nom_ing}</td>
                <td className="col-1">{ingenieur_pedagogique.prenom_ing}</td>
                <td className="col-3">{ingenieur_pedagogique.email_ing}</td>
                <td className="col-2">{ingenieur_pedagogique.tel_ing}</td>
                <td className="col-1">{ingenieur_pedagogique.salaire_ing}</td>
                <td className="col-2">
                  {ingenieur_pedagogique.specialite_ing
                    ? ingenieur_pedagogique.specialite_ing
                    : "--"}
                </td>
                <td className="col-1">
                  <center>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="mr-1"
                      color="cornflowerblue"
                      onClick={() =>
                        dlt(parseInt(ingenieur_pedagogique.code_IP))
                      }
                    />
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
export default IngenieurPedagogique;
