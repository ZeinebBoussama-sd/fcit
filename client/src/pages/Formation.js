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
      <div className="accordion minHeight-7 mt-8" id="accordionExample">
        {alltheme.map((t, idx) => {
          return (
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapseOne${idx}`}
                    aria-expanded="true"
                    aria-controls={`collapseOne${idx}`}
                  >
                    {t.nom_theme}
                  </button>
                </h2>
              </div>

              <div
                id={`collapseOne${idx}`}
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                {t.formation.map((f) => {
                  return (
                    <div className="card-body">
                      <Link to={`/formation/${f.CI_formation}`}>
                        {f.intitule}
                      </Link>{" "}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Formation;
