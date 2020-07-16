import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_FORMATEUR } from "../GraphQl/Mutation";
import { GET_FORMATIONS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";
import { FormateurSchema } from "../../Utils/Validation";
import { DropzoneField } from "../component/DropzoneField";
import fs from "fs";
import moment from "moment";

function EditFormateur(props) {
  const [updateFormateur] = useMutation(UPDATE_FORMATEUR);
  const GetFormations = useQuery(GET_FORMATIONS);
  const formateur = props.formateur ? props.formateur : null;
  const close = () => {
    props.setEdit(false);
  };
  // const fileC = fs.ReadStream(formateur.cv_f)
  // var reader = new FileReader();
  // debugger
  //   const a = reader.readAsArrayBuffer(formateur.cv_f);
  //   console.log(a);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });
  const cv_F = formateur && formateur.cv_f;
  const copie_passeport = formateur && formateur.copie_passeport;
  const copie_RIB = formateur && formateur.copie_RIB;
  const copie_cin = formateur && formateur.copie_cin;
  const formation =
    formateur &&
    formateur.formation &&
    formateur.formation.map((f) => {
      return parseInt(f.CI_formation);
    });
  console.log("formation", formation);
  const f = formateur && formateur.cv_f;
  // const d =
  //   f &&
  //   f.length !== 0 &&
  //   fs.readFile(f, function (err, obj) {
  //     console.log(obj);
  //   });
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        initialValues={{
          code_formateur: formateur && formateur.code_formateur,
          nom_f: formateur && formateur.nom_f,
          prenom_f: formateur && formateur.prenom_f,
          classe_f: formateur && formateur.classe_f,
          fonction_f: formateur && formateur.fonction_f,
          cv_f: [],
          email_f: formateur && formateur.email_f,
          tel_f: formateur && formateur.tel_f,
          NSS: formateur && formateur.NSS,
          salaire_f: formateur && formateur.salaire_f,
          adr_f: formateur && formateur.adr_f,
          date_dajout:
            formateur && moment(formateur.date_dajout).format("yyyy-MM-DD"),
          cin_f: formateur && formateur.cin_f,
          copie_cin: [],
          passeport_f: formateur && formateur.passeport_f,
          copie_passeport: [],
          visa_f: formateur && formateur.visa_f,
          val_visa:
            formateur && moment(formateur.val_visa).format("yyyy-MM-DD"),
          tarif_f: formateur && formateur.tarif_f,
          RIB_f: formateur && formateur.RIB_f,
          copie_RIB: [],
          formationCIFormation: formation,
        }}
        validationSchema={FormateurSchema}
        onSubmit={async (values) => {
          try {
            await updateFormateur({
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
                formationCIFormation: values.FormationCIFormation.map((f) => {
                  return f;
                }),
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
            setFieldValue,
          } = props;
          const hasChanged = !deepEqual(values, initialValues);

          console.log("v", values);
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
                  disabled
                />
                {errors.code_formateur && touched.code_formateur ? (
                  <div className="text-danger">{errors.code_formateur}</div>
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
                      : "form-control text-input"
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
                      : "form-control text-input"
                  }
                  name="cv_f"
                  component={DropzoneField}
                />
                <b>
                  {values.cv_f.length !== 0
                    ? values.cv_f.name
                    : cv_F.replace(/^.*[\\\/]/, "")}
                </b>
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
                      : "form-control text-input"
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
                      : "form-control text-input"
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
                      : "form-control text-input"
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
                      : "form-control text-input"
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
                      : "form-control text-input"
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
                      : "form-control text-input"
                  }
                  name="date_dajout"
                  type="date"
                />
                {errors.date_dajout && touched.date_dajout ? (
                  <div className="text-danger">{errors.date_dajout}</div>
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
                      : "form-control text-input"
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
                      : "form-control text-input"
                  }
                  name="copie_cin"
                  type="file"
                  component={DropzoneField}
                />
                <b>
                  {values.copie_cin.length !== 0
                    ? values.copie_cin.name
                    : copie_cin.replace(/^.*[\\\/]/, "")}
                </b>
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
                      : "form-control text-input"
                  }
                  name="passeport_f"
                  type="text"
                />
                {errors.passeport_f && touched.passeport_f ? (
                  <div className="text-danger">{errors.passeport_f}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="copie_passeport" className="col-form-label">
                  copie_passeport
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.copie_passeport
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="copie_passeport"
                  type="file"
                  component={DropzoneField}
                />
                <b>
                  {values.copie_passeport.length !== 0
                    ? values.copie_passeport.name
                    : copie_passeport.replace(/^.*[\\\/]/, "")}
                </b>
                {errors.copie_passeport && touched.copie_passeport ? (
                  <div className="text-danger">{errors.copie_passeport}</div>
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
                      : "form-control text-input"
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
                <b>
                  {values.copie_RIB.length !== 0
                    ? values.copie_RIB.name
                    : copie_RIB.replace(/^.*[\\\/]/, "")}
                </b>
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
                    GetFormations.data.allFormations.map((formation) => {
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
                {errors.FormationCIFormation && touched.FormationCIFormation ? (
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
export default EditFormateur;
