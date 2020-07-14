import * as Yup from "yup";
export const ClientSchema = Yup.object().shape({
  code_client: Yup.string().max(5, "Too Long (Max 5)!").required("Required"),
  nom_client: Yup.string()
    .min(3, "Too Short! (Min 3)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  email_client: Yup.string()
    .email("Invalid email")
    .required("Email is required!"),
  tel_client: Yup.string()
    .min(8, "Too Short! (Min 8)")
    .max(20, "Too Long! (Max 20)")
    .required("Required"),
  adr_client: Yup.string()
    .min(10, "Too Short! (Min 10)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  pays_client: Yup.string().required("Required"),
  cin_p: Yup.string()
    .min(8, "Too Short! Must be 8")
    .max(8, "Too Long! Must be 8"),
  mat_fisc_sc: Yup.string()
    .min(15, "Too Short!  Must be 15")
    .max(15, "Too Long! Must be 15"),
  personne: Yup.string()
    .min(8, "Too Short! Must be 8")
    .max(8, "Too Long! Must be 8"),
  societe: Yup.string()
    .min(15, "Too Short!  Must be 15")
    .max(15, "Too Long! Must be 15"),
});
export const FormateurSchema = Yup.object().shape({
  code_formateur: Yup.string().max(5, "Too Long! (Max 5)").required("Required"),
  nom_f: Yup.string()
    .min(3, "Too Short! (Min 3)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  prenom_f: Yup.string()
    .min(3, "Too Short! (Min 3)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  classe_f: Yup.string().required("Required"),
  fonction_f: Yup.string().required("Required"),
  cv_f: Yup.string().required("Required"),
  email_f: Yup.string().email("Invalid email").required("Required"),
  tel_f: Yup.string()
    .min(8, "Too Short! (Min 8)")
    .max(20, "Too Long! (Max 20)")
    .required("Required"),
  NSS: Yup.string()
    .min(10, "Too Short! (Min 10)")
    .max(10, "Too Long! (Max 10)"),
  salaire_f: Yup.number()
    .test("is-number", "invalid number", (value) =>
      (value + "").match(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/)
    )
    .required("Required"),
  adr_f: Yup.string().required("Required"),
  date_dajout: Yup.string().required("Required"),
  cin_f: Yup.string()
    .min(8, "Too Short! (Must be 8 number)")
    .max(8, "Too Long! (Must be 8 number)")
    .required("Required"),
  copie_cin: Yup.string().required("Required"),
  passeport_f: Yup.string()
    .min(10, "Too Short! (Must be 10 number)")
    .max(10, "Too Long! (Must be 10 number) ")
    .required("Required"),
  copie_passeport: Yup.string().required("Required"),
  visa_f: Yup.string()
    .min(10, "Too Short! (Must be 8 number)")
    .max(10, "Too Long! (Must be 8 number)")
    .required("Required"),
  val_visa: Yup.date().required("Required"),
  tarif_f: Yup.number().test("is-number", "invalid number", (value) =>
    (value + "").match(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/)
  ),
  RIB_f: Yup.string()
    .min(20, "Too Short! (Must be 20 number)")
    .max(20, "Too Long! (Must be 20 number)"),
  copie_RIB: Yup.string().required("Required"),
});
export const FormationSchema = Yup.object().shape({
  code_formation: Yup.string().max(5, "Too Long! (Max 5)").required("Required"),
  intitule: Yup.string()
    .min(3, "Too Short! (Min 3)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  duree_formation: Yup.number()
    .test("is-number", "invalid number", (value) =>
      (value + "").match(/^[0-9]/)
    )
    .required("Required"),
  nbre_min_part: Yup.number()
    .test("is-number", "invalid number", (value) =>
      (value + "").match(/^[0-9]/)
    )
    .required("Required"),
  description_formation: Yup.string().required("Required"),
  catagorie_formation: Yup.string().required("Required"),
  prix_formation: Yup.number()
    .test("is-number", "invalid number", (value) =>
      (value + "").match(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/)
    )
    .required("Required"),
  participant: Yup.string().required("Required"),
  prerequis: Yup.string().required("Required"),
  ThemeCodeTheme: Yup.string().required("Required"),
});
export const DemandeurSchema = Yup.object().shape({
  nom_demandeur: Yup.string()
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  prenom_demandeur: Yup.string()
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  email_demandeur: Yup.string().email("Invalid email").required("Required"),
  tel_demandeur: Yup.string()
    .min(8, "Too Short! (Min 8)")
    .max(20, "Too Long! (Max 20)")
    .required("Required"),
});
export const IngenieurPedagogiqueSchema = Yup.object().shape({
  nom_ing: Yup.string().max(30, "Too Long!(Max 30)").required("Required"),
  prenom_ing: Yup.string().max(30, "Too Long! (Max 30)").required("Required"),
  cv_ing: Yup.string().required("Required"),
  email_ing: Yup.string().email("Invalid email").required("Required"),
  tel_ing: Yup.string()
    .min(8, "Too Short! (Min 8)")
    .max(20, "Too Long! (Max 20)")
    .required("Required"),
  NSS_ing: Yup.string()
    .min(10, "Too Short! Must be 10")
    .max(10, "Too Long! Must be 10")
    .required("Required"),
  salaire_ing: Yup.number()
    .test("is-number", "invalid number", (value) =>
      (value + "").match(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/)
    )
    .required("Required"),
  specialite_ing: Yup.string().required("Required"),
  adr_ing: Yup.string().required("Required"),
});
export const SupportSchema = Yup.object().shape({
  titre_support: Yup.string().required("Required"),
});
export const ThemeSchema = Yup.object().shape({
  code_theme: Yup.string()
    .min(2, "Too Short! (Min 2)")
    .max(5, "Too Long! (Max 5)")
    .required("Required"),
  nom_theme: Yup.string()
    .min(4, "Too Short! (Min 4)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
});
export const DemandeSchema = Yup.object().shape({
  date_demande: Yup.date().required("Required"),
  type_demande: Yup.string()
    .min(2, "Too Short! (Min 2)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  type_demande: Yup.string()
    .min(2, "Too Short! (Min 2)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  prix_prevu: Yup.string()
    .min(2, "Too Short! (Min 2)")
    .max(30, "Too Long! (Mac 30)")
    .required("Required"),
  lieu_prevu: Yup.string()
    .min(2, "Too Short! (Min 2)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  duree_prevu: Yup.number()
    .min(2, "Too Short! (Min 2)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  mode_demande: Yup.string()
    .min(2, "Too Short! (Min 2)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  hr_deb_j_prev: Yup.string()
    .min(2, "Too Short! (Min 2)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  hr_fin_j_prev: Yup.string()
    .min(2, "Too Short! (Min 2)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  hr_j_prev: Yup.number().max(24, "Too Long! (Max 24)").required("Required"),
  ClientCodeClient: Yup.string().required("Required"),
  FormationCIFormation: Yup.number().required("Required"),
  DemandeurCodeDemandeur: Yup.number().required("Required"),
});
export const SessionSchema = Yup.object().shape({
  code_session: Yup.string().max(5, "Too Long! (Max 5)").required("Required"),
  mode_session: Yup.string().required("Required"),
  duree_sess: Yup.number().max(10, "Too Long! (Max 10)").required("Required"),
  hr_deb_j: Yup.string().max(5, "Too Long! (Max 5)").required("Required"),
  hr_fin_j: Yup.string().max(5, "Too Long! (Max 5)").required("Required"),
  hr_j_session: Yup.string().max(2, "Too Long! (Max 2)").required("Required"),
  honoraire_sess: Yup.string().matches(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/),

  frais_sejour: Yup.string().matches(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/),
  frais_transport: Yup.string().matches(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/),
  perdiem: Yup.string().matches(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/),
  autres_frais: Yup.string().matches(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/),
  note_eval_formateur: Yup.string().matches(/^[0-9]/),
  type_sess: Yup.string(),
  date_deb_sess: Yup.string().required("Required"),
  lieu_sess: Yup.string()
    .min(1, "Too Short! (Min 1)")
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  prix_session: Yup.string()
    .matches(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/)
    .required("Required"),

  ClientCodeClient: Yup.string().required("Required"),
  FormationCIFormation: Yup.number().required("Required"),
  FormateurCodeFormateur: Yup.string().required("Required"),
  SupportCodeSupport: Yup.number().required("Required"),
});
export const FichierSchema = Yup.object().shape({
  nom_fichier: Yup.string()
    .min(5, "Too Short! (Min 5)")
    .max(20, "Too Long! (Max 20)")
    .required("Required"),
  type_fichier: Yup.string()
    .min(5, "Too Short! (Min 5)")
    .max(20, "Too Long! (Max 20)")
    .required("Required"),
  taille_max: Yup.string()
    .matches(/^[0-9]/)
    .required("Required"),
  url_fichier: Yup.string().required("Required"),
  nature_support: Yup.string()
    .min(4, "Too Short! (Min 4")
    .max(10, "Too Long!v(Max 10")
    .required("Required"),
  SupportCodeSupport: Yup.string()
    .matches(/^[0-9]/)
    .required("Required"),
});
export const ValidationSchema = Yup.object().shape({
  date_val: Yup.date().required("Required"),
  decision_r: Yup.string().required("Required"),
  decision_f: Yup.string().required("Required"),
  remarque: Yup.string(),
  formation: Yup.string().required("Required"),
  IngenieurPedagogiqueCodeIP: Yup.string().required("Required"),
  FormateurCodeFormateur: Yup.string().required("Required"),
  SupportCodeSupport: Yup.string().required("Required"),
});
export const MotCleSchema = Yup.object().shape({
  motcle: Yup.string().max(10, "Too Long! (Max 10").required("Required"),

  FormationCIFormation: Yup.string().required("Required"),
});
export const MetierSchema = Yup.object().shape({
  code_metier: Yup.string().max(5, "Too Long! (Max 5)").required("Required"),
  intitule_metier: Yup.string()
    .max(30, "Too Long! (Max 30)")
    .required("Required"),
  FormationCIFormation: Yup.string().required("Required"),
});
export const DatePrevueSchema = Yup.object().shape({
  date_prev: Yup.date().required("Required"),
});
export const ParticipantSchema = Yup.object().shape({
  nom_participant: Yup.string().required("Required"),
  prenom_participant: Yup.string().required("Required"),
  carte_identite: Yup.string()
    .min(8, "Too Short! (Must be 8)")
    .max(8, "Too Long! (Must be 8)")
    .required("Required"),
  ClientCodeClient: Yup.string().required("Required"),
});
export const ParticiperSchema = Yup.object().shape({
  rapport_eval: Yup.string().required("Required"),
  note_QCM: Yup.string()
    .matches(/^[0-9]{1,4}(?:\.[0-9]{1,3})?$/)
    .required("Required"),
  date_eval: Yup.date().required("Required"),
  SessionCISession: Yup.string().required("Required"),
});
export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
