import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik } from "formik";
import {
  GetFormateur,
  GET_SUPPORT_MINI,
  GET_CLIENT,
  GET_FORMATION,
} from "../GraphQl/Query";
import { ADD_SESSION } from "../GraphQl/Mutation";

function AddSession() {
  const [AddSession] = useMutation(ADD_SESSION);
  const GetClients = useQuery(GET_CLIENT);
  const GetFormations = useQuery(GET_FORMATION);
  const GetFormateurs = useQuery(GetFormateur);
  const GetSupportMini = useQuery(GET_SUPPORT_MINI);

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
                  code_session: "",
                  mode_session: undefined,
                  duree_sess: undefined,
                  hr_deb_j: undefined,
                  hr_fin_j: undefined,
                  hr_j_session: undefined,
                  honoraire_sess: undefined,
                  frais_sejour: undefined,
                  frais_transport: undefined,
                  perdiem: undefined,
                  autres_frais: undefined,
                  note_eval_formateur: undefined,
                  type_sess: undefined,
                  date_deb_sess: undefined,
                  lieu_sess: undefined,
                  prix_session: undefined,
                  ClientCodeClient: "",
                  FormationCIFormation: undefined,
                  FormateurCodeFormateur: "",
                  SupportCodeSupport: undefined,
                }}
                onSubmit={async (values) => {
                  try {
                    await AddSession({
                      variables: {
                        code_session: values.code_session,
                        mode_session: values.mode_session,
                        duree_sess: values.duree_sess,
                        hr_deb_j: values.hr_deb_j,
                        hr_fin_j: values.hr_fin_j,
                        hr_j_session: values.hr_j_session,
                        honoraire_sess: values.honoraire_sess,
                        frais_sejour: values.frais_sejour,
                        frais_transport: values.frais_transport,
                        perdiem: values.perdiem,
                        autres_frais: values.autres_frais,
                        note_eval_formateur: values.note_eval_formateur,
                        type_sess: values.type_sess,
                        date_deb_sess: values.date_deb_sess,
                        lieu_sess: values.lieu_sess,
                        prix_session: values.prix_session,
                        ClientCodeClient: values.ClientCodeClient
                          ? values.ClientCodeClient
                          : "",
                        FormationCIFormation: values.FormationCIFormation
                          ? parseInt(values.FormationCIFormation)
                          : null,
                        FormateurCodeFormateur: values.FormateurCodeFormateur
                          ? values.FormateurCodeFormateur
                          : "",
                        SupportCodeSupport: values.SupportCodeSupport
                          ? parseInt(values.SupportCodeSupport)
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
                        <label htmlFor="Code" className="col-form-label">
                          Code:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="code_session"
                          onChange={handleChange}
                          value={values.code_session}
                        />
                      </div>
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
                        <label htmlFor="Mode" className="col-form-label">
                          Mode:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mode_session"
                          onChange={handleChange}
                          value={values.mode_session}
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
                        <label htmlFor="Duree" className="col-form-label">
                          Duree:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="duree_sess"
                          onChange={handleChange}
                          value={values.duree_sess}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="hr_deb_j" className="col-form-label">
                          hr_deb_j:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="hr_deb_j"
                          onChange={handleChange}
                          value={values.hr_deb_j}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="hr_fin_j" className="col-form-label">
                          hr_fin_j:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="hr_fin_j"
                          onChange={handleChange}
                          value={values.hr_fin_j}
                        />{" "}
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="hr_j_session"
                          className="col-form-label"
                        >
                          hr_j_session:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="hr_j_session"
                          onChange={handleChange}
                          value={values.hr_j_session}
                        />{" "}
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
                        <label
                          htmlFor="honoraire_sess"
                          className="col-form-label"
                        >
                          honoraire_sess:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="honoraire_sess"
                          onChange={handleChange}
                          value={values.honoraire_sess}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="frais_sejour"
                          className="col-form-label"
                        >
                          frais_sejour:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="frais_sejour"
                          onChange={handleChange}
                          value={values.frais_sejour}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="frais_transport"
                          className="col-form-label"
                        >
                          frais_transport:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="frais_transport"
                          onChange={handleChange}
                          value={values.frais_transport}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="perdiem" className="col-form-label">
                          perdiem:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="perdiem"
                          onChange={handleChange}
                          value={values.perdiem}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="autres_frais"
                          className="col-form-label"
                        >
                          autres_frais:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="autres_frais"
                          onChange={handleChange}
                          value={values.autres_frais}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="note_eval_formateur"
                          className="col-form-label"
                        >
                          note_eval_formateur:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="note_eval_formateur"
                          onChange={handleChange}
                          value={values.note_eval_formateur}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Client">Client:</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.ClientId}
                          id="ClientCodeClient"
                        >
                          <option value="">---choose Client----</option>
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
                          {GetFormations.data &&
                            GetFormations.data.allFormations.map(
                              (formation) => {
                                return (
                                  <option
                                    key={formation.CI_formation}
                                    value={formation.CI_formation}
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
                          value={values.FormateurCodeFormateur}
                          id="FormateurCodeFormateur"
                        >
                          <option value="">---Choose Formateur----</option>
                          {GetFormateurs.data &&
                            GetFormateurs.data.allFormateurs.map(
                              (formateur) => {
                                return (
                                  <option
                                    key={formateur.code_formateur}
                                    value={formateur.code_formateur}
                                  >
                                    {formateur.nom_f}
                                  </option>
                                );
                              }
                            )}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation">Support:</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.SupportCodeSupport}
                          id="SupportCodeSupport"
                        >
                          <option value="">---Choose Support--</option>
                          {GetSupportMini.data &&
                            GetSupportMini.data.allSupports.map((support) => {
                              return (
                                <option
                                  key={support.code_support}
                                  value={support.code_support}
                                >
                                  {support.titre_support}
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
