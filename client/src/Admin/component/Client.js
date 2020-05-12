import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

function Client() {
  const { loading, error, data } = useQuery(gql`
    {
      allClient {
        id
        nom_client
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}(</p>;
  console.log("data", data);
  return (
    <div className=" mt-9 ">
      {data.allClient.map(({ id, nom_client }) => (
        <div key={id}>
          <p>{id + "-" + nom_client}</p>
        </div>
      ))}
    </div>
  );
}
export default Client;
