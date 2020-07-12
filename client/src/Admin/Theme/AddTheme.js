import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { ADD_THEME } from "../GraphQl/Mutation";
import deepEqual from "lodash.isequal";
import { ThemeSchema } from "../../Utils/Validation";
function AddTheme(props) {
  const [addTheme, res] = useMutation(ADD_THEME);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Add Theme
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
                Add Theme
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
                  code_theme: "",
                  nom_theme: "",
                }}
                enableReinitialize
                validationSchema={ThemeSchema}
                onSubmit={async (values) => {
                  try {
                    await addTheme({
                      variables: {
                        code_theme: values.code_theme,
                        nom_theme: values.nom_theme,
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
                        <label htmlFor="code" className="col-form-label">
                          Code Theme:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.code_theme
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="code_theme"
                          type="text"
                        />
                        {touched.code_theme ? (
                          <div className="text-danger">{errors.code_theme}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Nom" className="col-form-label">
                          Nom Theme:
                        </label>

                        <Field
                          className={
                            hasChanged
                              ? errors.nom_theme
                                ? "form-control is-invalid"
                                : "form-control is-valid"
                              : "form-control text-input"
                          }
                          name="nom_theme"
                          type="text"
                        />
                        {errors.nom_theme && touched.nom_theme ? (
                          <div className="text-danger">{errors.nom_theme}</div>
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
                          Add Theme
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
export default AddTheme;
