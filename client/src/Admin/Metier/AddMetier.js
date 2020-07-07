import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_METIER } from "../GraphQl/Mutation";
import { GET_FORMATIONSOPTIONS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { MetierSchema } from "../../Utils/Validation";

function AddMetier(props) {
  const GetFormation = useQuery(GET_FORMATIONSOPTIONS);
  const [AddMetier, res] = useMutation(ADD_METIER);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Ajouter Metier
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
                Ajouter Metier
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
                enableReinitialize
                initialValues={{
                  code_metier: "",
                  intitule_metier: undefined,
                  FormationCIFormation: [],
                }}
                validationSchema={MetierSchema}
                onSubmit={async (values) => {
                  try {
                    console.log("values", values);
                    await AddMetier({
                      variables: {
                        code_metier: parseInt(values.code_metier),
                        intitule_metier: values.intitule_metier,
                        FormationCIFormation: values.FormationCIFormation.map(
                          (f) => parseInt(f)
                        ),
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
                  console.log("GetFormation", GetFormation);
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
                          multiple
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
                        >
                          Fermer
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          Ajouter Metier
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
export default AddMetier;
