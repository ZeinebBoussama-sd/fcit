import * as React from 'react';
import { FieldProps } from 'formik';
import Dropzone from 'react-dropzone';

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name },
  form: { setFieldValue },
  ...props
}) => {
  return (
    <Dropzone
      multiple={false}
      onDrop={([file]) => {
        setFieldValue(name, file);
        console.log(file);
      }}
      {...props}
    >
      {({ getRootProps, getInputProps }) => (
        <div className='container'>
          <div
            {...getRootProps({
              className: 'dropzone',
              onDrop: (event) => event.stopPropagation(),
            })}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
      )}
    </Dropzone>
  );
};
