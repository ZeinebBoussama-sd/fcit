import React from "react";
import { useQuery } from "@apollo/react-hooks";
import AddTheme from "./AddTheme";
import { GetTheme } from "../GraphQl/Query";
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
                #
              </th>
              <th scope="col" className="col-11">
                Nom{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allThemes.map((theme, idx) => (
              <tr key={idx}>
                <th scope="row" className="col-1">
                  {" "}
                  {idx + 1}
                </th>
                <td className="col-11">{theme.nom_theme}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Theme;
