import './App.css';

import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ComponentSideBar from './components/ComponenSideBar';
import ComponentHeader from './components/ComponenHeader';
import ComponentFooter from './components/ComponenFooter';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import AppRoutes from './AppRoutes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
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
            }
          />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
