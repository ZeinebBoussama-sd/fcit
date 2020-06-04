import React from "react";
import { Formik } from "formik";

function PerSociete(props) {
  const getNumber = props.getNumber ? props.getNumber : "";
  return (
    <div className="">
      <h1>Demande:</h1>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
          onClick={() => props.setPerson("person")}
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Personne
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
          onClick={() => props.setPerson("societe")}
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          Societe
        </label>
      </div>
      {props.person === "person" && <p>Entrer votre carte d'identité</p>}
      {props.person === "societe" && (
        <p>Entrer la matricule fiscale de votre societé</p>
      )}
      {(props.person === "person" || props.person === "societe") && (
        <Formik
          enableReinitialize
          initialValues={{
            cin: getNumber,
          }}
          onSubmit={async (values) => {
            try {
              if (props.person === "person") {
                await props.getPerson({
                  variables: {
                    cin_p: values.cin,
                  },
                });
              } else if (props.person === "societe") {
                await props.getSociete({
                  variables: {
                    mat_fisc_sc: values.cin,
                  },
                });
              }
              props.setNumber(values.cin);
            } catch (e) {
              console.log("e", e);
            }
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
                <input
                  required
                  type="number"
                  className="form-control"
                  id="cin"
                  onChange={handleChange}
                  value={values.cin}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Suivant
                </button>
              </form>
            );
          }}
        </Formik>
      )}
    </div>
  );
}
export default PerSociete;
