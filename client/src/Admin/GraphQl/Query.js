import { gql } from 'apollo-boost';

export const QueryFormation = gql`
  {
    allFormations {
      id
      intitule
      duree_formation
      horaire_formation
      nbre_min_part
      nbre_max_part
      description_formation
      catagorie_formation
      prix_formation
      prerequis
      participant
      theme {
        nom_theme
      }
    }
  }
`;

export const QueryClient = gql`
  {
    allClients {
      id
      nom_client
      email_client
      tel_client
      Adr_client
      personne {
        cin_p
      }
      societe {
        mat_fisc_sc
      }
    }
  }
`;
