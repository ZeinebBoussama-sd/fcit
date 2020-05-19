import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Apropos from "./Apropos";
import Formation from "../Admin/Formation/Formation";
import Client from "../Admin/Client/Client";
import Theme from "../Admin/Theme/Theme";
import IngenieurPedagogique from "../Admin/IngenieurePedagogique/IngenieurPedagogique";
import SideBar from "../Admin/component/SideBar";
import Formateur from "../Admin/Formateur/Formateur";
function Admin() {
  const routes = [
    { path: "/admin/formation", exact: true, component: () => <Formation /> },
    { path: "/admin/client", exact: true, component: () => <Client /> },
    { path: "/admin/theme", exact: true, component: () => <Theme /> },
    { path: "/admin/session", exact: true, component: () => <Apropos /> },
    { path: "/admin/formateur", exact: true, component: () => <Formateur /> },
    {
      path: "/admin/ingenieur_pedagogique",
      exact: true,
      component: () => <IngenieurPedagogique />,
    },
    { path: "/admin/support", exact: true, component: () => <Apropos /> },
  ];
  return (
    <BrowserRouter>
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <Switch>
            {routes.map((router, idx) => (
              <Route
                key={idx}
                path={router.path}
                exact={router.exact}
                component={router.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Admin;
