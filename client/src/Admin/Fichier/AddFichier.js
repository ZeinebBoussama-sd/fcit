import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_FICHIER } from "../GraphQl/Mutation";
import { GET_SUPPORT_MINI } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { FichierSchema } from "../../Utils/Validation";

function AddFichier(props) {
  const GetSupportMini = useQuery(GET_SUPPORT_MINI);
  const [AddFichier, res] = useMutation(ADD_FICHIER);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Ajouter Fichier
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ajouter Fichier
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
                  code_fichier: undefined,
                  nom_fichier: undefined,
                  type_fichier: undefined,
                  taille_max: undefined,
                  url_fichier: undefined,
                  nature_support: undefined,
                  SupportCodeSupport: undefined,
                }}
                validationSchema={FichierSchema}
                onSubmit={async (values) => {
                  try {
                    await AddFichier({
                      variables: {
                        code_fichier: values.code_fichierr,
                        nom_fichier: values.nom_fichier,
                        type_fichier: values.type_fichier,
                        taille_max: values.taille_max,
                        url_fichier: values.url_fichier,
                        nature_support: values.nature_support,
                        SupportCodeSupport: values.SupportCodeSupport,
                      },
                    });
                  } catch (e) {
                    console.error(e.message);
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
                        <label htmlFor="Titre" className="col-form-label">
                          Titre:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.titre_fichier
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="titre_fichier"
                          type="text"
                        />
                        {errors.titre_fichier && touched.titre_fichier ? (
                          <div>{errors.titre_fichier}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Type" className="col-form-label">
                          Type:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.type_fichier
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="type_fichier"
                          type="text"
                        />
                        {errors.type_fichier && touched.type_fichier ? (
                          <div>{errors.type_fichier}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Taille Max" className="col-form-label">
                          Taille Max
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.taille_max
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="taille_max"
                          type="number"
                        />
                        {errors.taille_max && touched.taille_max ? (
                          <div>{errors.taille_max}</div>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <label htmlFor="URL" className="col-form-label">
                          URL:
                        </label>

                        <Field
                          type="text"
                          className={
                            hasChanged
                              ? errors.url_fichier
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="url_fichier"
                        />
                        {errors.url_fichier && touched.url_fichier ? (
                          <div className="text-danger">
                            {errors.url_fichier}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="Nature Support"
                          className="col-form-label"
                        >
                          Nature Support
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.nature_support
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="nature_support"
                          type="text"
                        />
                        {errors.nature_support && touched.nature_support ? (
                          <div>{errors.nature_support}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Support">Support:</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.SupportCodeSupport}
                          id="SupportCodeSupport"
                        >
                          <option value="">---Choose Support--</option>
                          {GetSupportMini.data &&
                            GetSupportMini.data.allSupports.map((support) => {
                              return (
                                <option
                                  key={support.code_support}
                                  value={support.code_support}
                                >
                                  {support.titre_support}
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
                          Fermer
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          Ajouter Fichier
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
export default AddFichier;
