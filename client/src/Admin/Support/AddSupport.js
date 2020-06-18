import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_SUPPORT } from "../GraphQl/Mutation";
import deepEqual from "lodash.isequal";
import { SupportSchema } from "../../Utils/Validation";

function AddSupport(props) {
  const [addSupport, res] = useMutation(ADD_SUPPORT);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Add Support
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
                Add Support
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
                  titre_support: "",
                  date_support: "",
                }}
                validationSchema={SupportSchema}
                onSubmit={async (values) => {
                  try {
                    await addSupport({
                      variables: {
                        titre_support: values.titre_support,
                        date_support: values.date_support,
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
                        <label htmlFor="titre" className="col-form-label">
                          Titre Support:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.titre_support
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="titre_support"
                          type="text"
                        />
                        {errors.titre_support && touched.titre_support ? (
                          <div>{errors.titre_support}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="date" className="col-form-label">
                          Date Support:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.date_support
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          className="form-control"
                          name="date_support"
                          type="date"
                        />
                        {errors.date_support && touched.date_support ? (
                          <div>{errors.date_support}</div>
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
                          Add Support
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
export default AddSupport;
