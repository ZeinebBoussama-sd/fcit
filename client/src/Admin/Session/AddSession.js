import React from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik } from "formik";
import { GetClient, GetFormation, GetFormateur } from "../GraphQl/Query";

function AddSession() {
  const ADD_SESSION = gql`
    mutation create_session(
      $type_sess: String
      $date_deb_sess: Date
      $lieu_sess: String
      $prix_session: Float
      $ClientId: Int
      $FormationId: Int
      $FormateurId: Int
    ) {
      createSession(
        type_sess: $type_sess
        date_deb_sess: $date_deb_sess
        lieu_sess: $lieu_sess
        prix_session: $prix_session
        ClientId: $ClientId
        FormationId: $FormationId
        FormateurId: $FormateurId
      ) {
        type_sess
        date_deb_sess
        lieu_sess
        prix_session
        ClientId
        FormateurId
        FormationId
      }
    }
  `;

  const [AddSession] = useMutation(ADD_SESSION);
  const GetClients = useQuery(GetClient);
  const GetFormations = useQuery(GetFormation);
  const GetFormateurs = useQuery(GetFormateur);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mb-2"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Add Session
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
                  Add Session
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
                  type_sess: undefined,
                  date_deb_sess: undefined,
                  lieu_sess: undefined,
                  prix_session: undefined,
                  ClientId: undefined,
                  FormationId: undefined,
                  FormateurId: undefined,
                }}
                onSubmit={async (values) => {
                  try {
                    // new Promise((resolve) => setTimeout(resolve, 500));
                    await AddSession({
                      variables: {
                        type_sess: values.type_sess,
                        date_deb_sess: values.date_deb_sess,
                        lieu_sess: values.lieu_sess,
                        prix_session: values.prix_session,
                        ClientId: values.ClientId
                          ? parseInt(values.ClientId)
                          : null,
                        FormationId: values.FormationId
                          ? parseInt(values.FormationId)
                          : null,
                        FormateurId: values.FormateurId
                          ? parseInt(values.FormateurId)
                          : null,
                      },
                    });
                  } catch (e) {
                    console.error(e.message);
                  }
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
                        <label htmlFor="Type" className="col-form-label">
                          Type:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="type_sess"
                          onChange={handleChange}
                          value={values.type_sess}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Date Debut" className="col-form-label">
                          Date Debut:
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="date_deb_sess"
                          onChange={handleChange}
                          value={values.date_deb_sess}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Lieux" className="col-form-label">
                          Lieux:
                        </label>
                        <input
                          type="texte"
                          className="form-control"
                          id="lieu_sess"
                          onChange={handleChange}
                          value={values.lieu_sess}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prix" className="col-form-label">
                          Prix:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="prix_session"
                          onChange={handleChange}
                          value={values.prix_session}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Client">Client:</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.ClientId}
                          id="ClientId"
                        >
                          <option value="">---choose Client----</option>
                          {GetClients.data &&
                            GetClients.data.allClients.map((client) => {
                              return (
                                <option key={client.id} value={client.id}>
                                  {client.nom_client}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation">Formation:</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.FormationId}
                          id="FormationId"
                        >
                          <option value="">---Choose Formation----</option>
                          {GetFormations.data &&
                            GetFormations.data.allFormations.map(
                              (formation) => {
                                return (
                                  <option
                                    key={formation.id}
                                    value={formation.id}
                                  >
                                    {formation.intitule}
                                  </option>
                                );
                              }
                            )}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formateur">Formateur:</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.FormateurId}
                          id="FormateurId"
                        >
                          <option value="">---Choose Formateur----</option>
                          {GetFormateurs.data &&
                            GetFormateurs.data.allFormateurs.map(
                              (formateur) => {
                                return (
                                  <option
                                    key={formateur.id}
                                    value={formateur.id}
                                  >
                                    {formateur.nom_f}
                                  </option>
                                );
                              }
                            )}
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
                          Add Session
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
export default AddSession;
