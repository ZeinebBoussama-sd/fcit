import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { ADD_SUPPORT } from '../GraphQl/Mutation';

function AddSupport(props) {
  const [addSupport, res] = useMutation(ADD_SUPPORT);
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#exampleModal'
        data-whatever='@getbootstrap'
      >
        Add Support
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
                Add Support
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
                  titre_support: '',
                  date_support: '',
                }}
                onSubmit={async (values) => {
                  try {
                    await addSupport({
                      variables: {
                        titre_support: values.titre_support,
                        date_support: values.date_support,
                      },
                    });
                  } catch (e) {
                    console.error(e.message);
                  }
                  props.refetch();
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
                        <label htmlFor='titre' className='col-form-label'>
                          Titre Support:
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='titre_support'
                          onChange={handleChange}
                          value={values.titre_support}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='date' className='col-form-label'>
                          Date Support:
                        </label>
                        <input
                          required
                          type='date'
                          className='form-control'
                          id='date_support'
                          onChange={handleChange}
                          value={values.date_support}
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
                          Add Support
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
export default AddSupport;
