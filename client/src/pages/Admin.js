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
function Admin() {
  const routes = [
    {
      path: "/demandeformation",
      exact: true,
      strict: false,
      component: () => <DemandeFormation />,
    },
    {
      path: "/demandeformation/:id",
      exact: true,
      strict: false,
      component: () => <DemandeFormationItem />,
    },
    {
      path: "/demandeur",
      exact: true,
      strict: false,
      component: () => <Demandeur />,
    },
    {
      path: "/demandeur/:id",
      exact: true,
      strict: false,
      component: () => <DemandeurItem />,
    },

    {
      path: "/formation",
      exact: true,
      strict: false,
      component: () => <Formation />,
    },
    {
      path: "/formation/:id",
      exact: true,
      strict: false,
      component: () => <FormationItem />,
    },
    {
      path: "/client",
      exact: true,
      strict: true,
      component: () => <Client />,
    },
    {
      path: "/client/:id",
      exact: true,
      strict: true,
      component: () => <ClientItem />,
    },
    {
      path: "/theme",
      exact: true,
      strict: true,
      component: () => <Theme />,
    },
    {
      path: "/session",
      exact: true,
      strict: true,
      component: () => <Session />,
    },
    {
      path: "/session/:id",
      exact: true,
      strict: true,
      component: () => <SessionItem />,
    },

    {
      path: "/formateur",
      exact: true,
      strict: true,
      component: () => <Formateur />,
    },
    {
      path: "/formateur/:id",
      exact: true,
      strict: true,
      component: () => <FormateurItem />,
    },
    {
      path: "/ingenieur_pedagogique",
      exact: true,
      component: () => <IngenieurPedagogique />,
    },
    {
      path: "/ingenieur_pedagogique/:id",
      exact: true,
      component: () => <IngenieurPedagogiueItem />,
    },
    {
      path: "/support",
      exact: true,
      strict: true,
      component: () => <Support />,
    },
    {
      path: "/support/:id",
      exact: true,
      strict: true,
      component: () => <SupportItem />,
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
