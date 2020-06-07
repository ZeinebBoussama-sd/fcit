import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { ADD_CLIENT } from '../GraphQl/Mutation';
import { counterList } from '../../Utils/Enums';

function AddClient() {
  const [addClient, res] = useMutation(ADD_CLIENT);

  return (
    <div>
      <button
        type='button'
        className='btn btn-primary mb-2'
        data-toggle='modal'
        data-target='#exampleModal'
        data-whatever='@getbootstrap'
      >
        Ajouter Client
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
              <div>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Ajouter Client
                </h5>
              </div>
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
                  code_client: '',
                  nom_client: '',
                  email_client: undefined,
                  tel_client: undefined,
                  adr_client: undefined,
                  pays_client: undefined,
                  cin_p: undefined,
                  mat_fisc_sc: '',
                  responsable: '',
                  PersonneId: undefined,
                  SocieteId: undefined,
                }}
                onSubmit={async (values) => {
                  try {
                    // new Promise((resolve) => setTimeout(resolve, 500));
                    await addClient({
                      variables: {
                        code_client: values.code_client,
                        nom_client: values.nom_client,
                        email_client: values.email_client,
                        tel_client: values.tel_client,
                        adr_client: values.adr_client,
                        pays_client: values.pays_client,
                        personne: values.cin_p ? values.cin_p : null,
                        societe: values.mat_fisc_sc,
                        responsable: values.responsable,
                      },
                    });
                  } catch (e) {
                    console.error(e.message);
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
                      <div className='form-group'>
                        <label htmlFor='code' className='col-form-label'>
                          Code Client:
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='code_client'
                          onChange={handleChange}
                          value={values.code_client}
                        />
                      </div>
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
                        <label htmlFor='mat_fisc_sc' className='col-form-label'>
                          Matricule Fiscale:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='mat_fisc_sc'
                          onChange={handleChange}
                          value={values.mat_fisc_sc}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='responsable' className='col-form-label'>
                          Responsable:
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='responsable'
                          onChange={handleChange}
                          value={values.responsable}
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='Email' className='col-form-label'>
                          Email
                        </label>
                        <input
                          required
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
                          type='tel'
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
                          id='adr_client'
                          onChange={handleChange}
                          value={values.adr_client}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='pays_client'>Paye</label>
                        <select
                          className='form-control'
                          onChange={handleChange}
                          value={values.pays_client}
                          id='pays_client'
                        >
                          <option value=''>---choose country----</option>
                          {counterList.map((country, idx) => {
                            return (
                              <option key={idx} value={country}>
                                {country}
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
                          Fermer
                        </button>
                        <button
                          type='submit'
                          disabled={isSubmitting}
                          className='btn btn-primary'
                        >
                          AddClient
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
