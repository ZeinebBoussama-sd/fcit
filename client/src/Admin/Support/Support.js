import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { GetSupport } from "../GraphQl/Query";
import AddSupport from "./AddSupport";
import { DELETE_SUPPORT } from "../GraphQl/Mutation";

function Support() {
  const { loading, error, data, refetch } = useQuery(GetSupport);
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
              <th scope="col" className="col-3">
                Date
              </th>
              <th scope="col" className="col-2">
                Validation
              </th>
              <th scope="col" className="col-2">
                Fichiers
              </th>
              <th scope="col" className="col-1">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allSupports.map((support, idx) => (
              <tr key={idx}>
                <td className="col-4">{support.titre_support}</td>
                <td className="col-3">{support.date_support}</td>
                <td className="col-2">{support.validation.length}</td>
                <td className="col-2">{support.fichier.length}</td>
                <td className="col-1">
                  <center>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="mr-1 pointer"
                      color="cornflowerblue"
                      onClick={() => dlt(parseInt(support.code_support))}
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
