import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';

function AddClient() {
  const ADD_CLIENT = gql`
    mutation create_client(
      $nom_client: String!
      $email_client: String!
      $tel_client: Int!
      $Adr_client: String
      $personne: Int
      $societe: Int
    ) {
      createClient(
        nom_client: $nom_client
        email_client: $email_client
        tel_client: $tel_client
        Adr_client: $Adr_client
        personne: $personne
        societe: $societe
      ) {
        nom_client
        email_client
        tel_client
        Adr_client
        personne {
          cin_p
        }
      }
    }
  `;
  const [addClient, { data }] = useMutation(ADD_CLIENT);
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary mb-2'
        data-toggle='modal'
        data-target='#exampleModal'
        data-whatever='@getbootstrap'
      >
        Add Client
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
                Add Client
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
                  nom_client: '',
                  email_client: undefined,
                  tel_client: undefined,
                  Adr_client: undefined,
                  cin_p: undefined,
                  mat_fisc_sc: undefined,
                  PersonneId: undefined,
                  SocieteId: undefined,
                }}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));

                  addClient({
                    variables: {
                      nom_client: values.nom_client,
                      email_client: values.email_client,
                      tel_client: values.tel_client,
                      Adr_client: values.Adr_client,
                      personne: values.cin_p,
                      societe: values.mat_fisc_sc,
                    },
                  });
                }}
                //  validationSchema={Yup.object().shape({
                // nbre_min_part: Yup.string().string().required("Required"),
                //  })}
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
                        <label htmlFor='nom' className='col-form-label'>
                          Nom Client:
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='nom_client'
                          onChange={handleChange}
                          value={values.nom_client}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='CIN' className='col-form-label'>
                          CIN:
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='cin_p'
                          onChange={handleChange}
                          value={values.cin_p}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='Matricule Fiscale'
                          className='col-form-label'
                        >
                          Matricule Fiscale:
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='mat_fisc_sc'
                          onChange={handleChange}
                          value={values.mat_fisc_sc}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Email' className='col-form-label'>
                          Email
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          id='email_client'
                          onChange={handleChange}
                          value={values.email_client}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Tel' className='col-form-label'>
                          Telephone:
                        </label>
                        <input
                          required
                          type='number'
                          className='form-control'
                          id='tel_client'
                          onChange={handleChange}
                          value={values.tel_client}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Adresse' className='col-form-label'>
                          Adresse:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='Adr_client'
                          onChange={handleChange}
                          value={values.Adr_client}
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
                          Add Client
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
export default AddClient;
