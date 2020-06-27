import React from 'react';
import { Formik, Field } from 'formik';
import { DropzoneField } from '../component/DropzoneField.tsx';
import { UPLOAD_FILE } from '../GraphQl/Mutation';
import { useMutation } from '@apollo/react-hooks';

function Tes(props) {
  const [UploadFile, res] = useMutation(UPLOAD_FILE);

  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#exampleModal'
        data-whatever='@getbootstrap'
      >
        Test upload File!
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
                Test Upload File
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
                  file: [],
                }}
                onSubmit={async (values) => {
                  try {
                    //  new Promise((resolve) => setTimeout(resolve, 500));
                    await UploadFile({
                      variables: {
                        file: values.file,
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
                    initialValues,
                    setFieldValue,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                  } = props;

                  return (
                    <form onSubmit={handleSubmit}>
                      <div className='form-group'>
                        <label htmlFor='CV' className='col-form-label'>
                          CV
                        </label>
                        <div className='input-group mb-3'>
                          <Field
                            type='file'
                            name='file'
                            component={DropzoneField}
                          />
                          {values.cv_f && <img src={values.cv_f.preview} />}
                        </div>
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
                          Ajouter
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
export default Tes;
