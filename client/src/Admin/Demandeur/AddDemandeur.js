import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik } from "formik";
import { ADD_DEMANDEUR } from "../GraphQl/Mutation";

function AddDemandeur() {
  const [addDemandeur, res] = useMutation(ADD_DEMANDEUR);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Add Demandeur
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
                Add Demandeur
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
                  nom_demandeur: "",
                  prenom_demandeur: "",
                  email_demandeur: undefined,
                  tel_demandeur: undefined,
                }}
                onSubmit={async (values) => {
                  try {
                    await addDemandeur({
                      variables: {
                        nom_demandeur: values.nom_demandeur,
                        prenom_demandeur: values.prenom_demandeur,
                        email_demandeur: values.email_demandeur,
                        tel_demandeur: values.tel_demandeur,
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
                        <label htmlFor="nom" className="col-form-label">
                          Nom:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="nom_demandeur"
                          onChange={handleChange}
                          value={values.nom_demandeur}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prenom" className="col-form-label">
                          Prenom:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="prenom_demandeur"
                          onChange={handleChange}
                          value={values.prenom_demandeur}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Email" className="col-form-label">
                          Email:
                        </label>
                        <input
                          required
                          type="email"
                          className="form-control"
                          id="email_demandeur"
                          onChange={handleChange}
                          value={values.email_demandeur}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Tel" className="col-form-label">
                          Tel:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="tel_demandeur"
                          onChange={handleChange}
                          value={values.tel_demandeur}
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
export default AddDemandeur;
