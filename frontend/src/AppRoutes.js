import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import SongIndex from "./pages/SongIndex";
import SongCreate from "./pages/SongCreate";
import SongEdit from "./pages/SongEdit";

import BorrowerIndex from "./pages/BorrowerIndex";
import BorrowerEdit from "./pages/BorrowerEdit";

// import Borrowing from "./pages/Borrowing";
import BorrowingIndex from "./pages/BorrowingIndex";
import BorrowingCreate from "./pages/BorrowingCreate";
// import BorrowingEdit from "./pages/BorrowingEdit";


const routesConfig = [
  { path: "/", component: Dashboard },

  { path: "/song", component: SongIndex },
  { path: "/song/create", component: SongCreate },
  { path: "/song/:id/edit", component: SongEdit },

  { path: "/borrower", component: BorrowerIndex },
  { path: "/user/:id/edit", component: BorrowerEdit },

  // { path: "/borrowing", component: Borrowing },
  { path: "/borrowings", component: BorrowingIndex },
  { path: "/borrowings/create", component: BorrowingCreate },
  // { path: "/borrowings/:id/edit", component: BorrowingEdit },

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