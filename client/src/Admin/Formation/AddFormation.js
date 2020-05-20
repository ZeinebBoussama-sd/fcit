import React from 'react';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { GetTheme } from '../GraphQl/Query';

function AddFormation() {
  const ADD_FORMATION = gql`
    mutation create_formation(
      $intitule: String!
      $duree_formation: Int
      $horaire_formation: Int
      $nbre_min_part: Int
      $nbre_max_part: Int
      $description_formation: String
      $catagorie_formation: String
      $prix_formation: String
      $participant: String
      $prerequis: String
      $ThemeId: Int
    ) {
      createFormation(
        intitule: $intitule
        duree_formation: $duree_formation
        horaire_formation: $horaire_formation
        nbre_min_part: $nbre_min_part
        nbre_max_part: $nbre_max_part
        description_formation: $description_formation
        catagorie_formation: $catagorie_formation
        prix_formation: $prix_formation
        participant: $participant
        prerequis: $prerequis
        ThemeId: $ThemeId
      ) {
        intitule
        duree_formation
        horaire_formation
        nbre_min_part
        nbre_max_part
        description_formation
        catagorie_formation
        prix_formation
        participant
        prerequis
        ThemeId
      }
    }
  `;
  const [addFormation] = useMutation(ADD_FORMATION);
  const { loading, error, data } = useQuery(GetTheme);
  console.log('getTheme', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#exampleModal'
        data-whatever='@getbootstrap'
      >
        Add Formation
      </button>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Add Formation
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <Formik
                initialValues={{
                  intitule: '',
                  duree_formation: undefined,
                  horaire_formation: undefined,
                  nbre_min_part: undefined,
                  nbre_max_part: undefined,
                  description_formation: undefined,
                  catagorie_formation: undefined,
                  prix_formation: undefined,
                  prerequis: undefined,
                  participant: undefined,
                  ThemeId: undefined,
                }}
                onSubmit={async (values) => {
                  try {
                    await addFormation({
                      variables: {
                        intitule: values.intitule,
                        duree_formation: values.duree_formation,
                        horaire_formation: values.horaire_formation,
                        nbre_min_part: values.nbre_min_part,
                        nbre_max_part: values.nbre_max_part,
                        description_formation: values.description_formation,
                        catagorie_formation: values.catagorie_formation,
                        prix_formation: values.prix_formation,
                        prerequis: values.prerequis,
                        participant: values.participant,
                        ThemeId: values.ThemeId
                          ? parseInt(values.ThemeId)
                          : null,
                      },
                    });
                    alert(JSON.stringify(values, null, 2));
                  } catch (e) {
                    console.log('e', e);
                  }
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
                      <div className='form-group'>
                        <label htmlFor='intitulee' className='col-form-label'>
                          Intitule:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='intitule'
                          onChange={handleChange}
                          value={values.intitule}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Durée' className='col-form-label'>
                          Durée:
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='duree_formation'
                          onChange={handleChange}
                          value={values.duree_formation || ''}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Horaire' className='col-form-label'>
                          Horaire:
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='horaire_formation'
                          onChange={handleChange}
                          value={values.horaire_formation || ''}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='N.Min.Part' className='col-form-label'>
                          N.Min.Part:
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='nbre_min_part'
                          onChange={handleChange}
                          value={values.nbre_min_part || ''}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='N.Max.Part' className='col-form-label'>
                          N.Max.Part:
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='nbre_max_part'
                          onChange={handleChange}
                          value={values.nbre_max_part || ''}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Description' className='col-form-label'>
                          Description:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='description_formation'
                          onChange={handleChange}
                          value={values.description_formation || ''}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Catagorie' className='col-form-label'>
                          Catagorie:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='catagorie_formation'
                          onChange={handleChange}
                          value={values.catagorie_formation || ''}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Prix' className='col-form-label'>
                          Prix:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='prix_formation'
                          onChange={handleChange}
                          value={values.prix_formation || ''}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Prerequis' className='col-form-label'>
                          Prerequis:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='prerequis'
                          onChange={handleChange}
                          value={values.prerequis || ''}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Participant' className='col-form-label'>
                          Participant:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='participant'
                          onChange={handleChange}
                          value={values.participant || ''}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Theme'>Theme</label>
                        <select
                          className='form-control'
                          onChange={handleChange}
                          value={values.ThemeId}
                          id='ThemeId'
                        >
                          <option value=''>---chosse theme----</option>
                          {data.allThemes.map((theme) => {
                            return (
                              <option key={theme.id} value={theme.id}>
                                {theme.nom_theme}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-secondary'
                          data-dismiss='modal'
                        >
                          Close
                        </button>
                        <button
                          type='submit'
                          disabled={isSubmitting}
                          className='btn btn-primary'
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
