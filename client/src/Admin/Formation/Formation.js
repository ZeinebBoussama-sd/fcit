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
            <th scope='col'>intitule</th>
            <th scope='col'>duree_formation</th>
            <th scope='col'>horaire_formation</th>
            <th scope='col'>nbre_min_part</th>
            <th scope='col'>nbre_max_part</th>
            <th scope='col'>description_formation</th>
            <th scope='col'>catagorie_formation</th>
            <th scope='col'>prix_formation</th>
            <th scope='col'>prerequis</th>
            <th scope='col'>participant</th>
            <th scope='col'>theme</th>
          </tr>
        </thead>
        <tbody>
          {data.allFormations &&
            data.allFormations.map((formation, idx) => (
              <tr key={idx}>
                <th scope='row'>{idx}</th>
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
                <td>{formation.theme.nom_theme}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Formation;
