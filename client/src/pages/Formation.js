import React from "react";
import Footer from "../component/Footer";
import { useQuery } from "@apollo/react-hooks";
import { GET_THEME_FORMATION } from "../Admin/GraphQl/Query";
import { Link } from "react-router-dom";

function Formation() {
  const { loading, error, data, refetch } = useQuery(GET_THEME_FORMATION);

  console.log("data", data);
  const alltheme = data ? data.allThemes : [];
  return (
    <div>
      <div className="container mt-9 height-9 ">
        {alltheme.map((t) => {
          return (
            <div>
              <b>{t.nom_theme}</b>
              <ul>
                {t.formation.map((f) => {
                  return (
                    <li>
                      <Link to={`/formation/${f.CI_formation}`}>
                        {f.intitule}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Formation;
