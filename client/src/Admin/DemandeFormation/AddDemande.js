import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik } from "formik";
import { ADD_DEMANDE } from "../GraphQl/Mutation";
import { GET_FORMATION, GET_CLIENT, GET_DEMANDEURS } from "../GraphQl/Query";
function AddDemande() {
  const [addDemande, res] = useMutation(ADD_DEMANDE);
  const GetFormation = useQuery(GET_FORMATION);
  const GetClient = useQuery(GET_CLIENT);
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
                onSubmit={async (values) => {
                  try {
                    debugger;
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
                        <label htmlFor="Date D" className="col-form-label">
                          Date D:
                        </label>
                        <input
                          required
                          type="date"
                          className="form-control"
                          id="date_demande"
                          onChange={handleChange}
                          value={values.date_demande}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="type" className="col-form-label">
                          Type:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="type_demande"
                          onChange={handleChange}
                          value={values.type_demande}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Etat" className="col-form-label">
                          Etat:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="etat_demande"
                          onChange={handleChange}
                          value={values.etat_demande}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prix" className="col-form-label">
                          Prix:
                        </label>
                        <input
                          required
                          type="number"
                          className="form-control"
                          id="prix_prevu"
                          onChange={handleChange}
                          value={values.prix_prevu}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Lieu" className="col-form-label">
                          Lieu:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="lieu_prevu"
                          onChange={handleChange}
                          value={values.lieu_prevu}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Duree" className="col-form-label">
                          Duree:
                        </label>
                        <input
                          required
                          type="number"
                          className="form-control"
                          id="duree_prevu"
                          onChange={handleChange}
                          value={values.duree_prevu}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Mode" className="col-form-label">
                          Mode:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="mode_demande"
                          onChange={handleChange}
                          value={values.mode_demande}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Heure Debut" className="col-form-label">
                          Heure Debut:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="hr_deb_j_prev"
                          onChange={handleChange}
                          value={values.hr_deb_j_prev}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Heure Fin" className="col-form-label">
                          Heure Fin:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="hr_fin_j_prev"
                          onChange={handleChange}
                          value={values.hr_fin_j_prev}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="Nb Heures par jour"
                          className="col-form-label"
                        >
                          Nb Heures par jour:
                        </label>
                        <input
                          required
                          type="number"
                          className="form-control"
                          id="hr_j_prev"
                          onChange={handleChange}
                          value={values.hr_j_prev}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation">Client:</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.ClientCodeClient}
                          id="ClientCodeClient"
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
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation">Formation:</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.FormationCIFormation}
                          id="FormationCIFormation"
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
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation">Demandeur:</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.DemandeurCodeDemandeur}
                          id="DemandeurCodeDemandeur"
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
