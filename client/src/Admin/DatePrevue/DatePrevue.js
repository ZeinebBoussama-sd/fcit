import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AddDatePrevue from "./AddDatePrevue";
import { GET_DATE_PREVUES } from "../GraphQl/Query";
import { DELETE_DATEPREVUE } from "../GraphQl/Mutation";
import WarningModal from "../component/WarningModal";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
function DatePrevue() {
  const { loading, error, data, refetch } = useQuery(GET_DATE_PREVUES);
  const [deleteDatePrevue, res] = useMutation(DELETE_DATEPREVUE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    const date_p = moment(values).format("YYYY-MM-DD");
    try {
      await deleteDatePrevue({
        variables: {
          date_prev: date_p,
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
              <th scope="col" className="col-11">
                Date
              </th>
              <th scope="col" className="col-1">
                <center>--</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allDatePrevues.map((dateprevue, idx) => (
              <tr key={idx}>
                <td scope="row" className="col-11">
                  {moment(dateprevue.date_prev).format("YYYY-MM-DD")}
                </td>
                <td className="col-1">
                  <center>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="mr-1 pointer"
                      color="red"
                      onClick={() => dlt(dateprevue.date_prev)}
                    />
                    {/* <WarningModal
                      dlt={dlt}
                      code={dateprevue.date_prev}
                      k={idx}
                    /> */}
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
