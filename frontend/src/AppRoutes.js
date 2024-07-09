import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Song from "./pages/Song";
import SongIndex from "./pages/SongIndex";
import SongCreate from "./pages/SongCreate";
import SongEdit from "./pages/SongEdit";

import User from "./pages/User";
import Borrower from "./pages/Borrower";
import Borrowing from "./pages/Borrowing";

const routesConfig = [
  { path: "/", component: Dashboard },
  // { path: "/song", component: Song },
  { path: "/borrower", component: Borrower },

  { path: "/song", component: SongIndex },
  { path: "/song/create", component: SongCreate },
  { path: "/song/:id/edit", component: SongEdit },

  { path: "/user", component: User },
  { path: "/borrowing", component: Borrowing }
];

const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};
export default AppRoutes;