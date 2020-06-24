import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { GET_THEMES } from "../GraphQl/Query";
import { UPDATE_FORMATION } from "../GraphQl/Mutation";
import { FormationSchema } from "../../Utils/Validation";
import deepEqual from "lodash.isequal";
function EditFormation(props) {
  const [updateFormation] = useMutation(UPDATE_FORMATION);
  const { loading, error, data } = useQuery(GET_THEMES);
  const formation = props.formation ? props.formation : null;
  const id = props.id ? props.id : null;
  const close = () => {
    props.setEdit(false);
  };
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
          ThemeCodeTheme:
            formation && formation.theme && formation.theme.code_theme,
        }}
        validationSchema={FormationSchema}
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
            initialValues,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          const hasChanged = !deepEqual(values, initialValues);
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="code_formation" className="col-form-label">
                  Code formation:
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.code_formation
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="code_formation"
                  type="text"
                />
                {errors.code_formation && touched.code_formation ? (
                  <div>{errors.code_formation}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="intitule" className="col-form-label">
                  Intitule:
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.intitule
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="intitule"
                  type="text"
                />
                {errors.intitule && touched.intitule ? (
                  <div>{errors.intitule}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Durée" className="col-form-label">
                  Durée:
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.duree_formation
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="duree_formation"
                  type="number"
                />
                {errors.duree_formation && touched.duree_formation ? (
                  <div>{errors.duree_formation}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="N_Min_Part" className="col-form-label">
                  N.Min.Part:
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.nbre_min_part
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="nbre_min_part"
                  type="number"
                />
                {errors.nbre_min_part && touched.nbre_min_part ? (
                  <div>{errors.nbre_min_part}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Description" className="col-form-label">
                  Description:
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.description_formation
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="description_formation"
                  component={"textarea"}
                  type="text"
                />
                {errors.description_formation &&
                touched.description_formation ? (
                  <div>{errors.description_formation}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Categorie" className="col-form-label">
                  Categorie:
                </label>

                <Field
                  component="select"
                  className="form-control"
                  name="catagorie_formation"
                  onChange={handleChange}
                  value={values.catagorie_formation}
                >
                  <option value="">----choose Categorie----</option>
                  <option>Best</option>
                  <option>Classique</option>
                </Field>
                {errors.catagorie_formation && touched.catagorie_formation ? (
                  <div>{errors.catagorie_formation}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Prix" className="col-form-label">
                  Prix:
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.prix_formation
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="prix_formation"
                  type="number"
                />
                {errors.prix_formation && touched.prix_formation ? (
                  <div>{errors.prix_formation}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Prerequis" className="col-form-label">
                  Prerequis:
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.prerequis
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="prerequis"
                  type="text"
                />
                {errors.prerequis && touched.prerequis ? (
                  <div>{errors.prerequis}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Participant" className="col-form-label">
                  Participant:
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.participant
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="participant"
                  type="text"
                />
                {errors.participant && touched.participant ? (
                  <div>{errors.participant}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Theme">Theme</label>
                <Field
                  component="select"
                  className={
                    hasChanged
                      ? errors.ThemeCodeTheme
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="ThemeCodeTheme"
                  multiple={false}
                >
                  <option value="">---choose theme----</option>
                  {data.allThemes.map((theme) => {
                    return (
                      <option key={theme.code_theme} value={theme.code_theme}>
                        {theme.nom_theme}
                      </option>
                    );
                  })}
                </Field>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => {
                    close();
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Update
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
