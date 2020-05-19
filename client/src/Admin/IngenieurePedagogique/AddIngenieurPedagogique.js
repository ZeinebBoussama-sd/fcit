import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Formik } from "formik";

function AddIngenieurPedagogique() {
  const ADD_INGENIEURPEDAGOGIQUE = gql`
    mutation create_ingenieurpedagogique(
      $nom_ing: String!
      $prenom_ing: String!
      $cv_ing: String
      $email_ing: String
      $tel_ing: Int
      $NSS_ing: Int
      $salaire_ing: Float
      $specialite_ing: String
      $adr_ing: String
    ) {
      createIngenieurPedagogique(
        nom_ing: $nom_ing
        prenom_ing: $prenom_ing
        cv_ing: $cv_ing
        email_ing: $email_ing
        tel_ing: $tel_ing
        NSS_ing: $NSS_ing
        salaire_ing: $salaire_ing
        specialite_ing: $specialite_ing
        adr_ing: $adr_ing
      ) {
        nom_ing
        prenom_ing
        cv_ing
        email_ing
        tel_ing
        NSS_ing
        salaire_ing
        specialite_ing
        adr_ing
      }
    }
  `;
  let input;
  const [AddIngenieurPedagogique, { data }] = useMutation(
    ADD_INGENIEURPEDAGOGIQUE
  );
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Add Ingenieur
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
                Add Ingenieur
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
                  nom_ing: "",
                  prenom_ing: "",
                  cv_ing: undefined,
                  email_ing: undefined,
                  tel_ing: undefined,
                  NSS_ing: undefined,
                  salaire_ing: undefined,
                  specialite_ing: undefined,
                  adr_ing: undefined,
                }}
                onSubmit={async (values) => {
                  try {
                    await AddIngenieurPedagogique({
                      variables: {
                        nom_ing: values.nom_ing,
                        prenom_ing: values.prenom_ing,
                        cv_ing: values.cv_ing,
                        email_ing: values.email_ing,
                        tel_ing: values.tel_ing,
                        NSS_ing: values.NSS_ing,
                        salaire_ing: values.salaire_ing,

                        specialite_ing: values.specialite_ing,
                        adr_ing: values.adr_ing,
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
                        <label htmlFor="Nom Ing" className="col-form-label">
                          Nom Ing:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="nom_ing"
                          onChange={handleChange}
                          value={values.nom_ing}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prenom Ing" className="col-form-label">
                          Prenom Ing
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="prenom_ing"
                          onChange={handleChange}
                          value={values.prenom_ing}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Cv Ing" className="col-form-label">
                          Cv Ing
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cv_ing"
                          onChange={handleChange}
                          value={values.cv_ing}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Email Ing" className="col-form-label">
                          Email Ing
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email_ing"
                          onChange={handleChange}
                          value={values.email_ing}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="Telephone Ing"
                          className="col-form-label"
                        >
                          Telephone Ing
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="tel_ing"
                          onChange={handleChange}
                          value={values.tel_ing}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="NSS Ing" className="col-form-label">
                          NSS Ing
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="NSS_ing"
                          onChange={handleChange}
                          value={values.NSS_ing}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Salaire Ing" className="col-form-label">
                          Salaire Ing
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="salaire_ing"
                          onChange={handleChange}
                          value={values.salaire_ing}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="Specialité Ing"
                          className="col-form-label"
                        >
                          Specialité Ing
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="specialite_ing"
                          onChange={handleChange}
                          value={values.specialite_ing}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Adresse Ing" className="col-form-label">
                          Adresse Ing
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="adr_ing"
                          onChange={handleChange}
                          value={values.adr_ing}
                        />
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
                          Add Ingenieur
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
export default AddIngenieurPedagogique;
