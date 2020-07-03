import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AddTheme from "./AddTheme";
import { GET_THEMES } from "../GraphQl/Query";
import { DELETE_THEME } from "../GraphQl/Mutation";
import { Link } from "react-router-dom";
import WarningModal from "../component/WarningModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import ThemeItem from "./ThemeItem";
function Theme() {
  const { loading, error, data, refetch } = useQuery(GET_THEMES);
  const [deleteTheme, res] = useMutation(DELETE_THEME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  const dlt = async (values) => {
    try {
      await deleteTheme({
        variables: {
          code_theme: values,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  return (
    <div className="mt-11">
      <AddTheme refetch={refetch} />
      <div className="table-responsive">
        <table className="table table-hover table-fixed">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                Code
              </th>
              <th scope="col" className="col-9">
                Nom
              </th>
              <th scope="col" className="col-1">
                --
              </th>
              <th scope="col" className="col-1">
                --
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allThemes.map((theme, idx) => (
              <tr key={idx}>
                <td scope="row" className="col-1">
                  <Link to to={`/theme/${theme.code_theme}`}>
                    {theme.code_theme}
                  </Link>
                </td>
                <td className="col-9">
                  {theme.nom_theme ? theme.nom_theme : "--"}
                </td>
                <td className="col-1">
                  <center>
                    <Link to to={`/theme/${theme.code_theme}`}>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="mr-1 pointer"
                        color="yellow"
                      />
                    </Link>
                  </center>
                </td>

                <td className="col-1">
                  <center>
                    <WarningModal dlt={dlt} code={theme.code_theme} />
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
