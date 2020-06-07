import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_CLIENT } from '../GraphQl/Query';
function ClientItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { code_client: id },
  });

  return (
    <div className='container mt-11 '>
      <div className='card container'>
        <div className='row'>
          <b className='col-1'>code:</b>
          <p className='col'>{data && data.client.code_client}</p>
        </div>
        <div className='row'>
          <b className='col-1'>nom:</b>
          <p className='col'>{data && data.client.nom_client}</p>
        </div>
        <div className='row'>
          <b className='col-1'>email:</b>
          <p className='col'>{data && data.client.email_client}</p>
        </div>
        <div className='row'>
          <b className='col-1'>tel:</b>
          <p className='col'>{data && data.client.tel_client}</p>
        </div>
        <div className='row'>
          <b className='col-1'>adress:</b>
          <p className='col'>{data && data.client.adr_client}</p>
        </div>
      </div>
    </div>
  );
}
export default ClientItem;
