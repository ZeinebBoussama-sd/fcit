import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { GET_THEMES } from "../GraphQl/Query";
import { ADD_FORMATION } from "../GraphQl/Mutation";
import { FormationSchema } from "../../Utils/Validation";
import deepEqual from "lodash.isequal";

function AddFormation(props) {
  const [active, setactive] = useState(false);

  const [addFormation] = useMutation(ADD_FORMATION);
  const { loading, error, data } = useQuery(GET_THEMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
        onClick={() => setactive(true)}
      >
        Add Formation
      </button>

      <div
        className={`modal fade ${active ? "show" : ""}`}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-modal={`${active ? "true" : "false"}`}
        //aria-labelledby='exampleModalLabel'
        aria-hidden={`${active ? "false" : "true"}`}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Formation
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{
                  code_formation: "",
                  intitule: "",
                  duree_formation: undefined,
                  nbre_min_part: undefined,
                  description_formation: undefined,
                  catagorie_formation: undefined,
                  prix_formation: undefined,
                  prerequis: undefined,
                  participant: undefined,
                  ThemeCodeTheme: "",
                }}
                validationSchema={FormationSchema}
                onSubmit={async (values) => {
                  try {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    await addFormation({
                      variables: {
                        code_formation: values.code_formation,
                        intitule: values.intitule,
                        duree_formation: parseInt(values.duree_formation),
                        nbre_min_part: parseInt(values.nbre_min_part),
                        description_formation: values.description_formation,
                        catagorie_formation: values.catagorie_formation,
                        prix_formation: parseInt(values.prix_formation),
                        prerequis: values.prerequis,
                        participant: values.participant,
                        ThemeCodeTheme: values.ThemeCodeTheme,
                      },
                    });
                  } catch (e) {
                    console.log("e", e);
                  }
                  props.refetch();
                }}
                enableReinitialize={true}
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
                    initialValues,
                    handleSubmit,
                    handleReset,
                  } = props;
                  const hasChanged = !deepEqual(values, initialValues);

                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label
                          htmlFor="code_formation"
                          className="col-form-label"
                        >
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
                          <div className="text-danger">
                            {errors.code_formation}
                          </div>
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
                          <div className="text-danger">{errors.intitule}</div>
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
                          type="text"
                        />
                        {errors.duree_formation && touched.duree_formation ? (
                          <div className="text-danger">
                            {errors.duree_formation}
                          </div>
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
                          type="text"
                        />
                        {errors.nbre_min_part && touched.nbre_min_part ? (
                          <div className="text-danger">
                            {errors.nbre_min_part}
                          </div>
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
                          <div className="text-danger">
                            {errors.description_formation}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Categorie" className="col-form-label">
                          Categorie:
                        </label>
                        <Field
                          component="select"
                          className={
                            hasChanged
                              ? errors.catagorie_formation
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="catagorie_formation"
                          onChange={handleChange}
                          value={values.catagorie_formation}
                        >
                          <option value="">----choose Categorie----</option>
                          <option>Best</option>
                          <option>Classique</option>
                        </Field>
                        {errors.catagorie_formation &&
                        touched.catagorie_formation ? (
                          <div className="text-danger">
                            {errors.catagorie_formation}
                          </div>
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
                          type="text"
                        />
                        {errors.prix_formation && touched.prix_formation ? (
                          <div className="text-danger">
                            {errors.prix_formation}
                          </div>
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
                          <div className="text-danger">{errors.prerequis}</div>
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
                          <div className="text-danger">
                            {errors.participant}
                          </div>
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
                              <option
                                key={theme.code_theme}
                                value={theme.code_theme}
                              >
                                {theme.nom_theme}
                              </option>
                            );
                          })}
                        </Field>
                        {errors.ThemeCodeTheme && touched.ThemeCodeTheme ? (
                          <div className="text-danger">
                            {errors.ThemeCodeTheme}
                          </div>
                        ) : null}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          onClick={() => handleReset()}
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          Add formation
                        </button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddFormation;
