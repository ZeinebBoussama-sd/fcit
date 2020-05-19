import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Formik } from "formik";

function AddSession() {
  const ADD_SESSION = gql`
    mutation create_session(
      $type_sess: String
      $date_deb_sess: Date
      $lieu_sess: String
      $prix_session: Float
      $client: String
      $formation: String
      $formateur: String
      $support: String
    ) {
      createSession(
        type_sess: $type_sess
        date_deb_sess: $date_deb_sess
        lieu_sess: $lieu_sess
        prix_session: $prix_session
        client: $client
        formation: $formation
        formateur: $formateur
        support: $support
      ) {
        type_sess
        date_deb_sess
        lieu_sess
        prix_session
        client {
          nom_client
        }
        formation {
          intitule
        }
        formateur {
          nom_f
        }
        support {
          titre_support
        }
      }
    }
  `;

  const [
    AddSession,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_SESSION);

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
                  client: undefined,
                  formation: undefined,
                  formateur: undefined,
                  support: undefined,
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
                        client: values.nom_client,
                        formation: values.intitule,
                        formateur: values.nom_f,
                        support: values.titre_support,
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
                        <label htmlFor="Client" className="col-form-label">
                          Client:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nom_client"
                          onChange={handleChange}
                          value={values.nom_client}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation" className="col-form-label">
                          Formation:
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
                        <label htmlFor="Formateur" className="col-form-label">
                          Formateur:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nom_f"
                          onChange={handleChange}
                          value={values.nom_f}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Support" className="col-form-label">
                          Support:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=" titre_support"
                          onChange={handleChange}
                          value={values.titre_support}
                        />
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
