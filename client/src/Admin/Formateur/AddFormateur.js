import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { ADD_FORMATEUR } from '../GraphQl/Mutation';

function AddFormateur() {
  const [AddFormateur, res] = useMutation(ADD_FORMATEUR);
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#exampleModal'
        data-whatever='@getbootstrap'
      >
        Ajouter Formateur
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
                Ajouter Formateur
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
                  code_formateur: '',
                  nom_f: '',
                  prenom_f: '',
                  classe_f: undefined,
                  fonction_f: undefined,
                  cv_f: undefined,
                  email_f: '',
                  tel_f: undefined,
                  NSS: undefined,
                  salaire_f: undefined,
                  adr_f: undefined,
                  date_dajout: undefined,
                  cin_f: undefined,
                  copie_cin: undefined,
                  passeport_f: undefined,
                  copie_passeport: undefined,
                  visa_f: undefined,
                  val_visa: undefined,
                  tarif_f: undefined,
                  RIB_f: undefined,
                  copie_RIB: undefined,
                }}
                onSubmit={async (values) => {
                  try {
                    //  new Promise((resolve) => setTimeout(resolve, 500));
                    await AddFormateur({
                      variables: {
                        code_formateur: values.code_formateur,
                        nom_f: values.nom_f,
                        prenom_f: values.prenom_f,
                        classe_f: values.classe_f,
                        fonction_f: values.fonction_f,
                        cv_f: values.cv_f,
                        email_f: values.email_f,
                        tel_f: values.tel_f,
                        NSS: values.NSS,
                        salaire_f: values.salaire_f,
                        adr_f: values.adr_f,
                        date_dajout: values.date_dajout,
                        cin_f: values.cin_f,
                        copie_cin: values.copie_cin,
                        passeport_f: values.passeport_f,
                        copie_passeport: values.copie_passeport,
                        visa_f: values.visa_f,
                        val_visa: values.val_visa,
                        tarif_f: values.tarif_f,
                        RIB_f: values.RIB_f,
                        copie_RIB: values.copie_RIB,
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
                        <label htmlFor='Code' className='col-form-label'>
                          Code Formateur
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='code_formateur'
                          onChange={handleChange}
                          value={values.code_formateur}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Nom' className='col-form-label'>
                          Nom
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='nom_f'
                          onChange={handleChange}
                          value={values.nom_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Prenom' className='col-form-label'>
                          Prenom
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='prenom_f'
                          onChange={handleChange}
                          value={values.prenom_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Classe' className='col-form-label'>
                          Classe
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='classe_f'
                          onChange={handleChange}
                          value={values.classe_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Fonction ' className='col-form-label'>
                          Fonction
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='fonction_f'
                          onChange={handleChange}
                          value={values.fonction_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='CV' className='col-form-label'>
                          CV
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='cv_f'
                          onChange={handleChange}
                          value={values.cv_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Email' className='col-form-label'>
                          Email
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='email_f'
                          onChange={handleChange}
                          value={values.email_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Tel' className='col-form-label'>
                          Tel
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='tel_f'
                          onChange={handleChange}
                          value={values.tel_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='NSS' className='col-form-label'>
                          NSS
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='NSS'
                          onChange={handleChange}
                          value={values.NSS}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Salaire' className='col-form-label'>
                          Salaire
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='salaire_f'
                          onChange={handleChange}
                          value={values.salaire_f}
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='Adresse' className='col-form-label'>
                          Adresse
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='adr_f'
                          onChange={handleChange}
                          value={values.adr_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Date Ajout' className='col-form-label'>
                          Date Ajout
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          id='date_dajout'
                          onChange={handleChange}
                          value={values.date_dajout}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='cin-f' className='col-form-label'>
                          Cin f
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='cin_f'
                          onChange={handleChange}
                          value={values.cin_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='copie_cin' className='col-form-label'>
                          copie_cin
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='copie_cin'
                          onChange={handleChange}
                          value={values.copie_cin}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='passeport_f' className='col-form-label'>
                          passeport_f
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='passeport_f'
                          onChange={handleChange}
                          value={values.passeport_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          htmlFor='copie_passeport'
                          className='col-form-label'
                        >
                          copie_passeport
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='copie_passeport'
                          onChange={handleChange}
                          value={values.copie_passeport}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='visa_f' className='col-form-label'>
                          visa_f
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='visa_f'
                          onChange={handleChange}
                          value={values.visa_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='val_visa' className='col-form-label'>
                          val_visa
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          id='val_visa'
                          onChange={handleChange}
                          value={values.val_visa}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tarif_f' className='col-form-label'>
                          tarif_f
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='tarif_f'
                          onChange={handleChange}
                          value={values.tarif_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='RIB_f' className='col-form-label'>
                          RIB_f
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='RIB_f'
                          onChange={handleChange}
                          value={values.RIB_f}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='copie_RIB' className='col-form-label'>
                          copie_RIB
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          id='copie_RIB'
                          onChange={handleChange}
                          value={values.copie_RIB}
                        />
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
                          Ajouter Formateur
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
export default AddFormateur;
