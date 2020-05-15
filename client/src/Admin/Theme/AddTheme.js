import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Formik } from "formik";

function AddTheme() {
  const ADD_THEME = gql`
    mutation create_theme($nom_theme: String!) {
      createTheme(nom_theme: $nom_theme) {
        nom_theme
      }
    }
  `;
  const [addTheme, { data }] = useMutation(ADD_THEME);
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
                  nom_theme: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  addTheme({
                    variables: {
                      nom_theme: values.nom_theme,
                    },
                  });
                  alert(JSON.stringify(values, null, 2));
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
                        <label htmlFor="Nom" className="col-form-label">
                          Nom Theme:
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="nom_theme"
                          onChange={handleChange}
                          value={values.nom_theme}
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
