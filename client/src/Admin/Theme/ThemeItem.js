import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_THEME } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditTheme from "./EditTheme";
function ThemeItem(props) {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_THEME, {
    variables: { code_theme: id },
  });
  const [edit, setEdit] = useState(false);
  const theme = data ? data.theme : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log('props',props);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">About: {theme && theme.code_theme}</h5>
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
          <Item theme={theme} />
        ) : (
          <EditTheme
            className=""
            id="navbarSupportedContent"
            theme={theme}
            refetch={refetch}
            reftechAllTheme={props}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default ThemeItem;
