import { gql } from "apollo-boost";

export const UPLOAD_FILE = gql`
  mutation uploadFiles($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;
export const ADD_CLIENT = gql`
  mutation create_client(
    $code_client: String!
    $nom_client: String!
    $email_client: String!
    $pays_client: String!
    $tel_client: String!
    $adr_client: String!
    $personne: Int
    $societe: String
    $responsable: String
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
      responsable: $responsable
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
        responsable
      }
    }
  }
`;
export const UPDATE_CLIENT = gql`
  mutation updateClient(
    $code_client: String!
    $nom_client: String!
    $email_client: String!
    $pays_client: String!
    $tel_client: String!
    $adr_client: String!
    $personne: Int
    $societe: String
    $responsable: String
  ) {
    updateClient(
      code_client: $code_client
      nom_client: $nom_client
      email_client: $email_client
      tel_client: $tel_client
      pays_client: $pays_client
      adr_client: $adr_client
      personne: $personne
      societe: $societe
      responsable: $responsable
    ) {
      client {
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
          responsable
        }
      }
    }
  }
`;
export const DELETE_CLIENT = gql`
  mutation deleteClient($code_client: String!) {
    deleteClient(code_client: $code_client) {
      client {
        code_client
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
export const UPDATE_FORMATION = gql`
  mutation update_formation(
    $CI_formation: ID!
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
    updateFormation(
      CI_formation: $CI_formation
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
      code
    }
  }
`;
export const DELETE_FORMATION = gql`
  mutation deleteFormation($CI_formation: Int!) {
    deleteFormation(CI_formation: $CI_formation) {
      code
      success
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
export const UPDATE_THEME = gql`
  mutation update_theme($code_theme: String!, $nom_theme: String!) {
    updateTheme(code_theme: $code_theme, nom_theme: $nom_theme) {
      code
    }
  }
`;
export const DELETE_THEME = gql`
  mutation deleteTheme($code_theme: String!) {
    deleteTheme(code_theme: $code_theme) {
      code
      success
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
    $hr_j_session: Int!
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
export const UPDATE_SESSION = gql`
  mutation update_session(
    $code_session: String!
    $type_sess: String!
    $mode_session: String!
    $date_deb_sess: Date!
    $duree_sess: Int!
    $hr_deb_j: String!
    $hr_fin_j: String!
    $hr_j_session: Int!
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
    updateSession(
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
      code
    }
  }
`;
export const DELETE_SESSION = gql`
  mutation deleteSession($CI_session: Int!) {
    deleteSession(CI_session: $CI_session) {
      session {
        CI_session
      }
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
    $cv_f: Upload
    $email_f: String!
    $tel_f: String!
    $NSS: Int
    $salaire_f: Float
    $adr_f: String!
    $date_dajout: Date
    $cin_f: Int
    $copie_cin: Upload
    $passeport_f: String
    $copie_passeport: Upload
    $visa_f: String
    $val_visa: Date
    $tarif_f: Float
    $RIB_f: String
    $copie_RIB: Upload
    $formationCIFormation: [Int]
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
      formationCIFormation: $formationCIFormation
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
export const UPDATE_FORMATEUR = gql`
  mutation updateformateur(
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
    $passeport_f: String
    $copie_passeport: String
    $visa_f: String
    $val_visa: Date
    $tarif_f: Float
    $RIB_f: String
    $copie_RIB: String
    $formationCIFormation: [Int]
  ) {
    updateFormateur(
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
      formationCIFormation: $formationCIFormation
    ) {
      code
    }
  }
`;
export const DELETE_FORMATEUR = gql`
  mutation deleteFormateur($code_formateur: String!) {
    deleteFormateur(code_formateur: $code_formateur) {
      code
      success
    }
  }
`;
export const ADD_INGENIEURPEDAGOGIQUE = gql`
  mutation create_ingenieurpedagogique(
    $nom_ing: String!
    $prenom_ing: String!
    $cv_ing: String!
    $email_ing: String!
    $tel_ing: String!
    $NSS_ing: Int!
    $salaire_ing: Float!
    $specialite_ing: String!
    $adr_ing: String!
    $password: String
    $role: String
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
      password: $password
      role: $role
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
      role
    }
  }
`;
export const UPDATE_INGENIEURPEDAGOGIQUE = gql`
  mutation update_ingenieurpedagogique(
    $code_IP: Int
    $nom_ing: String!
    $prenom_ing: String!
    $cv_ing: String!
    $email_ing: String!
    $tel_ing: String!
    $NSS_ing: Int!
    $salaire_ing: Float!
    $specialite_ing: String!
    $adr_ing: String!
    $password: String
    $role: String
  ) {
    updateIngenieurPedagogique(
      code_IP: $code_IP
      nom_ing: $nom_ing
      prenom_ing: $prenom_ing
      cv_ing: $cv_ing
      email_ing: $email_ing
      tel_ing: $tel_ing
      NSS_ing: $NSS_ing
      salaire_ing: $salaire_ing
      specialite_ing: $specialite_ing
      adr_ing: $adr_ing
      password: $password
      role: $role
    ) {
      code
    }
  }
`;
export const DELETE_INGENIEURPEDAGOGIQUE = gql`
  mutation deleteIngenieurPedagogique($code_IP: Int!) {
    deleteIngenieurPedagogique(code_IP: $code_IP) {
      code
      success
    }
  }
`;
export const ADD_SUPPORT = gql`
  mutation create_support($titre_support: String!, $date_support: Date!) {
    createSupport(titre_support: $titre_support, date_support: $date_support) {
      titre_support
      date_support
    }
  }
`;
export const UPDATE_SUPPORT = gql`
  mutation update_support(
    $code_support: Int
    $titre_support: String!
    $date_support: Date!
  ) {
    updateSupport(
      code_support: $code_support
      titre_support: $titre_support
      date_support: $date_support
    ) {
      code
    }
  }
`;
export const DELETE_SUPPORT = gql`
  mutation deleteSupport($code_support: Int!) {
    deleteSupport(code_support: $code_support) {
      code
      success
    }
  }
`;
export const ADD_DEMANDEUR = gql`
  mutation create_demandeur(
    $nom_demandeur: String!
    $prenom_demandeur: String!
    $email_demandeur: String!
    $tel_demandeur: String!
  ) {
    createDemandeur(
      nom_demandeur: $nom_demandeur
      prenom_demandeur: $prenom_demandeur
      email_demandeur: $email_demandeur
      tel_demandeur: $tel_demandeur
    ) {
      nom_demandeur
      code_demandeur
      prenom_demandeur
      email_demandeur
      tel_demandeur
    }
  }
`;
export const UPDATE_DEMANDEUR = gql`
  mutation update_demandeur(
    $code_demandeur: Int
    $nom_demandeur: String!
    $prenom_demandeur: String!
    $email_demandeur: String!
    $tel_demandeur: String!
  ) {
    updateDemandeur(
      code_demandeur: $code_demandeur
      nom_demandeur: $nom_demandeur
      prenom_demandeur: $prenom_demandeur
      email_demandeur: $email_demandeur
      tel_demandeur: $tel_demandeur
    ) {
      code
    }
  }
`;
export const DELETE_DEMANDEUR = gql`
  mutation deleteDemandeur($code_demandeur: Int!) {
    deleteDemandeur(code_demandeur: $code_demandeur) {
      demandeur {
        code_demandeur
      }
    }
  }
`;
export const ADD_DEMANDE = gql`
  mutation create_demande(
    $date_demande: Date!
    $type_demande: String!
    $etat_demande: String!
    $prix_prevu: Float!
    $lieu_prevu: String!
    $duree_prevu: Int!
    $mode_demande: String!
    $hr_deb_j_prev: String!
    $hr_fin_j_prev: String!
    $hr_j_prev: Int!
    $ClientCodeClient: String
    $FormationCIFormation: Int
    $DemandeurCodeDemandeur: Int
  ) {
    createDemandeFormation(
      date_demande: $date_demande
      type_demande: $type_demande
      etat_demande: $etat_demande
      prix_prevu: $prix_prevu
      lieu_prevu: $lieu_prevu
      duree_prevu: $duree_prevu
      mode_demande: $mode_demande
      hr_deb_j_prev: $hr_deb_j_prev
      hr_fin_j_prev: $hr_fin_j_prev
      hr_j_prev: $hr_j_prev
      ClientCodeClient: $ClientCodeClient
      FormationCIFormation: $FormationCIFormation
      DemandeurCodeDemandeur: $DemandeurCodeDemandeur
    ) {
      date_demande
      type_demande
      etat_demande
      prix_prevu
      lieu_prevu
      duree_prevu
      mode_demande
      hr_deb_j_prev
      hr_fin_j_prev
      hr_j_prev
      ClientCodeClient
      FormationCIFormation
      DemandeurCodeDemandeur
    }
  }
`;
export const UPDATE_DEMANDEfORMATION = gql`
  mutation update_demandeformation(
    $code_demande: ID
    $date_demande: Date!
    $type_demande: String!
    $etat_demande: String!
    $prix_prevu: Float!
    $lieu_prevu: String!
    $duree_prevu: Int!
    $mode_demande: String!
    $hr_deb_j_prev: String!
    $hr_fin_j_prev: String!
    $hr_j_prev: Int!
    $ClientCodeClient: String
    $FormationCIFormation: Int
    $DemandeurCodeDemandeur: Int
  ) {
    updateDemandeFormation(
      code_demande: $code_demande
      date_demande: $date_demande
      type_demande: $type_demande
      etat_demande: $etat_demande
      prix_prevu: $prix_prevu
      lieu_prevu: $lieu_prevu
      duree_prevu: $duree_prevu
      mode_demande: $mode_demande
      hr_deb_j_prev: $hr_deb_j_prev
      hr_fin_j_prev: $hr_fin_j_prev
      hr_j_prev: $hr_j_prev
      ClientCodeClient: $ClientCodeClient
      FormationCIFormation: $FormationCIFormation
      DemandeurCodeDemandeur: $DemandeurCodeDemandeur
    ) {
      code
    }
  }
`;
export const DELETE_DEMANDE = gql`
  mutation deleteDemande($code_demande: Int!) {
    deleteDemande(code_demande: $code_demande) {
      demandeformation {
        code_demande
      }
    }
  }
`;
export const ADD_PARTICIPANT = gql`
  mutation create_participant(
    $nom_participant: String!
    $prenom_participant: String!
    $carte_identite: Int!
    $ClientCodeClient: String
  ) {
    createParticipant(
      nom_participant: $nom_participant
      prenom_participant: $prenom_participant
      carte_identite: $carte_identite
      ClientCodeClient: $ClientCodeClient
    ) {
      nom_participant
      prenom_participant
      carte_identite
    }
  }
`;
export const UPDATE_PARTICIPANT = gql`
  mutation update_participant(
    $code_participant: Int!
    $nom_participant: String!
    $prenom_participant: String!
    $carte_identite: Int!
    $ClientCodeClient: String
  ) {
    updateParticipant(
      code_participant: $code_participant
      nom_participant: $nom_participant
      prenom_participant: $prenom_participant
      carte_identite: $carte_identite
      ClientCodeClient: $ClientCodeClient
    ) {
      code
    }
  }
`;
export const DELETE_PARTICIPANT = gql`
  mutation deleteParticipant($code_participant: Int!) {
    deleteParticipant(code_participant: $code_participant) {
      participant {
        code_participant
      }
    }
  }
`;
export const ADD_FICHIER = gql`
  mutation create_fichier(
    $nom_fichier: String!
    $type_fichier: String!
    $taille_max: Int!
    $url_fichier: String!
    $nature_support: String!
    $SupportCodeSupport: Int
  ) {
    createFichier(
      nom_fichier: $nom_fichier
      type_fichier: $type_fichier
      taille_max: $taille_max
      url_fichier: $url_fichier
      nature_support: $nature_support
      SupportCodeSupport: $SupportCodeSupport
    ) {
      nom_fichier
      type_fichier
      taille_max
      url_fichier
      nature_support
    }
  }
`;

export const UPDATE_FICHIER = gql`
  mutation update_fichier(
    $code_fichier: Int
    $nom_fichier: String!
    $type_fichier: String!
    $taille_max: Int!
    $url_fichier: String!
    $nature_support: String!
    $SupportCodeSupport: Int
  ) {
    updateFichier(
      code_fichier: $code_fichier
      nom_fichier: $nom_fichier
      type_fichier: $type_fichier
      taille_max: $taille_max
      url_fichier: $url_fichier
      nature_support: $nature_support
      SupportCodeSupport: $SupportCodeSupport
    ) {
      code
    }
  }
`;
export const DELETE_FICHIER = gql`
  mutation deleteFichier($code_fichier: Int!) {
    deleteFichier(code_fichier: $code_fichier) {
      fichier {
        code_fichier
      }
    }
  }
`;
export const ADD_VALIDATION = gql`
  mutation create_validation(
    $date_val: Date!
    $remarque: String!
    $decision_r: Boolean!
    $decision_f: Boolean!
    $FormateurCodeFormateur: String
    $IngenieurPedagogiqueCodeIP: Int
    $SupportCodeSupport: Int
  ) {
    createValidation(
      date_val: $date_val
      remarque: $remarque
      decision_r: $decision_r
      decision_f: $decision_f
      FormateurCodeFormateur: $FormateurCodeFormateur
      IngenieurPedagogiqueCodeIP: $IngenieurPedagogiqueCodeIP
      SupportCodeSupport: $SupportCodeSupport
    ) {
      date_val
      remarque
      decision_r
      decision_f
      FormateurCodeFormateur
      IngenieurPedagogiqueCodeIP
      SupportCodeSupport
    }
  }
`;
export const UPDATE_VALIDATION = gql`
  mutation update_validation(
    $date_val: Date!
    $remarque: String!
    $decision_r: Boolean!
    $decision_f: Boolean!
    $FormateurCodeFormateur: String
    $IngenieurPedagogiqueCodeIP: Int
    $SupportCodeSupport: Int
  ) {
    updateValidation(
      date_val: $date_val
      remarque: $remarque
      decision_r: $decision_r
      decision_f: $decision_f
      FormateurCodeFormateur: $FormateurCodeFormateur
      IngenieurPedagogiqueCodeIP: $IngenieurPedagogiqueCodeIP
      SupportCodeSupport: $SupportCodeSupport
    ) {
      code
    }
  }
`;
export const DELETE_VALIDATION = gql`
  mutation deleteValidation($code_val: Int!) {
    deleteValidation(code_val: $code_val) {
      validation {
        code_val
      }
    }
  }
`;

export const ADD_DATEPREEVUE = gql`
  mutation create_dateprevue($date_prev: Date!) {
    createDatePrevue(date_prev: $date_prev) {
      date_prev
    }
  }
`;
export const UPDATE_DATEPREVUE = gql`
  mutation update_dateprevue(
    $date_prev: Date!
    $DemandeFormationCodeDemande: Int
  ) {
    updateDatePrevue(
      date_prev: $date_prev
      DemandeFormationCodeDemande: $DemandeFormationCodeDemande
    ) {
      code
    }
  }
`;
export const DELETE_DATEPREVUE = gql`
  mutation deleteDatePrevue($date_prev: Int!) {
    deleteDatePrevue(date_prev: $date_prev) {
      dateprevue {
        date_prev
      }
    }
  }
`;
export const ADD_METIER = gql`
  mutation create_metier(
    $code_metier: Int!
    $intitule_metier: String!
    $FormationCIFormation: [Int]
  ) {
    createMetier(
      code_metier: $code_metier
      intitule_metier: $intitule_metier
      FormationCIFormation: $FormationCIFormation
    ) {
      code_metier
      intitule_metier
    }
  }
`;
export const UPDATE_METIER = gql`
  mutation update_metier(
    $code_metier: Int!
    $intitule_metier: String!
    $FormationCIFormation: [Int]
  ) {
    updateMetier(
      code_metier: $code_metier
      intitule_metier: $intitule_metier
      FormationCIFormation: $FormationCIFormation
    ) {
      code
    }
  }
`;
export const DELETE_METIER = gql`
  mutation deleteMetier($code_metier: Int!) {
    deleteMetier(code_metier: $code_metier) {
      metier {
        code_metier
      }
    }
  }
`;
export const ADD_PARTICIPER = gql`
  mutation create_participer(
    $rapport_eval: Upload!
    $note_QCM: Float!
    $date_eval: Date!
    $ParticipantCodeParticipant: Int
    $SessionCISession: Int
  ) {
    createParticiper(
      rapport_eval: $rapport_eval
      note_QCM: $note_QCM
      date_eval: $date_eval
      ParticipantCodeParticipant: $ParticipantCodeParticipant
      SessionCISession: $SessionCISession
    ) {
      rapport_eval
      note_QCM
      date_eval
      ParticipantCodeParticipant
      SessionCISession
    }
  }
`;
export const UPDATE_PARTICIPER = gql`
  mutation update_participer(
    $rapport_eval: String!
    $note_QCM: Float!
    $date_eval: Date!
    $ParticipantCodeParticipant: Int
    $SessionCISession: Int
  ) {
    updateParticiper(
      rapport_eval: $rapport_eval
      note_QCM: $note_QCM
      date_eval: $date_eval
      ParticipantCodeParticipant: $ParticipantCodeParticipant
      SessionCISession: $SessionCISession
    ) {
      code
    }
  }
`;
export const DELETE_PARTICIPER = gql`
  mutation deleteParticiper(
    $ParticipantCodeParticipant: Int
    $SessionCISession: Int
  ) {
    deletParticiper(
      ParticipantCodeParticipant: $ParticipantCodeParticipant
      SessionCISession: $SessionCISession
    ) {
      session {
        CI_session
      }
      participant {
        code_participant
      }
    }
  }
`;
export const ADD_MOTCLE = gql`
  mutation create_motcle($motcle: String, $FormationCIFormation: Int) {
    createMotCle(motcle: $motcle, FormationCIFormation: $FormationCIFormation) {
      motcle
      FormationCIFormation
    }
  }
`;
export const UPDATE_MOT_CLE = gql`
  mutation update_motcle($motcle: String!, $FormationCIFormation: Int) {
    updateMotCle(motcle: $motcle, FormationCIFormation: $FormationCIFormation) {
      code
    }
  }
`;
export const DELETE_MOTCLE = gql`
  mutation deleteMotcle($motcle: Int!) {
    deleteMotCle(motcle: $motcle) {
      motcle {
        motcle
      }
    }
  }
`;
export const ADD_FORMATEUR_FORMATION = gql`
  mutation create_formateur_formation(
    $validation_f: Boolean!
    $date_validation: Date!
    $FormationCIFormation: Int
    $FormateurCodeFormateur: String
  ) {
    createMotCle(
      validation_f: $validation_f
      date_validation: $date_validation
      FormationCIFormation: $FormationCIFormation
      FormateurCodeFormateur: $FormateurCodeFormateur
    ) {
      validation_f
      date_validation
      FormationCIFormation
      FormateurCodeFormateur
    }
  }
`;

export const UPDATE_FORMATEUR_FORMATION = gql`
  mutation update_formateur_formation(
    $validation_f: Boolean!
    $date_validation: Date!
    $FormationCIFormation: Int
    $FormateurCodeFormateur: String
  ) {
    updateFormateur_Formation(
      validation_f: $validation_f
      date_validation: $date_validation
      FormationCIFormation: $FormationCIFormation
      FormateurCodeFormateur: $FormateurCodeFormateur
    ) {
      code
    }
  }
`;

export const DELETE_FORMATEUR_FORMATION = gql`
  mutation deleteFormateur_formation(
    $FormationCIFormation: Int
    $FormateurCodeFormateur: String
  ) {
    deleteFormateur_Formation(
      FormationCIFormation: $FormationCIFormation
      FormateurCodeFormateur: $FormateurCodeFormateur
    ) {
      formation {
        CI_formation
      }
      formateur {
        code_formateur
      }
    }
  }
`;
export const DOWNLOAD_FILE = gql`
  mutation getFile($file: String!) {
    singleDownload(file: $file) {
      filename
    }
  }
`;
export const LOGIN = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password)
  }
`;
