import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_SUPPORT } from "../GraphQl/Mutation";
import deepEqual from "lodash.isequal";
import { SupportSchema } from "../../Utils/Validation";

function EditSupport(props) {
  const [updateSupport, res] = useMutation(UPDATE_SUPPORT);
  const support = props.support ? props.support : null;
  const close = () => {
    props.setEdit(false);
  };
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        initialValues={{
          titre_support: support && support.titre_support,
          date_support: support && support.date_support,
        }}
        validationSchema={SupportSchema}
        onSubmit={async (values) => {
          try {
            await updateSupport({
              variables: {
                code_support: parseInt(props.id),
                titre_support: values.titre_support,
                date_support: values.date_support,
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
                  Add Support
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
export default EditSupport;
