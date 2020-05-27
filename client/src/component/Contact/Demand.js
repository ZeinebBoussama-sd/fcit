import React from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Formik } from "formik";
import { GetFormation } from "../../Admin/GraphQl/Query";

function Demand() {
  const ADD_DEMANDE = gql`
    mutation create_demande(
      $FormationId: Int
      $date_deb_prevue: Date
      $duree_prevu: Int
      $prix_prevu: Float
      $horaire_prevu: String
      $nom_client: String!
      $email_client: String!
      $tel_client: Int!
      $adr_client: String
      $personne: Int
      $societe: Int
    ) {
      createDemande(
        FormationId: $FormatioId

        date_deb_prevue: $date_deb_prevue
        duree_prevu: $duree_prevu
        prix_prevu: $prix_prevu
        horaire_prevu: $horaire_prevu
        nom_client: $nom_client
        email_client: $email_client
        tel_client: $tel_client
        adr_client: $adr_client
        personne: $personne
        societe: $societe
      ) {
        FormationId
        date_deb_prevue
        duree_prevu
        prix_prevu
        horaire_prevu
        nom_client
        email_client
        tel_client
        adr_client
        personne {
          cin_p
        }
        societe {
          mat_fisc_sc
        }
      }
    }
  `;
  const [AddDemande] = useMutation(ADD_DEMANDE);
  const { loading, error, data } = useQuery(GetFormation);
  console.log("getFormation", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  return (
    <div className="container mt-11">
      <Formik
        initialValues={{
          nom_client: "",
          email_client: undefined,
          tel_client: undefined,
          adr_client: undefined,
          cin_p: undefined,
          mat_fisc_sc: undefined,
          PersonneId: undefined,
          SocieteId: undefined,
          FormationId: undefined,
          date_deb_prevue: undefined,
          duree_prevu: undefined,
          prix_prevu: undefined,
          horaire_prevu: undefined,
        }}
        onSubmit={async (values) => {
          try {
            await AddDemande({
              variables: {
                nom_client: values.nom_client,
                email_client: values.email_client,
                tel_client: values.tel_client,
                adr_client: values.adr_client,
                personne: values.cin_p ? values.cin_p : null,
                societe: values.mat_fisc_sc ? values.mat_fisc_sc : null,
                FormationId: values.FormationId
                  ? parseInt(values.FormationId)
                  : null,
                date_deb_prevue: values.date_deb_prevue,
                duree_prevu: values.duree_prevu,
                prix_prevu: values.prix_prevu,
                horaire_prevu: values.horaire_prevu,
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
                <label htmlFor="nom" className="col-form-label">
                  Nom Client:
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="nom_client"
                  onChange={handleChange}
                  value={values.nom_client}
                />
              </div>
              <div className="form-group">
                <label htmlFor="CIN" className="col-form-label">
                  CIN:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cin_p"
                  onChange={handleChange}
                  value={values.cin_p}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mat_fisc_sc" className="col-form-label">
                  Matricule Fiscale:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="mat_fisc_sc"
                  onChange={handleChange}
                  value={values.mat_fisc_sc}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email" className="col-form-label">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email_client"
                  onChange={handleChange}
                  value={values.email_client}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Tel" className="col-form-label">
                  Telephone:
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="tel_client"
                  onChange={handleChange}
                  value={values.tel_client}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Adresse" className="col-form-label">
                  Adresse:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="adr_client"
                  onChange={handleChange}
                  value={values.adr_client}
                />
              </div>
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
                  type="text"
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
                  type="text"
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
                  type="text"
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
                  Add formation
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
export default Demand;
