import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_METIER } from "../GraphQl/Mutation";
import { GET_FORMATION } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { MetierSchema } from "../../Utils/Validation";

function EditMetier(props) {
  const GetFormation = useQuery(GET_FORMATION);
  const [updateMetier, res] = useMutation(UPDATE_METIER);
  const metier = props.metier ? props.metier : null;
  const id = props.id;
  const close = () => {
    props.setEdit(false);
  };
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        enableReinitialize
        initialValues={{
          code_metier: metier && metier.code_metier,
          intitule_metier: metier && metier.intitule_metier,
          FormationCIFormation:
            metier && metier.formation && metier.formation.CI_formation,
        }}
        validationSchema={MetierSchema}
        onSubmit={async (values) => {
          try {
            await updateMetier({
              variables: {
                code_metier: values.code_metier,
                intitule_metier: values.intitule_metier,
                FormationCIFormation: parseInt(values.FormationCIFormation),
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
                <label htmlFor="Code" className="col-form-label">
                  Code:
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.code_metier
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="code_metier"
                  type="text"
                />
                {errors.code_metier && touched.code_metier ? (
                  <div>{errors.code_metier}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Intitule" className="col-form-label">
                  Intitule:
                </label>

                <Field
                  className={
                    hasChanged
                      ? errors.intitule_metier
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="intitule_metier"
                  type="text"
                />
                {errors.intitule_metier && touched.intitule_metier ? (
                  <div>{errors.intitule_metier}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Formation">Formation:</label>
                <select
                  className="form-control"
                  onChange={handleChange}
                  value={values.FormationCIFormation}
                  id="FormationCIFormation"
                >
                  <option value="">---Choose Formation--</option>
                  {GetFormation.data &&
                    GetFormation.data.allFormations.map((formation) => {
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
export default EditMetier;
