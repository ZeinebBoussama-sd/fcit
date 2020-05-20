import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import AddFormation from './AddFormation';
import { GetFormation } from '../GraphQl/Query';

function Formation() {
  const { loading, error, data } = useQuery(GetFormation);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  return (
    <div className='mt-11 '>
      <AddFormation />
      <table className=' table table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Intitule</th>
            <th scope='col'>Durée</th>
            <th scope='col'>Horaire</th>
            <th scope='col'>N.Min.Part</th>
            <th scope='col'>N.Max.Part</th>
            <th scope='col'>Description</th>
            <th scope='col'>Catagorie</th>
            <th scope='col'>Prix</th>
            <th scope='col'>Prerequis</th>
            <th scope='col'>Participant</th>
            <th scope='col'>Theme</th>
          </tr>
        </thead>
        <tbody>
          {data.allFormations &&
            data.allFormations.map((formation, idx) => (
              <tr key={idx}>
                <th scope='row'>{idx + 1}</th>
                <td>{formation.intitule}</td>
                <td>{formation.duree_formation}</td>
                <td>{formation.horaire_formation}</td>
                <td>{formation.nbre_min_part}</td>
                <td>{formation.nbre_max_part}</td>
                <td>{formation.description_formation}</td>
                <td>{formation.catagorie_formation}</td>
                <td>{formation.prix_formation}</td>
                <td>{formation.prerequis}</td>
                <td>{formation.participant}</td>
                <td>{formation.theme && formation.theme.nom_theme}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Formation;
