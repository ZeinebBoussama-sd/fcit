import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_SUPPORT } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditSupport from "./EditSupport";
function SupportItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_SUPPORT, {
    variables: { code_support: id },
  });
  const [edit, setEdit] = useState(false);
  const support = data ? data.support : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(support);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">
            About: {support && support.titre_support}
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
          <Item support={support} />
        ) : (
          <EditSupport
            className=""
            id={id}
            support={support}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default SupportItem;
