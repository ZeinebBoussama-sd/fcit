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
function Admin() {
  const routes = [
    {
      path: "/demandeformation",
      exact: true,
      strict: false,
      component: () => <DemandeFormation />,
    },
    {
      path: "/demandeur",
      exact: true,
      strict: false,
      component: () => <Demandeur />,
    },

    {
      path: "/formation",
      exact: true,
      strict: false,
      component: () => <Formation />,
    },
    {
      path: "/client",
      exact: true,
      strict: true,
      component: () => <Client />,
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
      path: "/formateur",
      exact: true,
      strict: true,
      component: () => <Formateur />,
    },
    {
      path: "/ingenieur_pedagogique",
      exact: true,
      component: () => <IngenieurPedagogique />,
    },
    {
      path: "/support",
      exact: true,
      strict: true,
      component: () => <Support />,
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
