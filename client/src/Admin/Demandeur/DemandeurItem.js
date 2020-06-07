import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_DEMANDE_FORMATION } from '../GraphQl/Query';
function DemandeurItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_DEMANDE_FORMATION, {
    variables: { code_demande: id },
  });
  return (
    <div className='container mt-11 '>
      <div className='card container'>
        <div className='row'>
          <b className='col-2'>code:</b>
          <p className='col'>
            {data &&
              data.demandeformation &&
              data.demandeformation.code_demande}
          </p>
        </div>
        <div className='row'>
          <b className='col-2'>date_demande:</b>
          <p className='col'>{data && data.demandeformation.date_demande}</p>
        </div>
        <div className='row'>
          <b className='col-2'>duree_prevu:</b>
          <p className='col'>{data && data.demandeformation.duree_prevu}</p>
        </div>
        <div className='row'>
          <b className='col-2'>etat_demande:</b>
          <p className='col'>{data && data.demandeformation.etat_demande}</p>
        </div>
        <div className='row'>
          <b className='col-2'>hr_deb_j_prev:</b>
          <p className='col'>{data && data.demandeformation.hr_deb_j_prev}</p>
        </div>
      </div>
    </div>
  );
}
export default DemandeurItem;
