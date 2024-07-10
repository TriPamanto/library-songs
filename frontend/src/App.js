import './App.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import ComponentSideBar from './components/ComponenSideBar';
import ComponentHeader from './components/ComponenHeader';
import ComponentFooter from './components/ComponenFooter';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import AppRoutes from './AppRoutes';
import { useEffect, useState } from "react";

const AuthenticatedApp = () => (
  <div id="wrapper">
    <ComponentSideBar />
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <ComponentHeader />
        <AppRoutes />
      </div>
      <ComponentFooter />
    </div>
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route
          path="*"
          element={isAuthenticated ? <AuthenticatedApp /> : <Navigate to="/login" />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
