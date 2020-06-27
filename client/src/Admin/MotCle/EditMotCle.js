import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik, Field } from "formik";
import { UPDATE_MOT_CLE } from "../GraphQl/Mutation";
import { GET_FORMATION } from "../GraphQl/Query";
import deepEqual from "lodash.isequal";

import { MotCleSchema } from "../../Utils/Validation";

function EditMotCle(props) {
  const GetFormation = useQuery(GET_FORMATION);
  const [UpdateMotCle, res] = useMutation(UPDATE_MOT_CLE);
  const motcle = props.motcle ? props.motcle : null;
  const id = props.id;
  const close = () => {
    props.setEdit(false);
  };
  return (
    <div className="card-body" id="navbarSupportedContent">
      <Formik
        enableReinitialize
        initialValues={{
          motcle: motcle && motcle.motcle,
          FormationCIFormation:
            motcle && motcle.formation && motcle.formation.CI_Formation,
        }}
        validationSchema={MotCleSchema}
        onSubmit={async (values) => {
          try {
            await UpdateMotCle({
              variables: {
                motcle: values.motcle,
                FormationCIFormation: parseInt(values.FormationCIFormation),
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
