import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { ADD_THEME } from '../GraphQl/Mutation';

function AddTheme() {
  const [addTheme, res] = useMutation(ADD_THEME);
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#exampleModal'
        data-whatever='@getbootstrap'
      >
        Add Theme
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
                Add Theme
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
                  code_theme: '',
                  nom_theme: '',
                }}
                onSubmit={async (values) => {
                  try {
                    await addTheme({
                      variables: {
                        code_theme: values.code_theme,
                        nom_theme: values.nom_theme,
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
                          Code Theme:
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='code_theme'
                          onChange={handleChange}
                          value={values.code_theme}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Nom' className='col-form-label'>
                          Nom Theme:
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='nom_theme'
                          onChange={handleChange}
                          value={values.nom_theme}
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
                          Add Theme
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
export default AddTheme;
