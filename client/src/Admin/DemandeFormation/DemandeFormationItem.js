import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_DEMANDE_FORMATION } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditDemandeFormation from "./EditDemandeFormation";
function DemandeFormationItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_DEMANDE_FORMATION, {
    variables: { code_demande: id },
  });
  const [edit, setEdit] = useState(false);
  const demandeformation = data ? data.demandeformation : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">
            About: {demandeformation && demandeformation.code_demande}
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
          <Item demandeformation={demandeformation} />
        ) : (
          <EditDemandeFormation
            className=""
            id="navbarSupportedContent"
            demandeformation={demandeformation}
            refetch={refetch}
            close={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default DemandeFormationItem;
