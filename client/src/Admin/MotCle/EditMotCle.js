import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_MOT_CLE } from "../GraphQl/Mutation";
import { GET_FORMATIONSOPTIONS } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { MotCleSchema } from "../../Utils/Validation";

function EditMotCle(props) {
  const GetFormation = useQuery(GET_FORMATIONSOPTIONS);
  const [UpdateMotCle, res] = useMutation(UPDATE_MOT_CLE);
  const motcle = props.motcle ? props.motcle : null;
  const close = () => {
    props.setEdit(false);
  };
  const formation =
    motcle &&
    motcle.formation &&
    motcle.formation.map((f) => {
      return f.CI_formation;
    });
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        enableReinitialize
        initialValues={{
          motcle: motcle && motcle.motcle,
          FormationCIFormation: formation,
        }}
        validationSchema={MotCleSchema}
        onSubmit={async (values) => {
          try {
            await UpdateMotCle({
              variables: {
                motcle: values.motcle,
                FormationCIFormation: values.FormationCIFormation.map((f) => {
                  return parseInt(f);
                }),
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
          console.log(" GetFormation.data.allFormations", GetFormation.data);
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
                  <div className="text-danger">{errors.motcle}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="Formation">Formation:</label>
                <Field
                  component={"select"}
                  multiple
                  className={
                    hasChanged
                      ? errors.FormationCIFormation
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="FormationCIFormation"
                >
                  <option value="">---Choose Formation:--</option>
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
                {errors.motcle && touched.motcle ? (
                  <div className="text-danger">{errors.motcle}</div>
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

export default EditMotCle;
