import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AddDatePrevue from "./AddDatePrevue";
import { GET_DATE_PREVUES } from "../GraphQl/Query";
import { DELETE_DATEPREVUE } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
function DatePrevue() {
  const { loading, error, data, refetch } = useQuery(GET_DATE_PREVUES);
  const [deleteDatePrevue, res] = useMutation(DELETE_DATEPREVUE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteDatePrevue({
        variables: {
          date_prev: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11">
      <AddDatePrevue refetch={refetch} />
      <div className="table-responsive">
        <table className="table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-10">
                Date
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
            {data.allDatePrevues.map((dateprevue, idx) => (
              <tr key={idx}>
                <td scope="row" className="col-10">
                  <Link to to={`/dateprevue/${dateprevue.date_prev}`}>
                    {dateprevue.date_prev}
                  </Link>
                </td>

                <td className="col-1">
                  <center>
                    <Link to to={`/dateprevue/${dateprevue.date_prev}`}>
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
                    <WarningModal dlt={dlt} code={dateprevue.date_prev} />
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
export default DatePrevue;
