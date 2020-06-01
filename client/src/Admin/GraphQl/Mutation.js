import { gql } from "apollo-boost";

export const ADD_FORMATION = gql`
  mutation create_formation(
    $intitule: String!
    $duree_formation: Int
    $horaire_formation: Int
    $nbre_min_part: Int
    $nbre_max_part: Int
    $description_formation: String
    $catagorie_formation: String
    $prix_formation: String
    $participant: String
    $prerequis: String
    $ThemeId: Int
  ) {
    createFormation(
      intitule: $intitule
      duree_formation: $duree_formation
      horaire_formation: $horaire_formation
      nbre_min_part: $nbre_min_part
      nbre_max_part: $nbre_max_part
      description_formation: $description_formation
      catagorie_formation: $catagorie_formation
      prix_formation: $prix_formation
      participant: $participant
      prerequis: $prerequis
      ThemeId: $ThemeId
    ) {
      intitule
      duree_formation
      horaire_formation
      nbre_min_part
      nbre_max_part
      description_formation
      catagorie_formation
      prix_formation
      participant
      prerequis
      ThemeId
    }
  }
`;
