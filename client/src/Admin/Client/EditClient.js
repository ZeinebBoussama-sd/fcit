import React from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { counterList } from "../../Utils/Enums";
import { UPDATE_CLIENT } from "../GraphQl/Mutation";

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
        onSubmit={async (values) => {
          try {
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
                <label htmlFor="code" className="col-form-label">
                  Code Client:
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="code_client"
                  onChange={handleChange}
                  value={values.code_client}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nom" className="col-form-label">
                  Nom Client:
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="nom_client"
                  onChange={handleChange}
                  value={values.nom_client}
                />
              </div>

              {client && client.personne && (
                <div className="form-group">
                  <label htmlFor="personne" className="col-form-label">
                    CIN:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="personne"
                    onChange={handleChange}
                    value={values.personne}
                  />
                </div>
              )}

              {client && client.societe && (
                <>
                  <div className="form-group">
                    <label htmlFor="societe" className="col-form-label">
                      Matricule Fiscale:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="societe"
                      onChange={handleChange}
                      value={values.societe}
                    />
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
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email_client"
                  onChange={handleChange}
                  value={values.email_client}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Tel" className="col-form-label">
                  Telephone:
                </label>
                <input
                  required
                  type="tel"
                  className="form-control"
                  id="tel_client"
                  onChange={handleChange}
                  value={values.tel_client}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Adresse" className="col-form-label">
                  Adresse:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="adr_client"
                  onChange={handleChange}
                  value={values.adr_client}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pays_client">Paye</label>
                <select
                  className="form-control"
                  onChange={handleChange}
                  value={values.pays_client}
                  id="pays_client"
                >
                  <option value="">---choose country----</option>
                  {counterList.map((country, idx) => {
                    return (
                      <option key={idx} value={country}>
                        {country}
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
