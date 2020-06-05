import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetIngenieurPedagogique } from '../GraphQl/Query';
import AddIngenieurPedagogique from './AddIngenieurPedagogique';
function IngenieurPedagogique() {
  const { loading, error, data } = useQuery(GetIngenieurPedagogique);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  console.log(data);

  return (
    <div className='mt-11'>
      <AddIngenieurPedagogique />
      <div className='table-responsive'>
        <table className='table table-hover table-fixed'>
          <thead>
            <tr>
              <th scope='col' className='col-1'>
                #
              </th>
              <th scope='col' className='col-1'>
                Nom
              </th>
              <th scope='col' className='col-1'>
                {' '}
                Prenom
              </th>
              <th scope='col' className='col-1'>
                Cv
              </th>
              <th scope='col' className='col-3'>
                Email
              </th>
              <th scope='col' className='col-1'>
                Telephone
              </th>
              <th scope='col' className='col-1'>
                NSS
              </th>
              <th scope='col' className='col-1'>
                Salaire
              </th>
              <th scope='col' className='col-2'>
                Specialité
              </th>
            </tr>
          </thead>
          <tbody>
            {data.allIngenieurPedagogiques.map((ingenieur_pedagogique, idx) => (
              <tr key={idx}>
                <th className='col-1' scope='row'>
                  {idx + 1}
                </th>
                <td className='col-1'>{ingenieur_pedagogique.nom_ing}</td>
                <td className='col-1'>{ingenieur_pedagogique.prenom_ing}</td>
                <td className='col-1'>{ingenieur_pedagogique.cv_ing}</td>
                <td className='col-3'>{ingenieur_pedagogique.email_ing}</td>
                <td className='col-1'>{ingenieur_pedagogique.tel_ing}</td>
                <td className='col-1'>{ingenieur_pedagogique.NSS_ing}</td>
                <td className='col-1'>{ingenieur_pedagogique.salaire_ing}</td>
                <td className='col-2'>
                  {ingenieur_pedagogique.specialite_ing
                    ? ingenieur_pedagogique.specialite_ing
                    : '--'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default IngenieurPedagogique;
