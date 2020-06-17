import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_DEMANDE } from "../GraphQl/Mutation";
import { GET_FORMATIONS, GET_CLIENTS, GET_DEMANDEURS } from "../GraphQl/Query";

import deepEqual from "lodash.isequal";
import { DemandeSchema } from "../../Utils/Validation";
function AddDemande(props) {
  const [addDemande, res] = useMutation(ADD_DEMANDE);
  const GetFormation = useQuery(GET_FORMATIONS);
  const GetClient = useQuery(GET_CLIENTS);
  const GetDemandeur = useQuery(GET_DEMANDEURS);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Add Demande
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
                Add Demande
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
                  date_demande: undefined,
                  type_demande: undefined,
                  etat_demande: undefined,
                  prix_prevu: undefined,
                  lieu_prevu: undefined,
                  duree_prevu: undefined,
                  mode_demande: undefined,
                  hr_deb_j_prev: undefined,
                  hr_fin_j_prev: undefined,
                  hr_j_prev: undefined,
                  ClientCodeClient: "",
                  FormationCIFormation: undefined,
                  DemandeurCodeDemandeur: undefined,
                }}
                validationSchema={DemandeSchema}
                onSubmit={async (values) => {
                  try {
                    await addDemande({
                      variables: {
                        date_demande: values.date_demande,
                        type_demande: values.type_demande,
                        etat_demande: values.etat_demande,
                        prix_prevu: values.prix_prevu,
                        lieu_prevu: values.lieu_prevu,
                        duree_prevu: values.duree_prevu,
                        mode_demande: values.mode_demande,
                        hr_deb_j_prev: values.hr_deb_j_prev,
                        hr_fin_j_prev: values.hr_fin_j_prev,
                        hr_j_prev: values.hr_j_prev,
                        ClientCodeClient: values.ClientCodeClient
                          ? values.ClientCodeClient
                          : "",
                        FormationCIFormation: values.FormationCIFormation
                          ? parseInt(values.FormationCIFormation)
                          : null,
                        DemandeurCodeDemandeur: values.DemandeurCodeDemandeur
                          ? parseInt(values.DemandeurCodeDemandeur)
                          : null,
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
                        <label htmlFor="Date D" className="col-form-label">
                          Date D:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.date_demande
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          className="form-control"
                          name="date_demande"
                          type="date"
                        />
                        {errors.date_demande && touched.date_demande ? (
                          <div>{errors.date_demande}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="type" className="col-form-label">
                          Type:
                        </label>

                        <Field
                          component="select"
                          className="form-control"
                          name="type_demande"
                          onChange={handleChange}
                          value={values.type_demande}
                        >
                          <option value="">----Choose Type----</option>
                          <option>Inter</option>
                          <option>Intra</option>
                          <option>Séminaire</option>
                        </Field>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Etat" className="col-form-label">
                          Etat:
                        </label>

                        <Field
                          component="select"
                          className="form-control"
                          name="etat_demande"
                          onChange={handleChange}
                          value={values.etat_demande}
                        >
                          <option value="">----choose Etat----</option>
                          <option>Refusée</option>
                          <option>En cours</option>
                          <option>Validée</option>
                        </Field>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prix" className="col-form-label">
                          Prix:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.prix_prevu
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="prix_prevu"
                          type="number"
                        />
                        {errors.prix_prevu && touched.prix_prevu ? (
                          <div>{errors.prix_prevu}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Lieu" className="col-form-label">
                          Lieu:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.lieu_prevu
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="lieu_prevu"
                          type="text"
                        />
                        {errors.lieu_prevu && touched.lieu_prevu ? (
                          <div>{errors.lieu_prevu}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Duree" className="col-form-label">
                          Duree:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.duree_prevu
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="duree_prevu"
                          type="number"
                        />
                        {errors.duree_prevu && touched.duree_prevu ? (
                          <div>{errors.duree_prevu}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Mode" className="col-form-label">
                          Mode:
                        </label>

                        <Field
                          component="select"
                          className="form-control"
                          name="mode_demande"
                          onChange={handleChange}
                          value={values.mode_demande}
                        >
                          <option value="">----choose Mode----</option>
                          <option>Présentielle</option>
                          <option>En Ligne</option>
                        </Field>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Heure Debut" className="col-form-label">
                          Heure Debut:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.hr_deb_j_prev
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="hr_deb_j_prev"
                          type="text"
                        />
                        {errors.hr_deb_j_prev && touched.hr_deb_j_prev ? (
                          <div>{errors.hr_deb_j_prev}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Heure Fin" className="col-form-label">
                          Heure Fin:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.hr_fin_j_prev
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="hr_fin_j_prev"
                          type="text"
                        />
                        {errors.hr_fin_j_prev && touched.hr_fin_j_prev ? (
                          <div>{errors.hr_fin_j_prev}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="Nb Heures par jour"
                          className="col-form-label"
                        >
                          Nb Heures par jour:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.hr_j_prev
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="hr_j_prev"
                          type="text"
                        />
                        {errors.hr_j_prev && touched.hr_j_prev ? (
                          <div>{errors.hr_j_prev}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation">Client:</label>

                        <Field
                          component="select"
                          className="form-control"
                          name="ClientCodeClient"
                          onChange={handleChange}
                          value={values.ClientCodeClient}
                        >
                          <option value="">---Choose Client--</option>
                          {GetClient.data &&
                            GetClient.data.allClients.map((client) => {
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
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation">Formation:</label>

                        <Field
                          component="select"
                          className="form-control"
                          name="FormationCIFormation"
                          onChange={handleChange}
                          value={values.FormationCIFormation}
                        >
                          <option value="">---Choose Formation----</option>
                          {GetFormation.data &&
                            GetFormation.data.allFormations.map((formation) => {
                              return (
                                <option
                                  key={formation.CI_formation}
                                  value={formation.CI_formation}
                                >
                                  {formation.intitule}
                                </option>
                              );
                            })}
                        </Field>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation">Demandeur:</label>

                        <Field
                          component="select"
                          className="form-control"
                          name="DemandeurCodeDemandeur"
                          onChange={handleChange}
                          value={values.DemandeurCodeDemandeur}
                        >
                          <option value="">---Choose Demandeur----</option>
                          {GetDemandeur.data &&
                            GetDemandeur.data.allDemandeurs.map((demandeur) => {
                              return (
                                <option
                                  key={demandeur.code_demandeur}
                                  value={demandeur.code_demandeur}
                                >
                                  {demandeur.nom_demandeur}
                                </option>
                              );
                            })}
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
                          Add Demandeur
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
export default AddDemande;
