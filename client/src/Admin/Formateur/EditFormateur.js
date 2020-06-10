import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik } from "formik";
import { UPDATE_FORMATEUR } from "../GraphQl/Mutation";
import { GET_FORMATIONS } from "../GraphQl/Query";

function EditFormateur(props) {
  const [updateFormateur] = useMutation(UPDATE_FORMATEUR);
  const GetFormations = useQuery(GET_FORMATIONS);
  const formateur = props.formateur ? props.formateur : null;
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        initialValues={{
          code_formateur: formateur && formateur.code_formateur,
          nom_f: formateur && formateur.nom_f,
          prenom_f: formateur && formateur.prenom_f,
          classe_f: formateur && formateur.classe_f,
          fonction_f: formateur && formateur.fonction_f,
          cv_f: formateur && formateur.cv_f,
          email_f: formateur && formateur.email_f,
          tel_f: formateur && formateur.tel_f,
          NSS: formateur && formateur.NSS,
          salaire_f: formateur && formateur.salaire_f,
          adr_f: formateur && formateur.adr_f,
          date_dajout: formateur && formateur.date_dajout,
          cin_f: formateur && formateur.cin_f,
          copie_cin: formateur && formateur.copie_cin,
          passeport_f: formateur && formateur.passeport_f,
          copie_passeport: formateur && formateur.copie_passeport,
          visa_f: formateur && formateur.visa_f,
          val_visa: formateur && formateur.val_visa,
          tarif_f: formateur && formateur.tarif_f,
          RIB_f: formateur && formateur.RIB_f,
          copie_RIB: formateur && formateur.copie_RIB,
        }}
        onSubmit={async (values) => {
          try {
            //  new Promise((resolve) => setTimeout(resolve, 500));
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
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Code" className="col-form-label">
                  Code Formateur
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="code_formateur"
                  onChange={handleChange}
                  value={values.code_formateur}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Nom" className="col-form-label">
                  Nom
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="nom_f"
                  onChange={handleChange}
                  value={values.nom_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Prenom" className="col-form-label">
                  Prenom
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="prenom_f"
                  onChange={handleChange}
                  value={values.prenom_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Classe" className="col-form-label">
                  Classe
                </label>
                <select
                  className="form-control"
                  id="classe_f"
                  onChange={handleChange}
                  value={values.classe_f}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Fonction " className="col-form-label">
                  Fonction
                </label>
                <select
                  className="form-control"
                  id="fonction_f"
                  onChange={handleChange}
                  value={values.fonction_f}
                >
                  <option>Enseignant</option>
                  <option>Enseignant Universitaire</option>
                  <option>Ingénieur</option>
                  <option>Technicien</option>
                  <option>Autres</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="CV" className="col-form-label">
                  CV
                </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="cv_f"
                  onChange={handleChange}
                  //value={values.cv_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email" className="col-form-label">
                  Email
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="email_f"
                  onChange={handleChange}
                  value={values.email_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Tel" className="col-form-label">
                  Tel
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tel_f"
                  onChange={handleChange}
                  value={values.tel_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="NSS" className="col-form-label">
                  NSS
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="NSS"
                  onChange={handleChange}
                  value={values.NSS}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Salaire" className="col-form-label">
                  Salaire
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="salaire_f"
                  onChange={handleChange}
                  value={values.salaire_f}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Adresse" className="col-form-label">
                  Adresse
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="adr_f"
                  onChange={handleChange}
                  value={values.adr_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Date Ajout" className="col-form-label">
                  Date Ajout
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date_dajout"
                  onChange={handleChange}
                  value={values.date_dajout}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cin-f" className="col-form-label">
                  Cin f
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cin_f"
                  onChange={handleChange}
                  value={values.cin_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="copie_cin" className="col-form-label">
                  copie_cin
                </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="copie_cin"
                  onChange={handleChange}
                  //value={values.copie_cin}
                />
              </div>
              <div className="form-group">
                <label htmlFor="passeport_f" className="col-form-label">
                  passeport_f
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="passeport_f"
                  onChange={handleChange}
                  value={values.passeport_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="copie_passeport" className="col-form-label">
                  copie_passeport
                </label>
                <input
                  type="file"
                  class="form-control-file"
                  id="copie_passeport"
                  onChange={handleChange}
                  //value={values.copie_passeport}
                />
                <input
                  id="copie_passeport"
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setFieldValue(
                      "copie_passeport",
                      event.currentTarget.files[0]
                    );
                  }}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="visa_f" className="col-form-label">
                  visa_f
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="visa_f"
                  onChange={handleChange}
                  value={values.visa_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="val_visa" className="col-form-label">
                  val_visa
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="val_visa"
                  onChange={handleChange}
                  value={values.val_visa}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tarif_f" className="col-form-label">
                  tarif_f
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="tarif_f"
                  onChange={handleChange}
                  value={values.tarif_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="RIB_f" className="col-form-label">
                  RIB_f
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="RIB_f"
                  onChange={handleChange}
                  value={values.RIB_f}
                />
              </div>
              <div className="form-group">
                <label htmlFor="copie_RIB" className="col-form-label">
                  copie_RIB
                </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="copie_RIB"
                  onChange={handleChange}
                  //value={values.copie_RIB}
                />
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
                </select>
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
