import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_THEME } from "../GraphQl/Mutation";
import deepEqual from "lodash.isequal";
import { ThemeSchema } from "../../Utils/Validation";
function EditTheme(props) {
  const [updateTheme, res] = useMutation(UPDATE_THEME);
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        initialValues={{
          code_theme: theme && theme.code_theme,
          nom_theme: theme && theme.nom_theme,
        }}
        validationSchema={ThemeSchema}
        onSubmit={async (values) => {
          try {
            await updateTheme({
              variables: {
                code_theme: values.code_theme,
                nom_theme: values.nom_theme,
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
                {errors.code_theme && touched.code_theme ? (
                  <div>{errors.code_theme}</div>
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
                  <div>{errors.nom_theme}</div>
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
  );
}
export default EditTheme;
