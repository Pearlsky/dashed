import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

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
import UtilityBar from "./UtilityBar";
import IndividualRepoPage from "../views/Repositories/IndividualRepoPage";
import ErrorBoundary from "./ErrorBoundary";
import HomePage from "../views/Home/HomePage";
// import ErrorPage from "../views/ErrorPage/ErrorPage";

export default function App() {
  const [user, setUser] = useState("");

  const userAvatar = user ? (
    <img
      alt="user-avatar"
      src={user.avatar_url}
      className="user-img__real"
    ></img>
  ) : (
    <div className="user-img__fake">
      <span>NA</span>
    </div>
  );
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ErrorBoundary><HomePage setUser={setUser} /></ErrorBoundary>} />
        {/* <Route path="/*" element={<ErrorPage />} /> */}
      </Routes>

      {!!user && (<section className="view">
        <header className="header">
          <div className="logo">
            <img alt="" className="logo-img" />
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/repos" className="nav__link">
                  <img alt="" className="nav__link__icon" src={stack} />
                  <span className="nav__link__text">Repositories</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/activity" className="nav__link">
                  <img alt="" className="nav__link__icon" src={lightning} />
                  <span className="nav__link__text">Activity</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/people" className="nav__link">
                  <img alt="" className="nav__link__icon" src={people} />
                  <span className="nav__link__text">People</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/preferences" className="nav__link">
                  <img alt="" className="nav__link__icon" src={pref} />
                  <span className="nav__link__text">Preferences</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/security" className="nav__link">
                  <img alt="" className="nav__link__icon" src={shield} />
                  <span className="nav__link__text">Security</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="user">
            <div className="user-img__wrap">{userAvatar}</div>
            <p className="user-name">{user.name}</p>
            <p className="user-location">{user.location}</p>
          </div>
        </header>
        <main className="main">
          <UtilityBar />

          <Routes>
            <Route strict path="/repos" element={<RepositoriesPage owner={user.login} />} />
            <Route
              path="/repos/*"
              element={<IndividualRepoPage owner={user.login} />}
            />
            <Route strict path="/activity" element={<ActivityPage />} />
            <Route strict path="/people" element={<PeoplePage />} />
            <Route strict path="/preferences" element={<PreferencesPage />} />
            <Route
              strict
              path="/security"
              element={
                <SecurityPage />
              }
            />
          </Routes>
        </main>
      </section>)}
    </div>
  );
}
