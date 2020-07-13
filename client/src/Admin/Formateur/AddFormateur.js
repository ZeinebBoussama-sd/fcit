import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_FORMATEUR } from "../GraphQl/Mutation";
import { GET_FORMATIONSOPTIONS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";
import fs from "fs";
import { FormateurSchema } from "../../Utils/Validation";
import { fileToBase64String } from "../../Utils/fileToBase64String";
import { logDOM } from "@testing-library/react";
import { DropzoneField } from "../component/DropzoneField";

function AddFormateur(props) {
  const GetFormations = useQuery(GET_FORMATIONSOPTIONS);
  const [AddFormateur, res] = useMutation(ADD_FORMATEUR);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Ajouter Formateur
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
                Ajouter Formateur
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
                  FormationCIFormation: [],
                  code_formateur: "",
                  nom_f: "",
                  prenom_f: "",
                  classe_f: undefined,
                  fonction_f: undefined,
                  cv_f: [],
                  email_f: "",
                  tel_f: undefined,
                  NSS: undefined,
                  salaire_f: undefined,
                  adr_f: undefined,
                  date_dajout: undefined,
                  cin_f: undefined,
                  copie_cin: [],
                  passeport_f: undefined,
                  copie_passeport: [],
                  visa_f: undefined,
                  val_visa: undefined,
                  tarif_f: undefined,
                  RIB_f: undefined,
                  copie_RIB: [],
                }}
                enableReinitialize
                validationSchema={FormateurSchema}
                onSubmit={async (values) => {
                  try {
                    console.log("v", values);
                    await AddFormateur({
                      variables: {
                        code_formateur: values.code_formateur,
                        nom_f: values.nom_f,
                        prenom_f: values.prenom_f,
                        classe_f: values.classe_f,
                        fonction_f: values.fonction_f,
                        cv_f: values.cv_f,
                        email_f: values.email_f,
                        tel_f: values.tel_f,
                        NSS: values.NSS,
                        salaire_f: values.salaire_f,
                        adr_f: values.adr_f,
                        date_dajout: values.date_dajout,
                        cin_f: values.cin_f,
                        copie_cin: values.copie_cin,
                        passeport_f: values.passeport_f,
                        copie_passeport: values.copie_passeport,
                        visa_f: values.visa_f,
                        val_visa: values.val_visa,
                        tarif_f: values.tarif_f,
                        RIB_f: values.RIB_f,
                        copie_RIB: values.copie_RIB,
                        formationCIFormation: values.FormationCIFormation.map(
                          (f) => {
                            return parseInt(f);
                          }
                        ),
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
                    setFieldValue,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                  } = props;
                  const hasChanged = !deepEqual(values, initialValues);
                  const cv_f_name =
                    (values.cv_f || values.cv_f.length !== 0) &&
                    values.cv_f.name;
                  const copie_cin_name =
                    (values.copie_cin || values.copie_cin.length !== 0) &&
                    values.copie_cin.name;
                  const copie_passeport_name =
                    (values.copie_passeport ||
                      values.copie_passeport.length !== 0) &&
                    values.copie_passeport.name;
                  const copie_RIB_name =
                    (values.copie_RIB || values.copie_RIB.length !== 0) &&
                    values.copie_RIB.name;
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="Code" className="col-form-label">
                          Code Formateur
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.code_formateur
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="code_formateur"
                          type="text"
                        />
                        {errors.code_formateur && touched.code_formateur ? (
                          <div className="text-danger">
                            {errors.code_formateur}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Nom" className="col-form-label">
                          Nom
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.nom_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="nom_f"
                          type="text"
                        />
                        {errors.nom_f && touched.nom_f ? (
                          <div className="text-danger">{errors.nom_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prenom" className="col-form-label">
                          Prenom
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.prenom_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="prenom_f"
                          type="text"
                        />
                        {errors.prenom_f && touched.prenom_f ? (
                          <div className="text-danger">{errors.prenom_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Classe" className="col-form-label">
                          Classe
                        </label>
                        <Field
                          component="select"
                          className={
                            hasChanged
                              ? errors.classe_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="classe_f"
                        >
                          <option value="">----choose Classe----</option>
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                          <option>D</option>
                        </Field>
                        {errors.classe_f && touched.classe_f ? (
                          <div className="text-danger">{errors.classe_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Fonction " className="col-form-label">
                          Fonction
                        </label>
                        <Field
                          component="select"
                          className={
                            hasChanged
                              ? errors.fonction_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="fonction_f"
                        >
                          <option value="">----choose Fonction----</option>
                          <option>Enseignant</option>
                          <option>Enseignant Universitaire</option>
                          <option>Ingénieur</option>
                          <option>Technicien</option>
                          <option>Autres</option>
                        </Field>
                        {errors.fonction_f && touched.fonction_f ? (
                          <div className="text-danger">{errors.fonction_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="CV" className="col-form-label">
                          CV
                        </label>
                        <Field
                          type="file"
                          className={
                            hasChanged
                              ? errors.cv_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="cv_f"
                          component={DropzoneField}
                        />
                        <b>{cv_f_name}</b>
                        {errors.cv_f && touched.cv_f ? (
                          <div className="text-danger">{errors.cv_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Email" className="col-form-label">
                          Email
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.email_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="email_f"
                          type="email"
                        />
                        {errors.email_f && touched.email_f ? (
                          <div className="text-danger">{errors.email_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Tel" className="col-form-label">
                          Tel
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.tel_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="tel_f"
                          type="text"
                        />
                        {errors.tel_f && touched.tel_f ? (
                          <div className="text-danger">{errors.tel_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="NSS" className="col-form-label">
                          NSS
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.NSS
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="NSS"
                          type="number"
                        />
                        {errors.NSS && touched.NSS ? (
                          <div className="text-danger">{errors.NSS}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Salaire" className="col-form-label">
                          Salaire
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.salaire_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="salaire_f"
                          type="number"
                        />
                        {errors.salaire_f && touched.salaire_f ? (
                          <div className="text-danger">{errors.salaire_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Adresse" className="col-form-label">
                          Adresse
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.adr_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="adr_f"
                          type="text"
                        />
                        {errors.adr_f && touched.adr_f ? (
                          <div className="text-danger">{errors.adr_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="date_dajout" className="col-form-label">
                          Date dajout
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.date_dajout
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="date_dajout"
                          type="date"
                        />
                        {errors.date_dajout && touched.date_dajout ? (
                          <div className="text-danger">
                            {errors.date_dajout}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="cin-f" className="col-form-label">
                          Cin f
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.cin_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="cin_f"
                          type="number"
                        />
                        {errors.cin_f && touched.cin_f ? (
                          <div className="text-danger">{errors.cin_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="copie_cin" className="col-form-label">
                          copie cin
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.copie_cin
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="copie_cin"
                          type="file"
                          component={DropzoneField}
                        />
                        <b>{copie_cin_name}</b>
                        {errors.copie_cin && touched.copie_cin ? (
                          <div className="text-danger">{errors.copie_cin}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="passeport_f" className="col-form-label">
                          passeport_f
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.passeport_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="passeport_f"
                          type="text"
                        />
                        {errors.passeport_f && touched.passeport_f ? (
                          <div className="text-danger">
                            {errors.passeport_f}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="copie_passeport"
                          className="col-form-label"
                        >
                          copie_passeport
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.copie_passeport
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="copie_passeport"
                          type="file"
                          component={DropzoneField}
                        />
                        <b>{copie_passeport_name}</b>
                        {errors.copie_passeport && touched.copie_passeport ? (
                          <div className="text-danger">
                            {errors.copie_passeport}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="visa_f" className="col-form-label">
                          visa_f
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.visa_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control"
                          }
                          name="visa_f"
                          type="text"
                        />
                        {errors.visa_f && touched.visa_f ? (
                          <div className="text-danger">{errors.visa_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="val_visa" className="col-form-label">
                          Date de visa:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.val_visa
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="val_visa"
                          type="date"
                        />
                        {errors.val_visa && touched.val_visa ? (
                          <div className="text-danger">{errors.val_visa}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="tarif_f" className="col-form-label">
                          tarif_f
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.tarif_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="tarif_f"
                          type="number"
                        />
                        {errors.tarif_f && touched.tarif_f ? (
                          <div className="text-danger">{errors.tarif_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="RIB_f" className="col-form-label">
                          RIB_f
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.RIB_f
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="RIB_f"
                          type="text"
                        />
                        {errors.RIB_f && touched.RIB_f ? (
                          <div className="text-danger">{errors.RIB_f}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="copie_RIB" className="col-form-label">
                          copie_RIB
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.copie_cin
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="copie_RIB"
                          type="file"
                          component={DropzoneField}
                        />
                        <b>{copie_RIB_name}</b>
                        {errors.copie_RIB && touched.copie_RIB ? (
                          <div className="text-danger">{errors.copie_RIB}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Formation">Formation:</label>

                        <Field
                          component="select"
                          className="form-control selectpicker"
                          name="FormationCIFormation"
                          multiple
                          data-live-search="true"
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
                          onClick={() => handleReset()}
                        >
                          Fermer
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          Ajouter Formateur
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
export default AddFormateur;
