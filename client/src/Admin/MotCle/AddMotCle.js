import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_MOTCLE } from "../GraphQl/Mutation";
import { GET_FORMATION } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { MotCleSchema } from "../../Utils/Validation";

function AddMotCle(props) {
  const GetFormation = useQuery(GET_FORMATION);
  const [AddMotCle, res] = useMutation(ADD_MOTCLE);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Ajouter Mot Cle
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
                Ajouter Mot Cle
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
                  motcle: "",
                  FormationCIFormation: undefined,
                }}
                validationSchema={MotCleSchema}
                onSubmit={async (values) => {
                  try {
                    await AddMotCle({
                      variables: {
                        motcle: values.motcle,
                        FormationCIFormation: parseInt(
                          values.FormationCIFormation
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

                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="Mot Cle" className="col-form-label">
                          Mot Cle:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.motcle
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="motcle"
                          type="text"
                        />
                        {errors.motcle && touched.motcle ? (
                          <div>{errors.motcle}</div>
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
                          <option value="">---Choose Formation:--</option>
                          {GetFormation.data &&
                            GetFormation.data.allFormations.map((formation) => {
                              return (
                                <option
                                  key={formation.CI_Formation}
                                  value={formation.CI_Formation}
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
                          Ajouter Fichier
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
export default AddMotCle;
