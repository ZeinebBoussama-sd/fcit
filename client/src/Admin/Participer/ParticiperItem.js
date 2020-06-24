import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_PARTICIPANT, GET_PARTICIPER } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditParticiper from "./EditParticiper";
function ParticiperItem() {
  let { id } = useParams();
  const { loading, error, data, refetch } = useQuery(
    GET_PARTICIPER,
    GET_PARTICIPANT,
    {
      variables: { code_participant: id },
    }
  );
  const [edit, setEdit] = useState(false);
  const participer = data ? data.participer : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(participer);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">
            About: {participant && participant.nom_participant}
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
          <Item participer={participer} />
        ) : (
          <EditParticiper
            className=""
            id={id}
            participant={participant}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default ParticiperItem;
v;
