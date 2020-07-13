import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_DATEPREEVUE } from "../GraphQl/Mutation";
import { GET_DEMANDE_FORMATIONS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";
import { DatePrevueSchema } from "../../Utils/Validation";

function AddDatePrevue(props) {
  const GetDemandeFormations = useQuery(GET_DEMANDE_FORMATIONS);
  const [AddDatePrevue, res] = useMutation(ADD_DATEPREEVUE);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Ajouter Date
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
                Ajouter Date
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
                  date_prev: undefined,
                  DemandeFormationCodeDemande: undefined,
                }}
                validationSchema={DatePrevueSchema}
                onSubmit={async (values) => {
                  try {
                    await AddDatePrevue({
                      variables: {
                        date_prev: values.date_prev,
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
                        <label htmlFor="Nom" className="col-form-label">
                          Date
                        </label>
                        <Field
                          className={
                            hasChanged
                              ? errors.date_prev
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="date_prev"
                          type="date"
                        />
                        {errors.date_prev && touched.date_prev ? (
                          <div className="text-danger">{errors.date_prev}</div>
                        ) : null}
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
                          Ajouter Date
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
export default AddDatePrevue;
