import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik } from "formik";
import { GET_THEME } from "../GraphQl/Query";
import { UPDATE_FORMATION } from "../GraphQl/Mutation";

function EditFormation(props) {
  const [updateFormation] = useMutation(UPDATE_FORMATION);
  const { loading, error, data } = useQuery(GET_THEME);
  const formation = props.formation ? props.formation : null;
  const id = props.id ? props.id : null;
  console.log(data);

  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        initialValues={{
          CI_formation: id && parseInt(id),
          code_formation: formation && formation.code_formation,
          intitule: formation && formation.intitule,
          duree_formation: formation && formation.duree_formation,
          nbre_min_part: formation && formation.nbre_min_part,
          description_formation: formation && formation.description_formation,
          catagorie_formation: formation && formation.catagorie_formation,
          prix_formation: formation && formation.prix_formation,
          prerequis: formation && formation.prerequis,
          participant: formation && formation.participant,
          ThemeCodeTheme: formation && formation.theme.code_theme,
        }}
        onSubmit={async (values) => {
          try {
            debugger;
            await updateFormation({
              variables: {
                CI_formation: parseInt(values.CI_formation),
                code_formation: values.code_formation,
                intitule: values.intitule,
                duree_formation: values.duree_formation,
                nbre_min_part: values.nbre_min_part,
                description_formation: values.description_formation,
                catagorie_formation: values.catagorie_formation,
                prix_formation: values.prix_formation,
                prerequis: values.prerequis,
                participant: values.participant,
                ThemeCodeTheme: values.ThemeCodeTheme,
              },
            });
          } catch (e) {
            console.error("e", e);
          }
          props.refetch();
          props.setEdit(false);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="code_formation" className="col-form-label">
                  Code formation:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="code_formation"
                  onChange={handleChange}
                  value={values.code_formation}
                />
              </div>
              <div className="form-group">
                <label htmlFor="intitulee" className="col-form-label">
                  Intitule:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="intitule"
                  onChange={handleChange}
                  value={values.intitule}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Durée" className="col-form-label">
                  Durée:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="duree_formation"
                  onChange={handleChange}
                  value={values.duree_formation || ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="N.Min.Part" className="col-form-label">
                  N.Min.Part:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="nbre_min_part"
                  onChange={handleChange}
                  value={values.nbre_min_part || ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Description" className="col-form-label">
                  Description:
                </label>
                <textarea
                  rows="4"
                  type="text"
                  className="form-control"
                  id="description_formation"
                  onChange={handleChange}
                  value={values.description_formation || ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Catagorie" className="col-form-label">
                  Catagorie:
                </label>
                <select
                  className="form-control"
                  id="catagorie_formation"
                  onChange={handleChange}
                  value={values.catagorie_formation || ""}
                >
                  <option>Best</option>
                  <option>Classique</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Prix" className="col-form-label">
                  Prix:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="prix_formation"
                  onChange={handleChange}
                  value={values.prix_formation || ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Prerequis" className="col-form-label">
                  Prerequis:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="prerequis"
                  onChange={handleChange}
                  value={values.prerequis || ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Participant" className="col-form-label">
                  Participant:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="participant"
                  onChange={handleChange}
                  value={values.participant || ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Theme">Theme</label>
                <select
                  className="form-control"
                  onChange={handleChange}
                  value={values.ThemeCodeTheme}
                  id="ThemeCodeTheme"
                >
                  <option value="">---choose theme----</option>
                  {data &&
                    data.allThemes.map((theme) => {
                      return (
                        <option key={theme.code_theme} value={theme.code_theme}>
                          {theme.code_theme}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Update formation
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
export default EditFormation;
