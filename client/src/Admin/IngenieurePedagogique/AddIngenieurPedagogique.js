import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_INGENIEURPEDAGOGIQUE } from "../GraphQl/Mutation";
import deepEqual from "lodash.isequal";
import { IngenieurPedagogiqueSchema } from "../../Utils/Validation";
import { DropzoneField } from "../component/DropzoneField";
function AddIngenieurPedagogique(props) {
  const [AddIngenieurPedagogique, res] = useMutation(ADD_INGENIEURPEDAGOGIQUE);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Add Ingenieur
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
                Add Ingenieur
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
                  nom_ing: "",
                  prenom_ing: "",
                  cv_ing: [],
                  email_ing: undefined,
                  tel_ing: undefined,
                  NSS_ing: undefined,
                  salaire_ing: undefined,
                  specialite_ing: undefined,
                  adr_ing: undefined,
                  password: undefined,
                  role: "",
                }}
                validationSchema={IngenieurPedagogiqueSchema}
                onSubmit={async (values) => {
                  try {
                    await AddIngenieurPedagogique({
                      variables: {
                        nom_ing: values.nom_ing,
                        prenom_ing: values.prenom_ing,
                        cv_ing: values.cv_ing,
                        email_ing: values.email_ing,
                        tel_ing: values.tel_ing,
                        NSS_ing: values.NSS_ing,
                        salaire_ing: values.salaire_ing,
                        password: values.password,
                        role: values.role,
                        specialite_ing: values.specialite_ing,
                        adr_ing: values.adr_ing,
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
                        <label htmlFor="Nom Ing" className="col-form-label">
                          Nom Ing:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.nom_ing
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="nom_ing"
                          type="text"
                        />
                        {errors.nom_ing && touched.nom_ing ? (
                          <div className="text-danger">{errors.nom_ing}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prenom Ing" className="col-form-label">
                          Prenom Ing
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.prenom_ing
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="prenom_ing"
                          type="text"
                        />
                        {errors.prenom_ing && touched.prenom_ing ? (
                          <div className="text-danger">{errors.prenom_ing}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Cv Ing" className="col-form-label">
                          Cv Ing
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.cv_ing
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="cv_ing"
                          type="file"
                          component={DropzoneField}
                        />
                        {errors.cv_ing && touched.cv_ing ? (
                          <div className="text-danger">{errors.cv_ing}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Email Ing" className="col-form-label">
                          Email Ing
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.email_ing
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="email_ing"
                          type="text"
                        />
                        {errors.email_ing && touched.email_ing ? (
                          <div className="text-danger">{errors.email_ing}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className="col-form-label">
                          Password
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.password
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="password"
                          type="password"
                        />
                        {errors.password && touched.password ? (
                          <div className="text-danger">{errors.password}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="Telephone Ing"
                          className="col-form-label"
                        >
                          Telephone Ing
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.tel_ing
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="tel_ing"
                          type="text"
                        />
                        {errors.tel_ing && touched.tel_ing ? (
                          <div className="text-danger">{errors.tel_ing}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="NSS Ing" className="col-form-label">
                          NSS Ing
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.NSS_ing
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="NSS_ing"
                          type="number"
                        />
                        {errors.NSS_ing && touched.NSS_ing ? (
                          <div className="text-danger">{errors.NSS_ing}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Salaire Ing" className="col-form-label">
                          Salaire Ing
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.salaire_ing
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="salaire_ing"
                          type="number"
                        />
                        {errors.salaire_ing && touched.salaire_ing ? (
                          <div className="text-danger">
                            {errors.salaire_ing}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="Specialité Ing"
                          className="col-form-label"
                        >
                          Specialité Ing
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.specialite_ing
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="specialite_ing"
                          type="text"
                        />
                        {errors.specialite_ing && touched.specialite_ing ? (
                          <div className="text-danger">
                            {errors.specialite_ing}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Adresse Ing" className="col-form-label">
                          Adresse Ing
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.adr_ing
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="adr_ing"
                          type="text"
                        />
                        {errors.adr_ing && touched.adr_ing ? (
                          <div className="text-danger">{errors.adr_ing}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="role" className="col-form-label">
                          Role:
                        </label>
                        <Field
                          component="select"
                          className="form-control"
                          name="role"
                          onChange={handleChange}
                          value={values.role}
                        >
                          <option value="">----choose roles----</option>
                          <option>Admin</option>
                          <option>Administrateur</option>
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
                          Add Ingenieur
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
export default AddIngenieurPedagogique;
