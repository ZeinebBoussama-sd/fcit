import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_INGENIEURPEDAGOGIQUE } from "../GraphQl/Mutation";
import deepEqual from "lodash.isequal";
import { IngenieurPedagogiqueSchema } from "../../Utils/Validation";
function EditIngenieurPedagogique(props) {
  const [updateIngenieurPedagogique, res] = useMutation(
    UPDATE_INGENIEURPEDAGOGIQUE
  );

  const ingenieurpedagogique = props.ingenieurpedagogique
    ? props.ingenieurpedagogique
    : null;
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        initialValues={{
          nom_ing: ingenieurpedagogique && ingenieurpedagogique.nom_ing,
          prenom_ing: ingenieurpedagogique && ingenieurpedagogique.prenom_ing,
          cv_ing: ingenieurpedagogique && ingenieurpedagogique.cv_ing,
          email_ing: ingenieurpedagogique && ingenieurpedagogique.email_ing,
          tel_ing: ingenieurpedagogique && ingenieurpedagogique.tel_ing,
          NSS_ing: ingenieurpedagogique && ingenieurpedagogique.NSS_ing,
          salaire_ing: ingenieurpedagogique && ingenieurpedagogique.salaire_ing,
          specialite_ing:
            ingenieurpedagogique && ingenieurpedagogique.specialite_ing,
          adr_ing: ingenieurpedagogique && ingenieurpedagogique.adr_ing,
        }}
        validationSchema={IngenieurPedagogiqueSchema}
        onSubmit={async (values) => {
          try {
            await updateIngenieurPedagogique({
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
          } = props;
          const hasChanged = !deepEqual(values, initialValues);

          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Nom Ing" className="col-form-label">
                  Nom Ing:
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.nom_ing
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="nom_ing"
                  type="text"
                />
                {errors.nom_ing && touched.nom_ing ? (
                  <div>{errors.nom_ing}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Prenom Ing" className="col-form-label">
                  Prenom Ing
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.prenom_ing
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="prenom_ing"
                  type="text"
                />
                {errors.prenom_ing && touched.prenom_ing ? (
                  <div>{errors.prenom_ing}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Cv Ing" className="col-form-label">
                  Cv Ing
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.cv_ing
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="cv_ing"
                  type="text"
                />
                {errors.cv_ing && touched.cv_ing ? (
                  <div>{errors.cv_ing}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Email Ing" className="col-form-label">
                  Email Ing
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.email_ing
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="email_ing"
                  type="text"
                />
                {errors.email_ing && touched.email_ing ? (
                  <div>{errors.email_ing}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Telephone Ing" className="col-form-label">
                  Telephone Ing
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.tel_ing
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="tel_ing"
                  type="number"
                />
                {errors.tel_ing && touched.tel_ing ? (
                  <div>{errors.tel_ing}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="NSS Ing" className="col-form-label">
                  NSS Ing
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.NSS_ing
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="NSS_ing"
                  type="number"
                />
                {errors.NSS_ing && touched.NSS_ing ? (
                  <div>{errors.NSS_ing}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Salaire Ing" className="col-form-label">
                  Salaire Ing
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.salaire_ing
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="salaire_ing"
                  type="number"
                />
                {errors.salaire_ing && touched.salaire_ing ? (
                  <div>{errors.salaire_ing}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Specialité Ing" className="col-form-label">
                  Specialité Ing
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.specialite_ing
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="specialite_ing"
                  type="text"
                />
                {errors.specialite_ing && touched.specialite_ing ? (
                  <div>{errors.specialite_ing}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Adresse Ing" className="col-form-label">
                  Adresse Ing
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.adr_ing
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="adr_ing"
                  type="text"
                />
                {errors.adr_ing && touched.adr_ing ? (
                  <div>{errors.adr_ing}</div>
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
                  Add Ingenieur
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
export default EditIngenieurPedagogique;
