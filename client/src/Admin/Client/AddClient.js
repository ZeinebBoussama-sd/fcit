import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_CLIENT } from "../GraphQl/Mutation";
import { counterList } from "../../Utils/Enums";
import deepEqual from "lodash.isequal";
import { ClientSchema } from "../../Utils/Validation";

function AddClient(props) {
  const [addClient, res] = useMutation(ADD_CLIENT);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mb-2"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Ajouter Client
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
              <div>
                <h5 className="modal-title" id="exampleModalLabel">
                  Ajouter Client
                </h5>
              </div>
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
                  code_client: "",
                  nom_client: "",
                  email_client: undefined,
                  tel_client: undefined,
                  adr_client: undefined,
                  pays_client: undefined,
                  cin_p: undefined,
                  mat_fisc_sc: "",
                  responsable: "",
                  PersonneId: undefined,
                  SocieteId: undefined,
                }}
                validationSchema={ClientSchema}
                onSubmit={async (values) => {
                  try {
                    new Promise((resolve) => setTimeout(resolve, 500));
                    await addClient({
                      variables: {
                        code_client: values.code_client,
                        nom_client: values.nom_client,
                        email_client: values.email_client,
                        tel_client: values.tel_client,
                        adr_client: values.adr_client,
                        pays_client: values.pays_client,
                        personne: values.cin_p ? values.cin_p : null,
                        societe: values.mat_fisc_sc,
                        responsable: values.responsable,
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
                        <label htmlFor="code_client" className="col-form-label">
                          Code Client:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.code_client
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="code_client"
                          type="text"
                        />
                        {errors.code_client && touched.code_client ? (
                          <div className="text-danger">
                            {errors.code_client}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="nom_client" className="col-form-label">
                          Nom Client:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.nom_client
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="nom_client"
                          type="text"
                        />
                        {errors.nom_client && touched.nom_client ? (
                          <div className="text-danger">{errors.nom_client}</div>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <label htmlFor="cin_p" className="col-form-label">
                          CIN:
                        </label>
                        <Field
                          disabled={values.mat_fisc_sc}
                          type="number"
                          className={
                            values.cin_p && hasChanged
                              ? errors.cin_p
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="cin_p"
                        />
                        {errors.cin_p && touched.cin_p ? (
                          <div className="text-danger">{errors.cin_p}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="mat_fisc_sc" className="col-form-label">
                          Matricule Fiscale:
                        </label>
                        <Field
                          disabled={values.cin_p}
                          type="text"
                          className={
                            values.mat_fisc_sc && hasChanged
                              ? errors.mat_fisc_sc
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="mat_fisc_sc"
                        />
                        {errors.mat_fisc_sc && touched.mat_fisc_sc ? (
                          <div className="text-danger">
                            {errors.mat_fisc_sc}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="responsable" className="col-form-label">
                          Responsable:
                        </label>
                        <Field
                          disabled={values.cin_p}
                          type="text"
                          className={"form-control"}
                          name="responsable"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="Email" className="col-form-label">
                          Email
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.email_client
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="email_client"
                          type="text"
                        />

                        {errors.email_client && touched.email_client ? (
                          <div className="text-danger">
                            {errors.email_client}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Tel" className="col-form-label">
                          Telephone:
                        </label>
                        <Field
                          type="tel"
                          className={
                            hasChanged
                              ? errors.tel_client
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="tel_client"
                        />
                        {errors.tel_client && touched.tel_client ? (
                          <div className="text-danger">{errors.tel_client}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Adresse" className="col-form-label">
                          Adresse:
                        </label>
                        <Field
                          type="text"
                          className={
                            hasChanged
                              ? errors.adr_client
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="adr_client"
                        />
                        {errors.adr_client && touched.adr_client ? (
                          <div className="text-danger">{errors.adr_client}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="pays_client">Paye</label>
                        <Field
                          component={"select"}
                          className={
                            hasChanged
                              ? errors.pays_client
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="pays_client"
                        >
                          <option value="">---choose country----</option>
                          {counterList.map((country, idx) => {
                            return (
                              <option key={idx} value={country}>
                                {country}
                              </option>
                            );
                          })}
                        </Field>
                        {errors.pays_client && touched.pays_client ? (
                          <div className="text-danger">
                            {errors.pays_client}
                          </div>
                        ) : null}
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
                          Add Client
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
export default AddClient;
