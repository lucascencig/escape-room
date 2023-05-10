import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Beginning from './components/Beginning';
import Libro from './components/Libro';
import './App.css'


//ROUTES:



const App = () => {
  const routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/begin", element: <Beginning /> },
    { path: "/libro", element: <Libro /> },
    // { path: "/", element: <Registrate /> },


    // ...
  ]);
  return routes;
};

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

export default App;
