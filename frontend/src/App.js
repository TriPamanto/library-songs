// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import ComponentSideBar from './components/ComponenSideBar';
import ComponentHeader from './components/ComponenHeader';
import ComponentFooter from './components/ComponenFooter';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <HashRouter>
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
      </HashRouter>
    );
  }
}
export default App;
