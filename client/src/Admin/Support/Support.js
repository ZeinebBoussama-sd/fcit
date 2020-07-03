import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { GET_SUPPORTS } from "../GraphQl/Query";
import AddSupport from "./AddSupport";
import { DELETE_SUPPORT } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
import moment from "moment";

function Support() {
  const { loading, error, data, refetch } = useQuery(GET_SUPPORTS);
  const [DeleteSupport, rest] = useMutation(DELETE_SUPPORT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await DeleteSupport({
        variables: {
          code_support: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11 ">
      <AddSupport refetch={refetch} />
      <div className="table-responsive">
        <table className=" table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-4">
                Titre
              </th>
              <th scope="col" className="col-2">
                Date
              </th>
              <th scope="col" className="col-2">
                Validation
              </th>
              <th scope="col" className="col-2">
                Fichiers
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
            {data.allSupports.map((support, idx) => (
              <tr key={idx}>
                <td className="col-4">
                  <Link to to={`/support/${support.code_support}`}>
                    {support.titre_support}
                  </Link>
                </td>
                <td className="col-2">
                  {moment(support.date_support).format("yyyy-MM-DD")}
                </td>
                <td className="col-2">{support.validation.length}</td>
                <td className="col-2">{support.fichier.length}</td>
                <td className="col-1">
                  <center>
                    <Link to to={`/support/${support.code_support}`}>
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
                      code={parseInt(support.code_support)}
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
export default Support;
