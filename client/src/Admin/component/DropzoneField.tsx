import * as React from 'react';
import { FieldProps } from 'formik';
import Dropzone from 'react-dropzone';

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name },
  form: { setFieldValue },
  ...props
}) => {
  const [files, setFiles] = React.useState([]);
  return (
    <Dropzone
      multiple={false}
      onDrop={([file]) => {
        debugger
        setFieldValue(name, file);
        console.log(file);
        console.log(URL.createObjectURL(file));
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
