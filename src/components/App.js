import { Routes, Route, NavLink } from "react-router-dom";

import stack from "../assets/Stack.svg";
import shield from "../assets/Shield.svg";
import people from "../assets/Asana.svg";
import pref from "../assets/settings.svg";
import lightning from "../assets/Lightning-alt.svg";

import ActivityPage from "../views/Activity/ActivityPage";
import PeoplePage from "../views/People/PeoplePage";
import PreferencesPage from "../views/Preferences/PreferencesPage";
import RepositoriesPage from "../views/Repositories/RepositoriesPage";
import SecurityPage from "../views/Security/SecurityPage";

import "./App.scss";


function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img alt="" className="logo-img"/>
        </div>
        <nav>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                <img alt="" className="nav__link__icon" src={stack}/>
                <span className="nav__link__text">Repositories</span>
              </NavLink>
            </li>
            <li className="nav__item">
            <NavLink to="/activity" className="nav__link">
                <img alt="" className="nav__link__icon" src={lightning}/>
                <span className="nav__link__text">Activity</span>
              </NavLink>
            </li>
            <li className="nav__item">
            <NavLink to="/people" className="nav__link">
                <img alt="" className="nav__link__icon" src={people}/>
                <span className="nav__link__text">People</span>
              </NavLink>
            </li>
            <li className="nav__item">
            <NavLink to="preferences" className="nav__link">
                <img alt="" className="nav__link__icon" src={pref}/>
                <span className="nav__link__text">Preferences</span>
              </NavLink>
            </li>
            <li className="nav__item">
            <NavLink to="/security" className="nav__link">
                <img alt="" className="nav__link__icon" src={shield}/>
                <span className="nav__link__text">Security</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="user">
          <div className="user-img__wrap">
            <img alt="" src="#" className="user-img"></img>
          </div>
        </div>
      </header>
      <main className="main"></main>

      <Routes>
        <Route path="/" element={RepositoriesPage}/>
        <Route path="/activity" element={ActivityPage}/>
        <Route path="/people" element={PeoplePage}/>
        <Route path="/preferences" element={PreferencesPage}/>
        <Route path="/security" element={SecurityPage}/>
      </Routes>
    </div>
  );
}

export default App;
