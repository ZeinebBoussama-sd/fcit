import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_INGENIEUR_PEDAGOGIQUE } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditIngenieurPedadogique from "./EditIngenieurPedagogique";
function IngenieurPedagogiueItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(
    GET_INGENIEUR_PEDAGOGIQUE,
    {
      variables: { code_IP: id },
    }
  );
  const [edit, setEdit] = useState(false);
  const ingenieurpedagogique = data ? data.ingenieurpedagogique : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(ingenieurpedagogique);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">
            About: {ingenieurpedagogique && ingenieurpedagogique.prenom_ing}
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
          <Item ingenieurpedagogique={ingenieurpedagogique} />
        ) : (
          <EditIngenieurPedadogique
            className=""
            id="navbarSupportedContent"
            ingenieurpedagogique={ingenieurpedagogique}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default IngenieurPedagogiueItem;
