import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_PARTICIPANT } from "../GraphQl/Mutation";
import { GET_CLIENTS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { ParticipantSchema } from "../../Utils/Validation";

function AddParticipant(props) {
  const GetClients = useQuery(GET_CLIENTS);
  const [AddParticipant, res] = useMutation(ADD_PARTICIPANT);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Ajouter Participant
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
                Ajouter Participant
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
                  code_participant: undefined,
                  nom_participant: undefined,
                  prenom_participant: undefined,
                  carte_identite: undefined,
                  ClientCodeClient: undefined,
                }}
                validationSchema={ParticipantSchema}
                onSubmit={async (values) => {
                  try {
                    await AddParticipant({
                      variables: {
                        code_participant: values.code_participant,
                        nom_participant: values.nom_participant,
                        prenom_participant: values.prenom_participant,
                        carte_identite: parseInt(values.carte_identite),
                        ClientCodeClient: values.ClientCodeClient,
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
                        <label htmlFor="Nom" className="col-form-label">
                          Nom
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.nom_participant
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="nom_participant"
                          type="text"
                        />
                        {errors.nom_participant && touched.nom_participant ? (
                          <div className="text-danger">
                            {errors.nom_participant}
                          </div>
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
                          <div className="text-danger">
                            {errors.prenom_participant}
                          </div>
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
                          <div className="text-danger">
                            {errors.carte_identite}
                          </div>
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
export default AddParticipant;
