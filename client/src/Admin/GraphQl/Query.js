import { gql } from "apollo-boost";

export const GET_FORMATIONS = gql`
  {
    allFormations {
      CI_formation
      code_formation
      intitule
      duree_formation
      nbre_min_part
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
export const GET_FORMATION = gql`
  query findformation($CI_formation: ID) {
    formation(CI_formation: $CI_formation) {
      code_formation
      intitule
      duree_formation
      nbre_min_part
      description_formation
      catagorie_formation
      prix_formation
      participant
      prerequis
      theme {
        code_theme
        nom_theme
      }
    }
  }
`;
export const GET_CLIENTS = gql`
  {
    allClients {
      code_client
      pays_client
      nom_client
      email_client
      tel_client
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
export const GET_CLIENT = gql`
  query findclient($code_client: ID) {
    client(code_client: $code_client) {
      code_client
      pays_client
      nom_client
      email_client
      tel_client
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

export const GET_THEME = gql`
  {
    allThemes {
      code_theme
      nom_theme
    }
  }
`;
export const GET_INGENIEUR_PEDAGOGIQUES = gql`
  {
    allIngenieurPedagogiques {
      code_IP
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
export const GET_INGENIEUR_PEDAGOGIQUE = gql`
  query findingenieurpedagogique($code_IP: ID) {
    ingenieurpedagogique(code_IP: $code_IP) {
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
export const GET_FORMATEURS = gql`
  {
    allFormateurs {
      code_formateur
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
export const GET_FORMATEUR = gql`
  query findformateur($code_formateur: String) {
    formateur(code_formateur: $code_formateur) {
      code_formateur
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

export const GET_SUPPORTS = gql`
  {
    allSupports {
      code_support
      titre_support
      date_support
      validation {
        decision_f
        decision_r
        ingenieurpedagogique {
          nom_ing
        }
        formateur {
          nom_f
        }
      }
      fichier {
        nom_fichier
      }
    }
  }
`;
export const GET_SUPPORT_MINI = gql`
  {
    allSupports {
      code_support
      titre_support
    }
  }
`;
export const GET_SUPPORT = gql`
  query getsupport($code_support: ID) {
    support(code_support: $code_support) {
      code_support
      titre_support
      date_support
      validation {
        decision_r
        date_val
        remarque
      }
      fichier {
        nom_fichier
      }
    }
  }
`;
export const GET_SESSIONS = gql`
  {
    allSessions {
      code_session
      type_sess
      date_deb_sess
      lieu_sess
      prix_session
      client {
        nom_client
      }
      formation {
        intitule
      }
      formateur {
        nom_f
      }
      support {
        titre_support
      }
    }
  }
`;
export const GET_SESSION = gql`
  query getsession($CI_session: ID) {
    session(CI_session: $CI_session) {
      code_session
      type_sess
      mode_session
      date_deb_sess
      duree_sess
      hr_deb_j
      hr_fin_j
      hr_j_session
      lieu_sess
      prix_session
      honoraire_sess
      frais_sejour
      frais_transport
      perdiem
      autres_frais
      formation {
        intitule
      }
      formateur {
        nom_f
      }
      support {
        titre_support
      }
      participant {
        nom_partcipant
      }
    }
  }
`;
export const GET_DEMANDE_FORMATIONS = gql`
  {
    allDemandeFormations {
      code_demande
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
      client {
        nom_client
      }
      formation {
        intitule
      }
      demandeur {
        prenom_demandeur
      }
    }
  }
`;
export const GET_DEMANDE_FORMATION = gql`
  query getdemandeurFormation($code_demande: ID) {
    demandeformation(code_demande: $code_demande) {
      code_demande
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
    }
  }
`;
export const GetPerson = gql`
  query findperson($cin_p: Int) {
    personne(cin_p: $cin_p) {
      cin_p
      client {
        code_client
        nom_client
        tel_client
        adr_client
        email_client
      }
    }
  }
`;
export const GetSociete = gql`
  query findsociete($mat_fisc_sc: Int) {
    societe(mat_fisc_sc: $mat_fisc_sc) {
      mat_fisc_sc
      client {
        code_client
        nom_client
        tel_client
        adr_client
        email_client
      }
    }
  }
`;
export const GET_DEMANDEURS = gql`
  {
    allDemandeurs {
      code_demandeur
      nom_demandeur
      prenom_demandeur
      email_demandeur
      tel_demandeur
    }
  }
`;
export const GET_DEMANDEUR = gql`
  query finddemandeur($code_demandeur: ID) {
    demandeur(code_demandeur: $code_demandeur) {
      code_demandeur
      nom_demandeur
      prenom_demandeur
      tel_demandeur
      email_demandeur
    }
  }
`;
export const GET_FICHIERS = gql`
  {
    allFichiers {
      code_fichier
      nom_fichier
      type_fichier
      taille_max
      url_fichier
      nature_support
    }
  }
`;
export const GET_FICHIER = gql`
  query findfichier($code_fichier: ID) {
    fichier(code_fichier: $code_fichier) {
      code_fichier
      nom_fichier
      type_fichier
      taille_max
      url_fichier
      nature_support
    }
  }
`;
export const GET_PARTICIPANT = gql`
  query findparticpant($code_participant: ID) {
    participant(code_participant: $code_participant) {
      code_participant
      nom_participant
      prenom_participant
      carte_identite
      email_demandeur
      client {
        nom_client
      }
    }
  }
`;
export const GET_PARTICIPANTS = gql`
  {
    allParticipants {
      code_participant
      nom_participant
      prenom_participant
      carte_identite
      email_demandeur
      client {
        nom_client
      }
    }
  }
`;
export const GET_VALIDATIONS = gql`
  {
    allvalidations {
      code_val
      date_val
      remarque
      decision_r
      decision_f
      formateur {
        nom_f
      }
      ingenieurpedagogique {
        nom_ing
      }
      support {
        titre_support
      }
    }
  }
`;
export const GET_VALIDATION = gql`
  query findvalidations($code_val: ID) {
    valiadtion(code_val: $code_val) {
      allvalidations {
        code_val
        date_val
        remarque
        decision_r
        decision_f
        formateur {
          nom_f
        }
        ingenieurpedagogique {
          nom_ing
        }
        support {
          titre_support
        }
      }
    }
  }
`;
