import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_INGENIEUR_PEDAGOGIQUES } from "../GraphQl/Query";
import AddIngenieurPedagogique from "./AddIngenieurPedagogique";
import { DELETE_INGENIEURPEDAGOGIQUE } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
function IngenieurPedagogique() {
  const { loading, error, data, refetch } = useQuery(
    GET_INGENIEUR_PEDAGOGIQUES
  );
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
                Prenom
              </th>

              <th scope="col" className="col-2">
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
                --
              </th>
              <th scope="col" className="col-1">
                --
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allIngenieurPedagogiques.map((ingenieur_pedagogique, idx) => (
              <tr key={idx}>
                <Link
                  to={`/ingenieur_pedagogique/${ingenieur_pedagogique.code_IP}`}
                >
                  <td className="col-2">{ingenieur_pedagogique.nom_ing}</td>
                </Link>
                <td className="col-1">{ingenieur_pedagogique.prenom_ing}</td>
                <td className="col-2">{ingenieur_pedagogique.email_ing}</td>
                <td className="col-2">{ingenieur_pedagogique.tel_ing}</td>
                <td className="col-1">{ingenieur_pedagogique.salaire_ing}</td>
                <td className="col-2">
                  {ingenieur_pedagogique.specialite_ing
                    ? ingenieur_pedagogique.specialite_ing
                    : "--"}
                </td>
                <td className="col-1">
                  <center>
                    <Link
                      to={`/ingenieur_pedagogique/${ingenieur_pedagogique.code_IP}`}
                    >
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="mr-1 pointer"
                        color="yellow"
                      />
                    </Link>
                  </center>
                </td>
                <td className="col-1">
                  <center>
                    <WarningModal
                      dlt={dlt}
                      code={parseInt(ingenieur_pedagogique.code_IP)}
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
