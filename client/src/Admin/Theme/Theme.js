import React from "react";
import { useQuery } from "@apollo/react-hooks";
import AddTheme from "./AddTheme";
import { GetTheme } from "../GraphQl/Query";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
function Theme() {
  const { loading, error, data } = useQuery(GetTheme);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div className="mt-11">
      <AddTheme />
      <div className="table-responsive">
        <table className="table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                Code
              </th>
              <th scope="col" className="col-10">
                Nom
              </th>
              <th scope="col" className="col-1">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allThemes.map((theme, idx) => (
              <tr key={idx}>
                <th scope="row" className="col-1">
                  {theme.code_theme}
                </th>
                <td className="col-10">
                  {theme.nom_theme ? theme.nom_theme : "--"}
                </td>
                <td className="col-1">
                  <center>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="mr-1"
                      color="cornflowerblue"
                    />
                  </center>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Theme;
