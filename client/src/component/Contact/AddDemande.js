import React from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik } from "formik";
import { GetFormation } from "../../Admin/GraphQl/Query";

function AddDemande(props) {
  const ADD_DEMANDE = gql`
    mutation create_demande(
      $FormationId: Int!
      $ClientId: Int!
      $date_deb_prevue: Date
      $duree_prevu: Int
      $prix_prevu: Float
      $horaire_prevu: String
    ) {
      createDemandeFormation(
        FormationId: $FormationId
        ClientId: $ClientId
        date_deb_prevue: $date_deb_prevue
        duree_prevu: $duree_prevu
        prix_prevu: $prix_prevu
        horaire_prevu: $horaire_prevu
      ) {
        formation {
          id
        }
        client {
          id
        }
        date_deb_prevue
        duree_prevu
        prix_prevu
        horaire_prevu
      }
    }
  `;
  const [AddDemande] = useMutation(ADD_DEMANDE);
  const { loading, error, data } = useQuery(GetFormation);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;

  return (
    <div>
      <Formik
        initialValues={{
          FormationId: 0,
          date_deb_prevue: undefined,
          duree_prevu: undefined,
          prix_prevu: undefined,
          horaire_prevu: undefined,
        }}
        onSubmit={async (values) => {
          try {
            debugger;
            await AddDemande({
              variables: {
                FormationId: values.FormationId
                  ? parseInt(values.FormationId)
                  : 0,
                date_deb_prevue: values.date_deb_prevue,
                duree_prevu: values.duree_prevu,
                prix_prevu: values.prix_prevu,
                horaire_prevu: values.horaire_prevu,
                ClientId: parseInt(props.clientID),
              },
            });
            alert(JSON.stringify(values, null, 2));
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
              <div className="form-group">
                <label htmlFor="Formation">Formation</label>
                <select
                  className="form-control"
                  onChange={handleChange}
                  value={values.FormationId}
                  id="FormationId"
                >
                  <option value="">---choose Formation----</option>
                  {data.allFormations.map((formation) => {
                    return (
                      <option key={formation.id} value={formation.id}>
                        {formation.intitule}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label
                  htmlFor="Date de commencement"
                  className="col-form-label"
                >
                  Date de commencement:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date_deb_prevue"
                  onChange={handleChange}
                  value={values.date_deb_prevue}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Durée" className="col-form-label">
                  Durée:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="duree_prevu"
                  onChange={handleChange}
                  value={values.duree_prevu}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Prix" className="col-form-label">
                  Prix :
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="prix_prevu"
                  onChange={handleChange}
                  value={values.prix_prevu}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Horaire" className="col-form-label">
                  Horaire:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="horaire_prevu"
                  onChange={handleChange}
                  value={values.horaire_prevu}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Ajouter Demande
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
export default AddDemande;
