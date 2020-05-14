import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';

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
      $Participant: String
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
        Participant: $Participant
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
        description_formation
        ThemeId
      }
    }
  `;
  let input;
  const [addFormation, { data }] = useMutation(ADD_FORMATION);
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
                  duree_formation: null,
                  horaire_formation: null,
                  nbre_min_part: null,
                  nbre_max_part: null,
                  description_formation: null,
                  catagorie_formation: null,
                  prix_formation: null,
                  prerequis: null,
                  Participant: null,
                  ThemeId: null,
                }}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  debugger;
                  addFormation({
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
                      Participant: values.Participant,
                      ThemeId: values.ThemeId,
                    },
                  });
                  alert(JSON.stringify(values, null, 2));
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
                        <label
                          htmlFor='intitule-name'
                          className='col-form-label'
                        >
                          intitule:
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
                        <label
                          htmlFor='duree_formation-text'
                          className='col-form-label'
                        >
                          duree_formation:
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='duree_formation'
                          onChange={handleChange}
                          value={values.duree_formation}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='horaire_formation-name'
                          className='col-form-label'
                        >
                          horaire_formation:
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='horaire_formation'
                          onChange={handleChange}
                          value={values.horaire_formation}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='nbre_min_part-text'
                          className='col-form-label'
                        >
                          nbre_min_part:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='nbre_min_part'
                          onChange={handleChange}
                          value={values.nbre_min_part}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='nbre_max_part-name'
                          className='col-form-label'
                        >
                          nbre_max_part:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='nbre_max_part'
                          onChange={handleChange}
                          value={values.nbre_max_part}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='description_formation-text'
                          className='col-form-label'
                        >
                          description_formation:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='description_formation'
                          onChange={handleChange}
                          value={values.description_formation}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='catagorie_formation-name'
                          className='col-form-label'
                        >
                          catagorie_formation:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='catagorie_formation'
                          onChange={handleChange}
                          value={values.catagorie_formation}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='prix_formation-text'
                          className='col-form-label'
                        >
                          prix_formation:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='prix_formation'
                          onChange={handleChange}
                          value={values.prix_formation}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='prerequis-text'
                          className='col-form-label'
                        >
                          prerequis:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='prerequis'
                          onChange={handleChange}
                          value={values.prerequis}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='participant-text'
                          className='col-form-label'
                        >
                          participant:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='participant'
                          onChange={handleChange}
                          value={values.participant}
                        />
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
