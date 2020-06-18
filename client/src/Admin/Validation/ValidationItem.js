import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_VALIDATION } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditValidation from "./EditValidation";
function ValidationItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_VALIDATION, {
    variables: { code_val: id },
  });
  const [edit, setEdit] = useState(false);
  const validation = data ? data.validation : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(validation);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
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
          <Item validation={validation} />
        ) : (
          <EditValidation
            className=""
            id="navbarSupportedContent"
            validation={validation}
            refetch={refetch}
            setEdit={setEdit}
            id={id}
          />
        )}
      </div>
    </div>
  );
}
export default ValidationItem;
