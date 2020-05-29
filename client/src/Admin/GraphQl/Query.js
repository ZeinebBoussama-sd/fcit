import { gql } from "apollo-boost";

export const GetFormation = gql`
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

export const GetClient = gql`
  {
    allClients {
      id
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
      id
      nom_theme
    }
  }
`;
export const GetIngenieurPedagogique = gql`
  {
    allIngenieurPedagogiques {
      id
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
      id
      nom_f
      prenom_f
      classe_f
      fonction_f
      cv_f
      email_f
      tel_f
      NSS
      salaire_f
      specialite_f
      adr_f
      date_dajout
    }
  }
`;
export const GetSupport = gql`
  {
    allSupports {
      titre_support
      date_support
      validation {
        decision
        ingenieurpedagogique {
          nom_ing
        }
        formateur {
          nom_f
        }
      }
    }
  }
`;
export const getSession = gql`
  {
    allSessions {
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
      date_demande
      type_demande
      etat_demande
      prix_prevu
      mode_demande
      client {
        nom_client
      }
      formation {
        intitule
      }
    }
  }
`;

export const GetPerson = gql`
  query findperson($cin_p: Int) {
    personne(cin_p: $cin_p) {
      id
      client {
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
      id
      client {
        nom_client
        tel_client
        adr_client
        email_client
      }
    }
  }
`;
