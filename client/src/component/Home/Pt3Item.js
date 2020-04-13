import React from 'react';

function Pt3Item(props) {
  const img = props.img ? props.img : '';
  const title = props.title ? props.title : '';
  const text = props.text ? props.text : '';
  const alt = props.alt ? props.alt : '';
  return (
    <div className='col-md-4  '>
      <center>
        <img
          src={img}
          alt={alt}
          className='rounded-circle'
          height='140px'
          width='140px'
          style={{ background: 'blue' }}
        />
        <h3 id='h3-color'>{title}</h3>
        <p>{text}</p>
      </center>
    </div>
  );
}
export default Pt3Item;
