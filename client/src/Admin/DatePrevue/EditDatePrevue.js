import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_DATEPREVUE } from "../GraphQl/Mutation";
import { GET_DEMANDE_FORMATIONS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { DatePrevueSchema } from "../../Utils/Validation";

function EditDatePrevue(props) {
  const GetDemandePrevue = useQuery(GET_DEMANDE_FORMATIONS);
  const [updateDatePrevue, res] = useMutation(UPDATE_DATEPREVUE);
  const dateprevue = props.dateprevue ? props.dateprevue : null;

  const close = () => {
    props.setEdit(false);
  };
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        enableReinitialize
        initialValues={{
          date_prev: dateprevue && dateprevue.date_prev,

          DemandeFormationCodeDemande:
            dateprevue && dateprevue.demandeformation.code_demande,
        }}
        validationSchema={DatePrevueSchema}
        onSubmit={async (values) => {
          try {
            await updateDatePrevue({
              variables: {
                date_prev: props.id,
                DemandeFormationCodeDemande: values.DemandeFormationCodeDemande,
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
          console.log(props);
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Date" className="col-form-label">
                  Date
                </label>
                <Field name="date_prev" type="date" disabled />
              </div>

              <div className="form-group">
                <label htmlFor="Formation">Client:</label>

                <Field
                  component="select"
                  className={
                    hasChanged
                      ? errors.ClientCodeClient
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  className="form-control"
                  name="ClientCodeClient"
                  multiple={false}
                >
                  <option value="">---Choose Demande----</option>
                  {GetDemandePrevue.data &&
                    GetDemandePrevue.data.allDemandeFormations.map(
                      (demandeformation) => {
                        return (
                          <option
                            key={demandeformation.code_demande}
                            value={demandeformation.code_demande}
                          >
                            {demandeformation.code_demande}
                          </option>
                        );
                      }
                    )}
                </Field>
                {errors.DemandeFormationCodeDemande &&
                touched.DemandeFormationCodeDemande ? (
                  <div className="text-danger">
                    {errors.DemandeFormationCodeDemande}
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
export default EditDatePrevue;
