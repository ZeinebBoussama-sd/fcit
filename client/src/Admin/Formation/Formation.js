import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AddFormation from "./AddFormation";
import { GET_FORMATIONS } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { DELETE_FORMATION } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";

import Item from "./Item";
function Formation() {
  const { loading, error, data, refetch } = useQuery(GET_FORMATIONS);
  const [deleteFormation, res] = useMutation(DELETE_FORMATION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteFormation({
        variables: {
          CI_formation: parseInt(values),
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };

  return (
    <div className="mt-11">
      <AddFormation refetch={refetch} />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                code
              </th>
              <th scope="col" className="col-3">
                Intitule
              </th>
              <th scope="col" className="col-1">
                Durée
              </th>
              <th scope="col" className="col-2">
                Catagorie
              </th>
              <th scope="col" className="col-1">
                Prix
              </th>

              <th scope="col" className="col-2">
                Theme
              </th>
              <th scope="col" className="col-1">
                #
              </th>
              <th scope="col" className="col-1 center">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allFormations &&
              data.allFormations.map((formation, idx) => (
                <tr key={idx}>
                  <th scope="row" className="col-1">
                    {formation.code_formation}
                  </th>
                  <Link to={`/formation/${formation.CI_formation}`}>
                    <td className="col-3">{formation.intitule}</td>
                  </Link>
                  <td className="col-1">{formation.duree_formation}</td>
                  <td className="col-2">{formation.catagorie_formation}</td>
                  <td className="col-1">{formation.prix_formation}</td>
                  <td className="col-2">
                    {formation.theme ? formation.theme.nom_theme : "--"}
                  </td>

                  <td className="col-1">
                    <center>
                      <Link to={`/formation/${formation.CI_formation}`}>
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
                      <WarningModal dlt={dlt} code={formation.CI_formation} />
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
export default Formation;
