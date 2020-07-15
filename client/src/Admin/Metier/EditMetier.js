import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_METIER } from "../GraphQl/Mutation";
import { GET_FORMATIONSOPTIONS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";
import { MetierSchema } from "../../Utils/Validation";

function EditMetier(props) {
  const GetFormation = useQuery(GET_FORMATIONSOPTIONS);
  const [updateMetier, res] = useMutation(UPDATE_METIER);
  const metier = props.metier ? props.metier : null;
  const close = () => {
    props.setEdit(false);
  };

  const formation =
    metier &&
    metier.formation &&
    metier.formation.map((f) => {
      return f.CI_formation;
    });
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        enableReinitialize
        initialValues={{
          code_metier: metier && metier.code_metier,
          intitule_metier: metier && metier.intitule_metier,
          FormationCIFormation: formation,
        }}
        validationSchema={MetierSchema}
        onSubmit={async (values) => {
          try {
            await updateMetier({
              variables: {
                code_metier: parseInt(values.code_metier),
                intitule_metier: values.intitule_metier,
                FormationCIFormation: values.FormationCIFormation.map((f) =>
                  parseInt(f)
                ),
              },
            });
          } catch (e) {
            console.error(e.message);
          }
          props.refetch();
          close();
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
                  <div className="text-danger">{errors.intitule_metier}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Formation">Formation:</label>
                <Field
                  className={
                    hasChanged
                      ? errors.FormationCIFormation
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  multiple
                  component={"select"}
                  name="FormationCIFormation"
                >
                  <option value="">---Choose Formation--</option>
                  {GetFormation.data &&
                    GetFormation.data.allFormations &&
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
export default EditMetier;
