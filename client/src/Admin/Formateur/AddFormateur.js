import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Formik } from "formik";

function AddFormateur() {
  const ADD_FORMATEUR = gql`
    mutation create_formateur(
      $nom_f: String!
      $prenom_f: String!
      $classe_f: String
      $fonction_f: String
      $cv_f: String
      $email_f: String!
      $tel_f: Int
      $NSS: Int
      $salaire_f: Float
      $specialite_f: String
      $adr_f: String
      $date_dajout: Date
    ) {
      createFormateur(
        nom_f: $nom_f
        prenom_f: $prenom_f
        classe_f: $classe_f
        fonction_f: $fonction_f
        cv_f: $cv_f
        email_f: $email_f
        tel_f: $tel_f
        NSS: $NSS
        salaire_f: $salaire_f
        specialite_f: $specialite_f
        adr_f: $adr_f
        date_dajout: $date_dajout
      ) {
        nom_f
        prenom_f
        classe_f
        fonction_f
        cv_f
        email_f
        tel_f
        NSS
        salaire_f
        specialite_f
        adr_f
        date_dajout
      }
    }
  `;
  let input;
  const [AddFormateur, { data }] = useMutation(ADD_FORMATEUR);
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
                initialValues={{
                  nom_f: "",
                  prenom_f: "",
                  classe_f: undefined,
                  fonction_f: undefined,
                  cv_f: undefined,
                  email_f: "",
                  tel_f: undefined,
                  NSS: undefined,
                  salaire_f: undefined,
                  specialite_f: undefined,
                  adr_f: undefined,
                  date_dajout: undefined,
                }}
                onSubmit={async (values) => {
                  try {
                    //  new Promise((resolve) => setTimeout(resolve, 500));
                    await AddFormateur({
                      variables: {
                        nom_f: values.nom_f,
                        prenom_f: values.prenom_f,
                        classe_f: values.classe_f,
                        fonction_f: values.fonction_f,
                        cv_f: values.cv_f,
                        email_f: values.email_f,
                        tel_f: values.tel_f,
                        NSS: values.NSS,
                        salaire_f: values.salaire_f,
                        specialite_f: values.specialite_f,
                        adr_f: values.adr_f,
                        date_dajout: values.date_dajout,
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
                        <input
                          type="text"
                          className="form-control"
                          id="classe_f"
                          onChange={handleChange}
                          value={values.classe_f}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Fonction " className="col-form-label">
                          Fonction
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fonction_f"
                          onChange={handleChange}
                          value={values.fonction_f}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="CV" className="col-form-label">
                          CV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cv_f"
                          onChange={handleChange}
                          value={values.cv_f}
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
                          type="number"
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
                        <label htmlFor="Specialite" className="col-form-label">
                          Specialite
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="specialite_f"
                          onChange={handleChange}
                          value={values.specialite_f}
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
