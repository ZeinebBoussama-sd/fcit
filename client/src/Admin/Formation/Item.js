import React from 'react';
function Item(props) {
  const data = props.formation ? props.formation : null;
  return (
    <div className='mt-3 mb-3'>
      <div className='card container'>
        <div className='row mt-3'>
          <b className='col-3'>Code:</b>
          <p className='col'>{data && data.code_formation}</p>
        </div>
        <div className='row'>
          <b className='col-3'>Intitule:</b>
          <p className='col'>{data && data.intitule}</p>
        </div>
        <div className='row'>
          <b className='col-3'>Durée:</b>
          <p className='col'>{data && data.duree_formation}</p>
        </div>
        <div className='row'>
          <b className='col-3'>Nbre min de Personne:</b>
          <p className='col'>{data && data.nbre_min_part}</p>
        </div>
        <div className='row'>
          <b className='col-3'>Description:</b>
          <p className='col'>{data && data.description_formation}</p>
        </div>
        <div className='row'>
          <b className='col-3'>Categorie:</b>
          <p className='col'>{data && data.catagorie_formation}</p>
        </div>
        <div className='row'>
          <b className='col-3'>Prix:</b>
          <p className='col'>{data && data.prix_formation}</p>
        </div>
        <div className='row'>
          <b className='col-3'>Participant:</b>
          <p className='col'>{data && data.participant}</p>
        </div>
        <div className='row'>
          <b className='col-3'>Prérequis:</b>
          <p className='col'>{data && data.prerequis}</p>
        </div>
        <div className='row'>
          <b className='col-3'>Theme:</b>
          <p className='col'>{data && data.theme.nom_theme}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
