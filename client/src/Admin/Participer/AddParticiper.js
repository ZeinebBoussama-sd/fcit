import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_PARTICIPER } from "../GraphQl/Mutation";
import { GET_SESSIONS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";
import { ParticiperSchema } from "../../Utils/Validation";
import { DropzoneField } from "../component/DropzoneField";

function AddParticiper(props) {
  const GetSessions = useQuery(GET_SESSIONS);
  const [AddParticipant, res] = useMutation(ADD_PARTICIPER);
  //console.log(GetClients);
  const code_participant = props.code_participant;
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
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
                        ParticipantCodeParticipant: parseInt(code_participant),
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
                          Rapport Eval
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.rapport_eval
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="rapport_eval"
                          type="file"
                          component={DropzoneField}
                        />
                        {errors.rapport_eval && touched.rapport_eval ? (
                          <div>{errors.rapport_eval}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Note QCM" className="col-form-label">
                          Note QCM
                        </label>

                        <Field
                          placeholder="xxxx,xxx"
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
                        <label htmlFor="date_eval" className="col-form-label">
                          date_eval
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.date_eval
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="date_eval"
                          type="date"
                        />
                        {errors.date_eval && touched.date_eval ? (
                          <div>{errors.date_eval}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Session">Session:</label>

                        <Field
                          component="select"
                          className={
                            hasChanged
                              ? errors.SessionCISession
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          className="form-control"
                          name="SessionCISession"
                          multiple={false}
                        >
                          <option value="">---Choose Session----</option>
                          {GetSessions.data &&
                            GetSessions.data.allSessions.map((session) => {
                              return (
                                <option
                                  key={session.code_client}
                                  value={session.code_client}
                                >
                                  {session.nom_client}
                                </option>
                              );
                            })}
                        </Field>
                        {errors.SessionCISession && touched.SessionCISession ? (
                          <div className="text-danger">
                            {errors.SessionCISession}
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
