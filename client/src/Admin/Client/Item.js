import React from 'react';

function Item(props) {
  debugger;
  const data = props.client ? props.client : null;
  return (
    <div className='card-body'>
      <div className='row'>
        <b className='col-2'>Code:</b>
        <p className='col'>{data && data.code_client}</p>
      </div>
      <div className='row'>
        <b className='col-2'>Nom:</b>
        <p className='col'>{data && data.nom_client}</p>
      </div>
      {data && data.personne && (
        <div className='row'>
          <b className='col-2'>Cin:</b>
          <p className='col'>{data && data.personne.cin_p}</p>
        </div>
      )}
      {data && data.societe && (
        <>
          <div className='row'>
            <b className='col-2'>Mat-fisc-sc:</b>
            <p className='col'>{data && data.societe.mat_fisc_sc}</p>
          </div>
          <div className='row'>
            <b className='col-2'>Resposable:</b>
            <p className='col'>{data && data.societe.responsable}</p>
          </div>
        </>
      )}
      <div className='row'>
        <b className='col-2'>Email:</b>
        <p className='col'>{data && data.email_client}</p>
      </div>
      <div className='row'>
        <b className='col-2'>Telephone:</b>
        <p className='col'>{data && data.tel_client}</p>
      </div>
      <div className='row'>
        <b className='col-2'>Adress:</b>
        <p className='col'>{data && data.adr_client}</p>
      </div>
      <div className='row'>
        <b className='col-2'>Pay:</b>
        <p className='col'>{data && data.pays_client}</p>
      </div>
    </div>
  );
}
export default Item;
