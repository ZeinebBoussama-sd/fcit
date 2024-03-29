import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_PARTICIPANT } from "../GraphQl/Mutation";
import { GET_CLIENTS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { ParticipantSchema } from "../../Utils/Validation";

function EditParticipant(props) {
  const GetClients = useQuery(GET_CLIENTS);
  const [updateParticipant, res] = useMutation(UPDATE_PARTICIPANT);
  const participant = props.participant ? props.participant : null;

  const close = () => {
    props.setEdit(false);
  };
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        enableReinitialize
        initialValues={{
          nom_participant: participant && participant.nom_participant,
          prenom_participant: participant && participant.prenom_participant,
          carte_identite: participant && participant.carte_identite,
          ClientCodeClient: participant && participant.client.code_client,
        }}
        validationSchema={ParticipantSchema}
        onSubmit={async (values) => {
          try {
            await updateParticipant({
              variables: {
                code_participant: parseInt(props.id),
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
            initialValues,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          const hasChanged = !deepEqual(values, initialValues);
          console.log(props);
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
                  <div>{errors.nom_participant}</div>
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
                {errors.prenom_participant && touched.prenom_participant ? (
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
                <label htmlFor="Formation">Client:</label>

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
                {errors.ClientCodeClient && touched.ClientCodeClient ? (
                  <div className="text-danger">{errors.ClientCodeClient}</div>
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
                  Fermer
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
export default EditParticipant;
