import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_PARTICIPER } from "../GraphQl/Mutation";
import { GET_PARTICIPANTS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { ParticiperSchema } from "../../Utils/Validation";

function AddParticiper(props) {
  const GetClients = useQuery(GET_PARTICIPANTS);
  const [AddParticipant, res] = useMutation(ADD_PARTICIPER);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Ajouter Participer
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
                Ajouter Participer
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
                  rapport_eval: undefined,
                  note_QCM: undefined,
                  date_eval: undefined,
                  ParticipantCodeParticipant: undefined,
                  SessionCISession: undefined,
                }}
                validationSchema={ParticiperSchema}
                onSubmit={async (values) => {
                  try {
                    await AddParticipant({
                      variables: {
                        rapport_eval: values.rapport_eval,
                        note_QCM: values.note_QCM,
                        date_eval: values.date_eval,
                        ParticipantCodeParticipant: parseInt(
                          values.ParticipantCodeParticipant
                        ),
                        SessionCISession: parseInt(values.SessionCISession),
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
                        <label htmlFor="Note QCM" className="col-form-label">
                          Note QCM
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.note_QCM
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="note_QCM"
                          type="number"
                        />
                        {errors.note_QCM && touched.note_QCM ? (
                          <div>{errors.note_QCM}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prenom" className="col-form-label">
                          Prenom
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.prenom_participant
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="prenom_participant"
                          type="text"
                        />
                        {errors.prenom_participant &&
                        touched.prenom_participant ? (
                          <div>{errors.prenom_participant}</div>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <label htmlFor="Tel" className="col-form-label">
                          CIN
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.carte_identite
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="carte_identite"
                          type="text"
                        />
                        {errors.carte_identite && touched.carte_identite ? (
                          <div>{errors.carte_identite}</div>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <label htmlFor="Client">Client:</label>

                        <Field
                          component="select"
                          className={
                            hasChanged
                              ? errors.ClientCodeClient
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          className="form-control"
                          name="ClientCodeClient"
                          multiple={false}
                        >
                          <option value="">---Choose Client----</option>
                          {GetClients.data &&
                            GetClients.data.allClients.map((client) => {
                              return (
                                <option
                                  key={client.code_client}
                                  value={client.code_client}
                                >
                                  {client.nom_client}
                                </option>
                              );
                            })}
                        </Field>
                        {errors.FormationCIFormation &&
                        touched.FormationCIFormation ? (
                          <div className="text-danger">
                            {errors.FormationCIFormation}
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
                          Ajouter Participant
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
export default AddParticiper;
