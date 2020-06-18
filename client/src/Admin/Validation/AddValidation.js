import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import {
  GET_SUPPORT_MINI,
  GET_INGENIEUR_PEDAGOGIQUES,
  GET_FORMATEURS,
} from "../GraphQl/Query";
import { ADD_VALIDATION } from "../GraphQl/Mutation";
import { ValidationSchema } from "../../Utils/Validation";
import deepEqual from "lodash.isequal";

function AddValidation(props) {
  const [active, setactive] = useState(false);

  const [addValidation] = useMutation(ADD_VALIDATION);
  const Getingenieurpedagogique = useQuery(GET_INGENIEUR_PEDAGOGIQUES);
  const GetFormateurs = useQuery(GET_FORMATEURS);
  const GetSupportMini = useQuery(GET_SUPPORT_MINI);

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
        Add Validation
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
                Add Validation
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
                enableReinitialize
                initialValues={{
                  date_val: undefined,
                  decision_r: undefined,
                  decision_f: undefined,
                  remarque: undefined,
                  IngenieurPedagogiqueCodeIP: undefined,
                  FormateurCodeFormateur: undefined,
                  SupportCodeSupport: undefined,
                }}
                validationSchema={ValidationSchema}
                onSubmit={async (values) => {
                  try {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    await addValidation({
                      variables: {
                        date_val: values.date_val,
                        decision_r: values.decision_r,
                        decision_f: values.decision_f,
                        remarque: values.remarque,
                        IngenieurPedagogiqueCodeIP:
                          values.IngenieurPedagogiqueCodeIP,
                        FormateurCodeFormateur: values.FormateurCodeFormateur,
                        SupportCodeSupport: values.SupportCodeSupport,
                      },
                    });
                    alert(JSON.stringify(values, null, 2));
                    setactive(false);
                  } catch (e) {
                    console.log("e", e);
                  }
                  props.refetch();
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
                    initialValues,
                    handleSubmit,
                    handleReset,
                  } = props;
                  const hasChanged = !deepEqual(values, initialValues);

                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="date_val" className="col-form-label">
                          Date:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.date_val
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="date_val"
                          type="date"
                        />
                        {errors.date_val && touched.date_val ? (
                          <div>{errors.date_val}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="decision_r" className="col-form-label">
                          Décision(Support) :
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.decision_r
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="decision_r"
                          type="boolean"
                        />
                        {errors.decision_r && touched.decision_r ? (
                          <div>{errors.decision_r}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="decision_f" className="col-form-label">
                          Décision(Formateur):
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.decision_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="decision_f"
                          type="number"
                        />
                        {errors.decision_f && touched.decision_f ? (
                          <div>{errors.decision_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="remarque" className="col-form-label">
                          remarque:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.remarque
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="remarque"
                          type="number"
                        />
                        {errors.remarque && touched.remarque ? (
                          <div>{errors.remarque}</div>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <label htmlFor="Formateur">Formateur</label>
                        <Field
                          component="select"
                          className={
                            hasChanged
                              ? errors.FormateurCodeFormateur
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="FormateurCodeFormateur"
                          multiple={false}
                        >
                          <option value="">---choose formateur----</option>
                          {GetFormateurs.data &&
                            GetFormateurs.data.allFormateurs.map(
                              (formateur) => {
                                return (
                                  <option
                                    key={formateur.code_formateur}
                                    value={formateur.code_formateur}
                                  >
                                    {formateur.nom_f}
                                  </option>
                                );
                              }
                            )}
                        </Field>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Ingenieur Pedagogique">
                          Ingenieur Pédagogique:
                        </label>
                        <Field
                          component="select"
                          className={
                            hasChanged
                              ? errors.IngenieurPedagogiqueCodeIP
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="IngenieurPedagogiqueCodeIP"
                          multiple={false}
                        >
                          <option value="">---choose ingenieur---</option>
                          {Getingenieurpedagogique.date &&
                            Getingenieurpedagogique.data.allIngenieurPedagogiques.map(
                              (ingenieurpedagogique) => {
                                return (
                                  <option
                                    key={ingenieurpedagogique.code_IP}
                                    value={ingenieurpedagogique.code_IP}
                                  >
                                    {ingenieurpedagogique.nom_ing}
                                  </option>
                                );
                              }
                            )}
                        </Field>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Support ">Support:</label>
                        <Field
                          component="select"
                          className={
                            hasChanged
                              ? errors.SupportCodeSupport
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="SupportCodeSupport"
                          multiple={false}
                        >
                          <option value="">---choose support---</option>
                          {GetSupportMini.data &&
                            GetSupportMini.data.allSupportss.map((support) => {
                              return (
                                <option
                                  key={support.code_support}
                                  value={support.code_support}
                                >
                                  {support.titre_support}
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
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          Add validation
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
export default AddValidation;
