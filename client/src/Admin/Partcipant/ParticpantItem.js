import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_PARTICIPANT } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditParticipant from "./EditParticipant";
function ParticipantItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_PARTICIPANT, {
    variables: { code_participant: id },
  });
  const [edit, setEdit] = useState(false);
  const participant = data ? data.participant : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(participant);

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
          <Item participant={participant} />
        ) : (
          <EditParticipant
            className=""
            id="navbarSupportedContent"
            participant={participant}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default ParticipantItem;
