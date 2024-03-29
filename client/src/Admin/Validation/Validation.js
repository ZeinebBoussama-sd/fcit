import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AddValidation from "./AddValidation";
import { GET_VALIDATIONS } from "../GraphQl/Query";
import { DELETE_VALIDATION } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";
import moment from "moment";
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
  console.log(data);
  return (
    <div className="mt-11">
      <AddValidation refetch={refetch} />
      <div className="table-responsive">
        <table className="mt-2 table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-2">
                date
              </th>
              <th scope="col" className="col-2">
                Decision Support
              </th>
              <th scope="col" className="col-3">
                Décision Formateur
              </th>
              <th scope="col" className="col-1">
                I.P
              </th>
              <th scope="col" className="col-1">
                Formateur
              </th>
              <th scope="col" className="col-2">
                Support
              </th>
              <th scope="col" className="col-1">
                <center>#</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allValidations &&
              data.allValidations.map((validation, idx) => (
                <tr key={idx}>
                  <th scope="row" className="col-2">
                    <Link to={`/validation/${validation.code_val}`}>
                      {moment(validation.date).format("YYYY_MM_DD")}
                    </Link>
                  </th>

                  <td className="col-2">
                    {validation.decision_r ? "Refus" : "Accord"}
                  </td>

                  <td className="col-3">
                    {validation.decision_f ? "Refus" : "Accord"}
                  </td>

                  <td className="col-1">
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
