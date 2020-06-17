import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik } from "formik";
import { UPDATE_DEMANDEUR } from "../GraphQl/Mutation";

function EditDemandeur(props) {
  const [updateDemandeur, res] = useMutation(UPDATE_DEMANDEUR);
  const demandeur = props.demandeur ? props.demandeur : null;
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        initialValues={{
          nom_demandeur: demandeur && demandeur.nom_demandeur,
          prenom_demandeur: demandeur && demandeur.prenom_demandeur,
          email_demandeur: demandeur && demandeur.email_demandeur,
          tel_demandeur: demandeur && demandeur.tel_demandeur,
        }}
        onSubmit={async (values) => {
          try {
            await updateDemandeur({
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
  );
}
export default EditDemandeur;
