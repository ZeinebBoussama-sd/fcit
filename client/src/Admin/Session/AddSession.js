import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import {
  GET_FORMATEUR_FORMATIONS,
  GET_SUPPORT_MINI,
  GET_CLIENTS,
  GET_FORMATIONSOPTIONS,
} from "../GraphQl/Query";
import { ADD_SESSION } from "../GraphQl/Mutation";
import { SessionSchema } from "../../Utils/Validation";
import deepEqual from "lodash.isequal";
import moment from "moment";

function AddSession(props) {
  const [CIF, setCIF] = useState();
  const GetFormateurFormation = useQuery(GET_FORMATEUR_FORMATIONS, {
    variables: {
      FormationCIFormation: parseInt(CIF),
    },
  });
  const [AddSession] = useMutation(ADD_SESSION);
  const GetClients = useQuery(GET_CLIENTS);
  const GetFormations = useQuery(GET_FORMATIONSOPTIONS);
  const GetSupportMini = useQuery(GET_SUPPORT_MINI);
  const [subOptions, setSubOption] = useState(undefined);

  const sub = (e) => {
    setSubOption(e.currentTarget.selectedIndex - 1);
  };

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
                  date_deb_sess: "",
                  lieu_sess: undefined,
                  prix_session: undefined,
                  ClientCodeClient: "",
                  FormationCIFormation: undefined,
                  FormateurCodeFormateur: "",
                  SupportCodeSupport: undefined,
                  valid: 1,
                }}
                //validationSchema={SessionSchema}
                onSubmit={async (values) => {
                  try {
                    await AddSession({
                      variables: {
                        code_session: values.code_session,
                        mode_session: values.mode_session,
                        duree_sess: values.duree_sess,
                        hr_deb_j: values.hr_deb_j,
                        hr_fin_j: values.hr_fin_j,
                        hr_j_session: parseInt(values.hr_j_session),
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
                  const filter_valid =
                    GetFormateurFormation.data &&
                    GetFormateurFormation.data.formateur_formation.filter(
                      (f) => {
                        if (values.valid !== "") {
                          return (
                            f.validation_f === Boolean(parseInt(values.valid))
                          );
                        }
                      }
                    );
                  const allFormateurs =
                    GetFormations.data &&
                    GetFormations.data.allFormations[subOptions] &&
                    GetFormations.data.allFormations[subOptions].formateur;
                  const f_list = [];
                  allFormateurs &&
                    allFormateurs.map((a) => {
                      const foundDate = a.session.filter(
                        (f) =>
                          moment(f.date_deb_sess).format("YYYY-MM-DD") ===
                          moment(values.date_deb_sess).format("YYYY-MM-DD")
                      );
                      debugger;
                      if (foundDate.length === 0) {
                        for (let i = 0; i < filter_valid.length; i++) {
                          if (
                            filter_valid[i].FormateurCodeFormateur ===
                            a.code_formateur
                          )
                            f_list.push(a);
                        }
                      }
                    });
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="Code" className="col-form-label">
                          Code Session:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.code_session
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="code_session"
                          type="text"
                        />
                        {errors.code_session && touched.code_session ? (
                          <div>{errors.code_session}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Type" className="col-form-label">
                          Type:
                        </label>

                        <Field
                          component="select"
                          className="form-control"
                          name="type_sess"
                          onChange={handleChange}
                          value={values.type_sess}
                        >
                          <option value="">----choose Type----</option>
                          <option>Inter</option>
                          <option>Intra</option>
                          <option>Séminaire</option>
                        </Field>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Mode" className="col-form-label">
                          Mode:
                        </label>

                        <Field
                          component="select"
                          className="form-control"
                          name="mode_session"
                          onChange={handleChange}
                          value={values.mode_session}
                        >
                          <option value="">----choose Mode----</option>
                          <option>Présentielle</option>
                          <option>En Ligne</option>
                        </Field>
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

                        <Field
                          className={
                            hasChanged
                              ? errors.duree_sess
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="duree_sess"
                          type="number"
                        />
                        {errors.duree_sess && touched.duree_sess ? (
                          <div>{errors.duree_sess}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="hr_deb_j" className="col-form-label">
                          hr_deb_j:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.hr_deb_j
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="hr_deb_j"
                          type="text"
                        />
                        {errors.hr_deb_j && touched.hr_deb_j ? (
                          <div>{errors.hr_deb_j}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="hr_fin_j" className="col-form-label">
                          hr_fin_j:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.hr_fin_j
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="hr_fin_j"
                          type="text"
                        />
                        {errors.hr_fin_j && touched.hr_fin_j ? (
                          <div>{errors.hr_fin_j}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="hr_j_session"
                          className="col-form-label"
                        >
                          hr_j_session:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.hr_j_session
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="hr_j_session"
                          type="number"
                        />
                        {errors.hr_j_session && touched.hr_j_session ? (
                          <div>{errors.hr_j_session}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Lieux" className="col-form-label">
                          Lieux:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.lieu_sess
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="lieu_sess"
                          type="text"
                        />
                        {errors.lieu_sess && touched.lieu_sess ? (
                          <div>{errors.lieu_sess}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prix" className="col-form-label">
                          Prix:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.prix_session
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="prix_session"
                          type="number"
                        />
                        {errors.prix_session && touched.prix_session ? (
                          <div>{errors.prix_session}</div>
                        ) : null}
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
                          onChange={(e) => {
                            handleChange(e);
                            sub(e);
                            setCIF(e.target.value);
                          }}
                          value={values.FormationCIFormation}
                          id="FormationCIFormation"
                        >
                          <option value="">---Choose Formation----</option>
                          {GetFormations.data &&
                            GetFormations.data.allFormations.map(
                              (formation, idx) => {
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
                      {values.FormationCIFormation && (
                        <>
                          <div>
                            <div className="form-check">
                              <input
                                onChange={handleChange}
                                name="valid"
                                type="radio"
                                value={1}
                                className="form-check-input"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Formation"
                              >
                                Valid
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                onChange={handleChange}
                                name="valid"
                                type="radio"
                                value={0}
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Formation"
                              >
                                Not Valid
                              </label>
                            </div>
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
                              {f_list &&
                                f_list.map((formateur) => {
                                  return (
                                    <option
                                      key={formateur.code_formateur}
                                      value={formateur.code_formateur}
                                    >
                                      {formateur.nom_f +
                                        " " +
                                        formateur.prenom_f}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        </>
                      )}

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
                          onClick={handleReset}
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
