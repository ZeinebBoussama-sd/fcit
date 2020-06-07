import { gql } from "apollo-boost";

export const GET_FORMATION = gql`
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

export const GET_CLIENT = gql`
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
export const GetTheme = gql`
  {
    allThemes {
      code_theme
      nom_theme
    }
  }
`;
export const GetIngenieurPedagogique = gql`
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
export const GetFormateur = gql`
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
export const GetSupport = gql`
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
export const getSession = gql`
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
export const GetDemandeFormation = gql`
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

export const GetPerson = gql`
  query findperson($cin_p: Int) {
    personne(cin_p: $cin_p) {
      cin_p
      client {
        id
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
        id
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
