import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AddValidation from "./AddValidation";
import { GET_VALIDATIONS } from "../GraphQl/Query";
import { DELETE_VALIDATION } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";

import Item from "./Item";
function Validation() {
  const { loading, error, data, refetch } = useQuery(GET_VALIDATIONS);
  const [deleteValidation, res] = useMutation(DELETE_VALIDATION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteValidation({
        variables: {
          code_val: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };

  return (
    <div className="mt-11">
      <AddValidation refetch={refetch} />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                date
              </th>
              <th scope="col" className="col-1">
                Decision Support
              </th>
              <th scope="col" className="col-1">
                Décision Formateur
              </th>
              <th scope="col" className="col-2">
                I.P
              </th>
              <th scope="col" className="col-1">
                Formateur
              </th>

              <th scope="col" className="col-2">
                Support
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allValidations &&
              data.allValidations.map((validation, idx) => (
                <tr key={idx}>
                  <Link to={`/validationn/${validation.code_val}`}>
                    <th scope="row" className="col-1">
                      {validation.date}
                    </th>
                  </Link>

                  <td className="col-1">{validation.decision_r}</td>

                  <td className="col-1">{validation.decision_f}</td>

                  <td className="col-2">
                    {validation.ingenieurpedagogique.nom_ing}
                  </td>
                  <td className="col-1">{validation.formateur.nom_f}</td>
                  <td className="col-2">{validation.support.titre_support}</td>

                  <td className="col-1">
                    <center>
                      <WarningModal dlt={dlt} code={validation.code_val} />
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
export default Validation;
