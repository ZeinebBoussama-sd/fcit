import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_FORMATEUR } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditFormateur from "./EditFormateur";
function FormateurItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_FORMATEUR, {
    variables: { code_formateur: id },
  });
  const [edit, setEdit] = useState(false);
  const formateur = data ? data.formateur : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(formateur);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">About: {formateur && formateur.nom_f}</h5>
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
          <Item formateur={formateur} />
        ) : (
          <EditFormateur
            className=""
            id="navbarSupportedContent"
            formateur={formateur}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default FormateurItem;
