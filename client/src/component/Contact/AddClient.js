import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { ADD_CLIENT } from '../../Admin/GraphQl/Mutation';

function AddClient(props) {
  const [addClient, res] = useMutation(ADD_CLIENT);

  const ClientType = props.ClientType;
  const getNumber = props.getNumber;
  console.log('res', res);
  props.setResClient(res.data);
  return (
    <Formik
      enableReinitialize
      initialValues={{
        code_client: '',
        nom_client: '',
        email_client: '',
        tel_client: undefined,
        adr_client: undefined,
        cin_p: ClientType === 'person' ? getNumber : undefined,
        mat_fisc_sc: ClientType === 'societe' ? getNumber : undefined,
        PersonneId: undefined,
        SocieteId: undefined,
      }}
      onSubmit={async (values) => {
        try {
          await addClient({
            variables: {
              code_client: values.code_client,
              nom_client: values.nom_client,
              email_client: values.email_client,
              tel_client: values.tel_client,
              adr_client: values.adr_client,
              personne: values.cin_p ? values.cin_p : null,
              societe: values.mat_fisc_sc ? values.mat_fisc_sc : null,
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
            {ClientType === 'person' && (
              <div className='form-group'>
                <label htmlFor='CIN' className='col-form-label'>
                  CIN:
                </label>
                <input
                  disabled
                  type='number'
                  className='form-control'
                  id='cin_p'
                  onChange={handleChange}
                  value={values.cin_p}
                />
              </div>
            )}
            {ClientType === 'societe' && (
              <div className='form-group'>
                <label htmlFor='mat_fisc_sc' className='col-form-label'>
                  Matricule Fiscale:
                </label>
                <input
                  disabled
                  type='number'
                  className='form-control'
                  id='mat_fisc_sc'
                  onChange={handleChange}
                  value={values.mat_fisc_sc}
                />
              </div>
            )}
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
                id='adr_client'
                onChange={handleChange}
                value={values.adr_client}
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
  );
}
export default AddClient;
