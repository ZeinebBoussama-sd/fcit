import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function Admin() {
  const { loading, error, data } = useQuery(gql`
    {
      allClient {
        id
        nom_client
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className=' mt-9 '>
      hallo :
      {data.allClient.map(({ id, nom_client }) => (
        <p key={id}>{nom_client}</p>
      ))}
    </div>
  );
}
export default Admin;
