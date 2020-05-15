import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AddTheme from "./AddTheme";
function Theme() {
  const { loading, error, data } = useQuery(gql`
    {
      allThemes {
        id
        nom_theme
      }
    }
  `);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  return (
    <div className="mt-11 ">
      <AddTheme />
      <table className=" table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom </th>
          </tr>
        </thead>
        <tbody>
          {data.allThemes.map((theme, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{theme.nom_theme}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Theme;
