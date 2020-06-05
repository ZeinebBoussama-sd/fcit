import { gql } from 'apollo-boost';

export const ADD_CLIENT = gql`
  mutation create_client(
    $code_client: String!
    $nom_client: String!
    $email_client: String!
    $pays_client: String!
    $tel_client: String!
    $adr_client: String!
    $personne: Int
    $societe: Int
  ) {
    createClient(
      code_client: $code_client
      nom_client: $nom_client
      email_client: $email_client
      tel_client: $tel_client
      pays_client: $pays_client
      adr_client: $adr_client
      personne: $personne
      societe: $societe
    ) {
      code_client
      nom_client
      email_client
      tel_client
      pays_client
      adr_client
      personne {
        cin_p
      }
      societe {
        mat_fisc_sc
      }
    }
  }
`;

export const ADD_FORMATION = gql`
  mutation create_formation(
    $code_formation: String!
    $intitule: String!
    $duree_formation: Int!
    $nbre_min_part: Int!
    $description_formation: String!
    $catagorie_formation: String!
    $prix_formation: Float!
    $participant: String!
    $prerequis: String!
    $ThemeCodeTheme: String!
  ) {
    createFormation(
      code_formation: $code_formation
      intitule: $intitule
      duree_formation: $duree_formation
      nbre_min_part: $nbre_min_part
      description_formation: $description_formation
      catagorie_formation: $catagorie_formation
      prix_formation: $prix_formation
      participant: $participant
      prerequis: $prerequis
      ThemeCodeTheme: $ThemeCodeTheme
    ) {
      code_formation
      intitule
      duree_formation
      nbre_min_part
      description_formation
      catagorie_formation
      prix_formation
      participant
      prerequis
      ThemeCodeTheme
    }
  }
`;
export const ADD_THEME = gql`
  mutation create_theme($code_theme: String!, $nom_theme: String!) {
    createTheme(code_theme: $code_theme, nom_theme: $nom_theme) {
      code_theme
      nom_theme
    }
  }
`;
export const ADD_SESSION = gql`
  mutation create_session(
    $code_session: String!
    $type_sess: String!
    $mode_session: String!
    $date_deb_sess: Date!
    $duree_sess: Int!
    $hr_deb_j: String!
    $hr_fin_j: String!
    $hr_j_session: String!
    $lieu_sess: String!
    $prix_session: Float
    $honoraire_sess: Float
    $frais_sejour: Float
    $frais_transport: Float
    $perdiem: Float
    $autres_frais: Float
    $note_eval_formateur: Int
    $ClientCodeClient: String
    $FormationCIFormation: Int
    $FormateurCodeFormateur: String
    $SupportCodeSupport: Int
  ) {
    createSession(
      code_session: $code_session
      mode_session: $mode_session
      duree_sess: $duree_sess
      hr_deb_j: $hr_deb_j
      hr_fin_j: $hr_fin_j
      hr_j_session: $hr_j_session
      honoraire_sess: $honoraire_sess
      frais_sejour: $frais_sejour
      frais_transport: $frais_transport
      perdiem: $perdiem
      autres_frais: $autres_frais
      note_eval_formateur: $note_eval_formateur
      type_sess: $type_sess
      date_deb_sess: $date_deb_sess
      lieu_sess: $lieu_sess
      prix_session: $prix_session
      ClientCodeClient: $ClientCodeClient
      FormationCIFormation: $FormationCIFormation
      FormateurCodeFormateur: $FormateurCodeFormateur
      SupportCodeSupport: $SupportCodeSupport
    ) {
      code_session
      mode_session
      duree_sess
      hr_deb_j
      hr_fin_j
      hr_j_session
      honoraire_sess
      frais_sejour
      frais_transport
      perdiem
      autres_frais
      note_eval_formateur
      type_sess
      date_deb_sess
      lieu_sess
      prix_session
      ClientCodeClient
      FormateurCodeFormateur
      FormationCIFormation
      SupportCodeSupport
    }
  }
`;
export const ADD_FORMATEUR = gql`
  mutation create_formateur(
    $code_formateur: String!
    $nom_f: String!
    $prenom_f: String!
    $classe_f: String!
    $fonction_f: String!
    $cv_f: String!
    $email_f: String!
    $tel_f: String!
    $NSS: Int
    $salaire_f: Float
    $adr_f: String!
    $date_dajout: Date
    $cin_f: Int
    $copie_cin: String
    $passeport_f: Int
    $copie_passeport: String
    $visa_f: String
    $val_visa: Date
    $tarif_f: Float
    $RIB_f: Int
    $copie_RIB: String
  ) {
    createFormateur(
      code_formateur: $code_formateur
      nom_f: $nom_f
      prenom_f: $prenom_f
      classe_f: $classe_f
      fonction_f: $fonction_f
      cv_f: $cv_f
      email_f: $email_f
      tel_f: $tel_f
      NSS: $NSS
      salaire_f: $salaire_f
      adr_f: $adr_f
      date_dajout: $date_dajout
      cin_f: $cin_f
      copie_cin: $copie_cin
      passeport_f: $passeport_f
      copie_passeport: $copie_passeport
      visa_f: $visa_f
      val_visa: $val_visa
      tarif_f: $tarif_f
      RIB_f: $RIB_f
      copie_RIB: $copie_RIB
    ) {
      nom_f
      prenom_f
      classe_f
      fonction_f
      cv_f
      email_f
      tel_f
      NSS
      salaire_f
      adr_f
      date_dajout
      cin_f
      copie_cin
      passeport_f
      copie_passeport
      visa_f
      val_visa
      tarif_f
      RIB_f
      copie_RIB
    }
  }
`;
export const ADD_INGENIEURPEDAGOGIQUE = gql`
  mutation create_ingenieurpedagogique(
    $nom_ing: String!
    $prenom_ing: String!
    $cv_ing: String!
    $email_ing: String!
    $tel_ing: Int!
    $NSS_ing: Int!
    $salaire_ing: Float!
    $specialite_ing: String!
    $adr_ing: String!
  ) {
    createIngenieurPedagogique(
      nom_ing: $nom_ing
      prenom_ing: $prenom_ing
      cv_ing: $cv_ing
      email_ing: $email_ing
      tel_ing: $tel_ing
      NSS_ing: $NSS_ing
      salaire_ing: $salaire_ing
      specialite_ing: $specialite_ing
      adr_ing: $adr_ing
    ) {
      nom_ing
      prenom_ing
      cv_ing
      email_ing
      tel_ing
      NSS_ing
      salaire_ing
      specialite_ing
      adr_ing
    }
  }
`;
