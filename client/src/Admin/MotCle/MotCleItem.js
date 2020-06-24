import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOTCLE } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditMotCle from "./EditMotCle";
function MotCleItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_MOTCLE, {
    variables: { motcle: id },
  });
  const [edit, setEdit] = useState(false);
  const motcle = data ? data.motcle : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">About: {motcle && motcle.motcle}</h5>
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
          <Item motcle={motcle} />
        ) : (
          <EditMotCle
            className=""
            id={id}
            motcle={motcle}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default MotCleItem;
