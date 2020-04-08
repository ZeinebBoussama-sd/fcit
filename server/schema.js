const { gql } = require("apollo-server");

const typeDefs = gql`
type Client{
id: ID!
nom_client : String
email_client :String 
tel_client:int
Adr_client:String
}
type 
`;

module.exports = typeDefs;
