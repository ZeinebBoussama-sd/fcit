import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_DEMANDEUR } from "../GraphQl/Mutation";
import deepEqual from "lodash.isequal";
import { DemandeurSchema } from "../../Utils/Validation";

function EditDemandeur(props) {
  const [updateDemandeur, res] = useMutation(UPDATE_DEMANDEUR);
  const demandeur = props.demandeur ? props.demandeur : null;
  const close = () => {
    props.setEdit(false);
  };
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        initialValues={{
          nom_demandeur: demandeur && demandeur.nom_demandeur,
          prenom_demandeur: demandeur && demandeur.prenom_demandeur,
          email_demandeur: demandeur && demandeur.email_demandeur,
          tel_demandeur: demandeur && demandeur.tel_demandeur,
        }}
        validationSchema={DemandeurSchema}
        onSubmit={async (values) => {
          try {
            await updateDemandeur({
              variables: {
                code_demandeur: parseInt(props.id),
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
                  <div className="text-danger">{errors.nom_demandeur}</div>
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
                  <div className="text-danger">{errors.prenom_demandeur}</div>
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
                  <div className="text-danger">{errors.email_demandeur}</div>
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
                  <div className="text-danger">{errors.tel_demandeur}</div>
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
                  Close
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
export default EditDemandeur;
