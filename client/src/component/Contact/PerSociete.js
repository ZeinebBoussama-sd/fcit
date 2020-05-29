import React, { useState } from "react";
import { Formik } from "formik";
import { useLazyQuery } from "@apollo/react-hooks";
import { GetPerson, GetSociete } from "../../Admin/GraphQl/Query";
import AddClient from "../../Admin/Client/AddClient";

function PerSociete() {
  const [person, setPerson] = useState("");
  console.log("person", person);
  const [getPerson, res] = useLazyQuery(GetPerson);
  const [getSociete, res2] = useLazyQuery(GetSociete);
  console.log("res", res);
  console.log("res2", res2);
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
          onClick={() => setPerson("person")}
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
          onClick={() => setPerson("societe")}
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          Societe
        </label>
      </div>
      {person === "person" && <p>Entrer votre carte d'identité</p>}
      {person === "societe" && (
        <p>Entrer la matricule fiscale de votre societé</p>
      )}
      {(person === "person" || person === "societe") && (
        <Formik
          initialValues={{
            cin: undefined,
          }}
          onSubmit={async (values) => {
            try {
              if (person === "person") {
                await getPerson({
                  variables: {
                    cin_p: values.cin,
                  },
                });
              } else if (person === "societe") {
                await getSociete({
                  variables: {
                    mat_fisc_sc: values.cin,
                  },
                });
              }
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
      {person === "person" && res.data && (
        <div>
          <p>
            {res.data.personne
              ? res.data.personne.client.nom_client
              : "Not found person"}
          </p>
        </div>
      )}
      {person === "societe" && res2.data && (
        <div>
          <p>
            {res2.data.societe
              ? res2.data.societe.client.nom_client
              : "Not found societe"}
          </p>
          {!res2.data.societe && <AddClient />}
        </div>
      )}
    </div>
  );
}
export default PerSociete;
