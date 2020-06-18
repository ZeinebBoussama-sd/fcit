import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_SESSION } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditSession from "./EditSession";
function SessionItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_SESSION, {
    variables: { CI_session: id },
  });
  const [edit, setEdit] = useState(false);
  const session = data ? data.session : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(session);
  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">
            About: {session && session.code_session}
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
          <Item session={session} />
        ) : (
          <EditSession
            className=""
            id="navbarSupportedContent"
            session={session}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default SessionItem;
