import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_DEMANDEUR } from "../GraphQl/Mutation";
import deepEqual from "lodash.isequal";
import { DemandeurSchema } from "../../Utils/Validation";

function AddDemandeur(props) {
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
                validationSchema={DemandeurSchema}
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
                        <label htmlFor="nom" className="col-form-label">
                          Nom:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.nom_demandeur
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="nom_demandeur"
                          type="text"
                        />
                        {errors.nom_demandeur && touched.nom_demandeur ? (
                          <div className="text-danger">
                            {errors.nom_demandeur}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prenom" className="col-form-label">
                          Prenom:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.prenom_demandeur
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="prenom_demandeur"
                          type="text"
                        />
                        {errors.prenom_demandeur && touched.prenom_demandeur ? (
                          <div className="text-danger">
                            {errors.prenom_demandeur}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Email" className="col-form-label">
                          Email:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.email_demandeur
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="email_demandeur"
                          type="email"
                        />
                        {errors.email_demandeur && touched.email_demandeur ? (
                          <div className="text-danger">
                            {errors.email_demandeur}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Tel" className="col-form-label">
                          Tel:
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.tel_demandeur
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="tel_demandeur"
                          type="text"
                        />
                        {errors.tel_demandeur && touched.tel_demandeur ? (
                          <div className="text-danger">
                            {errors.tel_demandeur}
                          </div>
                        ) : null}
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
