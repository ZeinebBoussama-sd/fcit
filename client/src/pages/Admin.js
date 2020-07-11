import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Formation from "../Admin/Formation/Formation";
import Client from "../Admin/Client/Client";
import Theme from "../Admin/Theme/Theme";
import IngenieurPedagogique from "../Admin/IngenieurePedagogique/IngenieurPedagogique";
import SideBar from "../Admin/component/SideBar";
import Formateur from "../Admin/Formateur/Formateur";
import Support from "../Admin/Support/Support";
import Session from "../Admin/Session/Session";
import DemandeFormation from "../Admin/DemandeFormation/DemandeFormation";
import Demandeur from "../Admin/Demandeur/Demandeur";
import ClientItem from "../Admin/Client/ClientItem";
import DemandeFormationItem from "../Admin/DemandeFormation/DemandeFormationItem";
import DemandeurItem from "../Admin/Demandeur/DemandeurItem";
import FormateurItem from "../Admin/Formateur/FormateurItem";
import FormationItem from "../Admin/Formation/FormationItem";
import IngenieurPedagogiueItem from "../Admin/IngenieurePedagogique/IngenieurPedagogiqueItem";
import SupportItem from "../Admin/Support/SupportItem";
import SessionItem from "../Admin/Session/SessionItem";
import ThemeItem from "../Admin/Theme/ThemeItem";
import Fichier from "../Admin/Fichier/Fichier";
import FichierItem from "../Admin/Fichier/FichierItem";
import Participant from "../Admin/Participant/Participant";
import ParticipantItem from "../Admin/Participant/ParticpantItem";
import Validation from "../Admin/Validation/Validation";
import ValidationItem from "../Admin/Validation/ValidationItem";
import MotCle from "../Admin/MotCle/MotCle";
import MotCleItem from "../Admin/MotCle/MotCleItem";
import Metier from "../Admin/Metier/Metier";
import MetierItem from "../Admin/Metier/MetierItem";
import DatePrevue from "../Admin/DatePrevue/DatePrevue";
import DatePrevueItem from "../Admin/DatePrevue/DatePrevueItem";
import Participer from "../Admin/Participer/Participer";
import ParticiperItem from "../Admin/Participer/ParticiperItem";
import Intro from "../Admin/Intro/intro";
import Login from "./Login";
function Admin({ history }) {
  const authToken = localStorage.getItem("token");
  console.log(authToken);
  const routes = [
    {
      path: "/demandeformation",
      exact: true,
      strict: false,
      component: () => (authToken ? <DemandeFormation /> : <Login />),
    },
    {
      path: "/demandeformation/:id",
      exact: true,
      strict: false,
      component: () => (authToken ? <DemandeFormationItem /> : <Login />),
    },
    {
      path: "/dateprevue",
      exact: true,
      strict: false,
      component: () => (authToken ? <DatePrevue /> : <Login />),
    },
    {
      path: "/dateprevue/:id",
      exact: true,
      strict: false,
      component: () => (authToken ? <DatePrevueItem /> : <Login />),
    },
    {
      path: "/fichier",
      exact: true,
      strict: false,
      component: () => (authToken ? <Fichier /> : <Login />),
    },
    {
      path: "/fichier/:id",
      exact: true,
      strict: false,
      component: () => (authToken ? <FichierItem /> : <Login />),
    },
    {
      path: "/motcle",
      exact: true,
      strict: false,
      component: () => (authToken ? <MotCle /> : <Login />),
    },
    {
      path: "/motcle/:id",
      exact: true,
      strict: false,
      component: () => (authToken ? <MotCleItem /> : <Login />),
    },
    {
      path: "/demandeur",
      exact: true,
      strict: false,
      component: () => (authToken ? <Demandeur /> : <Login />),
    },
    {
      path: "/demandeur/:id",
      exact: true,
      strict: false,
      component: () => (authToken ? <DemandeurItem /> : <Login />),
    },

    {
      path: "/formation",
      exact: true,
      strict: false,
      component: () => (authToken ? <Formation /> : <Login />),
    },
    {
      path: "/formation/:id",
      exact: true,
      strict: false,
      component: () => (authToken ? <FormationItem /> : <Login />),
    },
    {
      path: "/metier",
      exact: true,
      strict: false,
      component: () => (authToken ? <Metier /> : <Login />),
    },
    {
      path: "/metier/:id",
      exact: true,
      strict: false,
      component: () => (authToken ? <MetierItem /> : <Login />),
    },
    {
      path: "/client",
      exact: true,
      strict: true,
      component: () => (authToken ? <Client /> : <Login />),
    },
    {
      path: "/client/:id",
      exact: true,
      strict: true,
      component: () => (authToken ? <ClientItem /> : <Login />),
    },
    {
      path: "/theme",
      exact: true,
      strict: true,
      component: () => (authToken ? <Theme /> : <Login />),
    },
    {
      path: "/theme/:id",
      exact: true,
      strict: true,
      component: () => (authToken ? <ThemeItem /> : <Login />),
    },
    {
      path: "/session",
      exact: true,
      strict: true,
      component: () => (authToken ? <Session /> : <Login />),
    },
    {
      path: "/session/:id",
      exact: true,
      strict: true,
      component: () => (authToken ? <SessionItem /> : <Login />),
    },
    {
      path: "/participant",
      exact: true,
      strict: true,
      component: () => (authToken ? <Participant /> : <Login />),
    },
    {
      path: "/participant/:id",
      exact: true,
      strict: true,
      component: () => (authToken ? <ParticipantItem /> : <Login />),
    },
    {
      path: "/participer",
      exact: true,
      strict: true,
      component: () => (authToken ? <Participer /> : <Login />),
    },
    {
      path: "/participer/:id",
      exact: true,
      strict: true,
      component: () => (authToken ? <ParticiperItem /> : <Login />),
    },

    {
      path: "/formateur",
      exact: true,
      strict: true,
      component: () => (authToken ? <Formateur /> : <Login />),
    },
    {
      path: "/formateur/:id",
      exact: true,
      strict: true,
      component: () => (authToken ? <FormateurItem /> : <Login />),
    },
    {
      path: "/ingenieur_pedagogique",
      exact: true,
      component: () => (authToken ? <IngenieurPedagogique /> : <Login />),
    },
    {
      path: "/ingenieur_pedagogique/:id",
      exact: true,
      component: () => (authToken ? <IngenieurPedagogiueItem /> : <Login />),
    },
    {
      path: "/support",
      exact: true,
      strict: true,
      component: () => (authToken ? <Support /> : <Login />),
    },
    {
      path: "/support/:id",
      exact: true,
      strict: true,
      component: () => (authToken ? <SupportItem /> : <Login />),
    },
    {
      path: "/validation",
      exact: true,
      strict: true,
      component: () => (authToken ? <Validation /> : <Login />),
    },
    {
      path: "/validation/:id",
      exact: true,
      strict: true,
      component: () => (authToken ? <ValidationItem /> : <Login />),
    },
    {
      path: "/",
      exact: true,
      strict: true,
      component: () => (authToken ? <Intro /> : <Login />),
    },
  ];
  return (
    <HashRouter>
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <Switch>
            {routes.map((router, idx) => (
              <Route
                key={idx}
                path={router.path}
                exact={router.exact}
                sensitive={router.strict}
                component={router.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}
export default Admin;
