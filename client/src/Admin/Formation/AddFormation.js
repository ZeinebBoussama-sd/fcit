import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik } from "formik";
import { GetTheme } from "../GraphQl/Query";
import { ADD_FORMATION } from "../GraphQl/Mutation";

function AddFormation(props) {
  useEffect(() => {
    console.log("submit");
  }, []);

  const [active, setactive] = useState(false);

  const [addFormation] = useMutation(ADD_FORMATION);
  const { loading, error, data } = useQuery(GetTheme);
  console.log("getTheme", data);
  console.log("active", active);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
        onClick={() => setactive(true)}
      >
        Add Formation
      </button>

      <div
        className={`modal fade ${active ? "show" : ""}`}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-modal={`${active ? "true" : "false"}`}
        //aria-labelledby='exampleModalLabel'
        aria-hidden={`${active ? "false" : "true"}`}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Formation
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
                  code_formation: "",
                  intitule: "",
                  duree_formation: undefined,
                  nbre_min_part: undefined,
                  description_formation: undefined,
                  catagorie_formation: undefined,
                  prix_formation: undefined,
                  prerequis: undefined,
                  participant: undefined,
                  ThemeCodeTheme: "",
                }}
                onSubmit={async (values) => {
                  try {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    await addFormation({
                      variables: {
                        code_formation: values.code_formation,
                        intitule: values.intitule,
                        duree_formation: values.duree_formation,
                        nbre_min_part: values.nbre_min_part,
                        description_formation: values.description_formation,
                        catagorie_formation: values.catagorie_formation,
                        prix_formation: values.prix_formation,
                        prerequis: values.prerequis,
                        participant: values.participant,
                        ThemeCodeTheme: values.ThemeCodeTheme,
                      },
                    });
                    alert(JSON.stringify(values, null, 2));
                    setactive(false);
                  } catch (e) {
                    console.log("e", e);
                  }
                  props.refetch();
                }}
                // validationSchema={Yup.object().shape({
                //   email: Yup.string().email().required('Required'),
                // })}
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
                        <label
                          htmlFor="code_formation"
                          className="col-form-label"
                        >
                          Code formation:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="code_formation"
                          onChange={handleChange}
                          value={values.code_formation}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="intitulee" className="col-form-label">
                          Intitule:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="intitule"
                          onChange={handleChange}
                          value={values.intitule}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Durée" className="col-form-label">
                          Durée:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="duree_formation"
                          onChange={handleChange}
                          value={values.duree_formation || ""}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="N.Min.Part" className="col-form-label">
                          N.Min.Part:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="nbre_min_part"
                          onChange={handleChange}
                          value={values.nbre_min_part || ""}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Description" className="col-form-label">
                          Description:
                        </label>
                        <textarea
                          rows="4"
                          type="text"
                          className="form-control"
                          id="description_formation"
                          onChange={handleChange}
                          value={values.description_formation || ""}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Catagorie" className="col-form-label">
                          Catagorie:
                        </label>
                        <select
                          className="form-control"
                          id="catagorie_formation"
                          onChange={handleChange}
                          value={values.catagorie_formation || ""}
                        >
                          <option>Best</option>
                          <option>Classique</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prix" className="col-form-label">
                          Prix:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="prix_formation"
                          onChange={handleChange}
                          value={values.prix_formation || ""}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Prerequis" className="col-form-label">
                          Prerequis:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="prerequis"
                          onChange={handleChange}
                          value={values.prerequis || ""}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Participant" className="col-form-label">
                          Participant:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="participant"
                          onChange={handleChange}
                          value={values.participant || ""}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Theme">Theme</label>
                        <select
                          className="form-control"
                          onChange={handleChange}
                          value={values.ThemeCodeTheme}
                          id="ThemeCodeTheme"
                        >
                          <option value="">---choose theme----</option>
                          {data.allThemes.map((theme) => {
                            return (
                              <option
                                key={theme.code_theme}
                                value={theme.code_theme}
                              >
                                {theme.code_theme}
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
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          Add formation
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
export default AddFormation;
