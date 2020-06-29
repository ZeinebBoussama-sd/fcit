import * as Yup from "yup";
export const FormateurSchema = Yup.object().shape({
  code_formateur: Yup.string().max(5, "Too Long!").required("Required"),
  nom_f: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  prenom_f: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  classe_f: Yup.string().required("Required"),
  fonction_f: Yup.string().required("Required"),
  cv_f: Yup.string().required("Required"),
  email_f: Yup.string().email("Invalid email").required("Required"),
  tel_f: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  NSS: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  salaire_f: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
)
    .required("Required"),
  adr_f: Yup.string().required("Required"),
  date_dajout: Yup.string().required("Required"),
  cin_f: Yup.string()
    .min(8, "Too Short!")
    .max(8, "Too Long!")
    .required("Required"),
  copie_cin: Yup.string().required("Required"),
  passeport_f: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  copie_passeport: Yup.string().required("Required"),
  visa_f: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  val_visa: Yup.date().required("Required"),
  tarif_f: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
),
  RIB_f: Yup.string()
    .min(20, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  copie_RIB: Yup.string().required("Required"),
});
export const FormationSchema = Yup.object().shape({
  code_formation: Yup.string().max(5, "Too Long!").required("Required"),
  intitule: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  duree_formation: Yup.number().required("Required"),
  nbre_min_part: Yup.number().required("Required"),
  description_formation: Yup.string().required("Required"),
  catagorie_formation: Yup.string().required("Required"),
  prix_formation: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
).required("Required"),
  participant: Yup.string().required("Required"),
  prerequis: Yup.string().required("Required"),
  ThemeCodeTheme: Yup.string().required("Required"),
});
export const DemandeurSchema = Yup.object().shape({
  nom_demandeur: Yup.string().max(30, "Too Long!").required("Required"),
  prenom_demandeur: Yup.string().max(30, "Too Long!").required("Required"),
  email_demandeur: Yup.string().email("Invalid email").required("Required"),
  tel_demandeur: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});
export const IngenieurPedagogiqueSchema = Yup.object().shape({
  nom_ing: Yup.string().max(30, "Too Long!").required("Required"),
  prenom_ing: Yup.string().max(30, "Too Long!").required("Required"),
  cv_ing: Yup.string().required("Required"),
  email_ing: Yup.string().email("Invalid email").required("Required"),
  tel_ing: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  NSS_ing: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  salaire_ing: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
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
    .min(2, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  nom_theme: Yup.string()
    .min(4, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});
export const DemandeSchema = Yup.object().shape({
  date_demande: Yup.date().required("Required"),
  type_demande: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  type_demande: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  prix_prevu: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  lieu_prevu: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  duree_prevu: Yup.number()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  mode_demande: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  hr_deb_j_prev: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  hr_fin_j_prev: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  hr_j_prev: Yup.number()
    .min(1, "Too Short!")
    .max(24, "Too Long!")
    .required("Required"),
  ClientCodeClient: Yup.string()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  FormationCIFormation: Yup.number()
    .min(1, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  DemandeurCodeDemandeur: Yup.number()
    .min(1, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});
export const SessionSchema = Yup.object().shape({
  code_session: Yup.string()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  mode_session: Yup.string()
    .min(1, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  duree_sess: Yup.number()
    .min(1, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  hr_deb_j: Yup.string()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  hr_fin_j: Yup.string()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  hr_j_session: Yup.string()
    .min(1, "Too Short!")
    .max(2, "Too Long!")
    .required("Required"),
  honoraire_sess: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
),

  frais_sejour: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
),
  frais_transport: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
),
  perdiem: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
),
  autres_frais: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
),
  note_eval_formateur: Yup.number(),
  type_sess: Yup.number(),
  date_deb_sess: Yup.number(),
  lieu_sess: Yup.string()
    .min(1, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  prix_session: Yup.number().test('is-decimal', 'invalid decimal', (value) =>
  (value + '').match(/^\d{4}\.{1}\d{3}/)
).required("Required"),

  ClientCodeClient: Yup.string().required("Required"),
  FormationCIFormation: Yup.number().required("Required"),
  FormateurCodeFormateur: Yup.string().required("Required"),
  SupportCodeSupport: Yup.number().required("Required"),
});
export const FichierSchema = Yup.object().shape({
  nom_fichier: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),

  type_fichier: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  taille_max: Yup.number().required("Required"),
  url_fichier: Yup.string().required("Required"),
  nature_support: Yup.string()
    .min(4, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  SupportCodeSupport: Yup.number().required("Required"),
});
export const ValidationSchema = Yup.object().shape({
  date_val: Yup.date().required("Required"),
  decision_r: Yup.boolean().required("Required"),
  decision_f: Yup.boolean().required("Required"),
  remarque: Yup.string(),
  IngenieurPedagogiqueCodeIP: Yup.number().required("Required"),
  FormateurCodeFormateur: Yup.string().required("Required"),
  SupportCodeSupport: Yup.number().required("Required"),
});
export const ParticipantSchema = Yup.object().shape({
  nom_participant: Yup.string().required("Required"),
  prenom_participant: Yup.string().required("Required"),
  carte_identite: Yup.string()
    .min(8, "Too Short!")
    .max(8, "Too Long!")
    .required("Required"),
  ClientCodeClient: Yup.string().required("Required"),
});
export const MotCleSchema = Yup.object().shape({
  motcle: Yup.string()
    .min(1, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),

  FormationCIFormation: Yup.string().required("Required"),
});
export const MetierSchema = Yup.object().shape({
  code_metier: Yup.string()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  intitule_metier: Yup.string()
    .min(1, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  FormationCIFormation: Yup.string().required("Required"),
});
export const DatePrevueSchema = Yup.object().shape({
  date_prev: Yup.date().required("Required"),
  DemandeFormationCodeDemande: Yup.number().required("Required"),
});
