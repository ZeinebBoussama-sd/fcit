import React from "react";
import { Formik, Field, FieldArray } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { counterList } from "../../Utils/Enums";
import { UPDATE_CLIENT } from "../GraphQl/Mutation";
import deepEqual from "lodash.isequal";
import { ClientSchema } from "../../Utils/Validation";

function EditClient(props) {
  const client = props.client ? props.client : null;
  const [updateClient] = useMutation(UPDATE_CLIENT);
  const close = () => {
    props.setEdit(false);
  };
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        initialValues={{
          code_client: client && client.code_client,
          nom_client: client && client.nom_client,
          email_client: client && client.email_client,
          tel_client: client && client.tel_client,
          adr_client: client && client.adr_client,
          pays_client: client && client.pays_client,
          personne:
            client && client.personne && parseInt(client.personne.cin_p),
          societe: client && client.societe && client.societe.mat_fisc_sc,
          responsable: client && client.societe && client.societe.responsable,
          ClientCodeClient: client.societe
            ? client.societe
            : client.personne.cin_p,
        }}
        //validationSchema={ClientSchema}
        onSubmit={async (values) => {
          try {
            debugger;
            // new Promise((resolve) => setTimeout(resolve, 500));
            await updateClient({
              variables: {
                code_client: values.code_client,
                nom_client: values.nom_client,
                email_client: values.email_client,
                tel_client: values.tel_client,
                adr_client: values.adr_client,
                pays_client: values.pays_client,
                personne: values.personne ? parseInt(values.personne) : null,
                societe: values.societe ? values.societe : null,
                responsable: values.responsable,
              },
            });
          } catch (e) {
            console.error(e.message);
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
            initialValues,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          const hasChanged = !deepEqual(values, initialValues);
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="code" className="col-form-label">
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
                  disabled
                />
                {errors.code_client && touched.code_client ? (
                  <div className="text-danger">{errors.code_client}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="nom" className="col-form-label">
                  Nom Client:
                </label>
                <Field
                  type="text"
                  className={
                    hasChanged
                      ? errors.nom_client
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="nom_client"
                />
                {errors.nom_client && touched.nom_client ? (
                  <div className="text-danger">{errors.nom_client}</div>
                ) : null}
              </div>

              {client && client.personne && (
                <div className="form-group">
                  <label htmlFor="personne" className="col-form-label">
                    CIN:
                  </label>
                  <Field
                    disabled={values.societe}
                    type="number"
                    className={
                      values.personne && hasChanged
                        ? errors.personne
                          ? "form-control is-invalid"
                          : "form-control is-valid"
                        : "form-control text-input"
                    }
                    name="personne"
                  />
                  {errors.personne && touched.personne ? (
                    <div className="text-danger">{errors.personne}</div>
                  ) : null}
                </div>
              )}

              {client && client.societe && (
                <>
                  <div className="form-group">
                    <label htmlFor="societe" className="col-form-label">
                      Matricule Fiscale:
                    </label>
                    <Field
                      disabled={values.personne}
                      type="text"
                      className={
                        values.societe && hasChanged
                          ? errors.societe
                            ? "form-control is-invalid"
                            : "form-control is-valid"
                          : "form-control text-input"
                      }
                      name="societe"
                    />
                    {errors.societe && touched.societe ? (
                      <div className="text-danger">{errors.societe}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="responsable" className="col-form-label">
                      Responsable:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="responsable"
                      onChange={handleChange}
                      value={values.responsable}
                    />
                  </div>
                </>
              )}
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
                  <div className="text-danger">{errors.email_client}</div>
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
                  <div className="text-danger">{errors.pays_client}</div>
                ) : null}
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
export default EditClient;
