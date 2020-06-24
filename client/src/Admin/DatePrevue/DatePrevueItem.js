import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_DATE_PREVUE } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditDatePrevue from "./EditDatePrevue";
function DatePrevueItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_DATE_PREVUE, {
    variables: { date_prev: id },
  });
  const [edit, setEdit] = useState(false);
  const dateprevue = data ? data.dateprevue : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(dateprevue);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">
            About: {dateprevue && dateprevue.date_prev}
          </h5>
          <span className="col-0 text-right">
            <FontAwesomeIcon
              icon={faCog}
              className="ml-5 mt-2 pointer"
              onClick={() => action()}
              data-toggle="collapse"
              data-target="#settingContent"
            />
          </span>
        </div>
        {!edit ? (
          <Item dateprevue={dateprevue} />
        ) : (
          <EditDatePrevue
            className=""
            id="navbarSupportedContent"
            dateprevue={dateprevue}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default DatePrevueItem;
