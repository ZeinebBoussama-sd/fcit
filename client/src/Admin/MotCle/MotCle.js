import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_MOTCLES } from "../GraphQl/Query";
import AddMotCle from "./AddMotCle";
import { DELETE_MOTCLE } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
function MotCle() {
  const { loading, error, data, refetch } = useQuery(GET_MOTCLES);
  const [deleteMotCle, res] = useMutation(DELETE_MOTCLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteMotCle({
        variables: {
          motcle: values,
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
      <AddMotCle refetch={refetch} />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-3">
                Mot Clé
              </th>
              <th scope="col" className="col-7">
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
            {data.allMotCles &&
              data.allMotCles.map((motcle, idx) => (
                <tr key={idx}>
                  <td className="col-3">
                    <Link to={`/motcle/${motcle.motcle}`}>{motcle.motcle}</Link>
                  </td>
                  <td className="col-7">
                    {motcle.formation ? motcle.formation.intitule : "--"}
                  </td>

                  <td className="col-1">
                    <center>
                      <Link to={`/motcle/${motcle.motcle}`}>
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
                      <WarningModal dlt={dlt} code={motcle.motcle} />
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
export default MotCle;
