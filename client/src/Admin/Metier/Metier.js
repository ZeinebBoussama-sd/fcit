import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_METIERS } from "../GraphQl/Query";
import AddMetier from "./AddMetier";
import { DELETE_METIER } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
function Metier() {
  const { loading, error, data, refetch } = useQuery(GET_METIERS);
  const [deleteMetier, res] = useMutation(DELETE_METIER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteMetier({
        variables: {
          code_metier: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  console.log(data);

  return (
    <div className="mt-11">
      <AddMetier refetch={refetch} />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-2">
                Code:
              </th>
              <th scope="col" className="col-4">
                Intitule
              </th>
              <th scope="col" className="col-4">
                Formation
              </th>
              <th scope="col" className="col-1">
                -
              </th>
              <th scope="col" className="col-1">
                -
              </th>
            </tr>
          </thead>
          <tbody className="overflow-auto height-9">
            {data.allMetiers &&
              data.allMetiers.map((metier, idx) => (
                <tr key={idx}>
                  <td className="col-2">
                    <Link to={`/metier/${metier.code_metier}`}>
                      {metier.code_metier}
                    </Link>
                  </td>
                  <td className="col-4">{metier.intitule_metier}</td>
                  <td className="col-4">
                    {metier.formation ? metier.formation.intitule : "--"}
                  </td>
                  <td className="col-1">
                    <center>
                      <Link to={`/metier/${metier.code_metier}`}>
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
                      <WarningModal dlt={dlt} code={metier.code_metier} />
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
export default Metier;
