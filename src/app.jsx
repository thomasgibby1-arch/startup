import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { AuthState } from './login/authState';
import { Play } from './play/play';
import { About } from './about/about';
import { Yugioh } from './yugioh/yugioh';
import { Magic } from './magic/magic';

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter className="body bg-dark text-light">
    <div>
      <header className="container-fluid">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        <nav className="navbar fixed-top navbar-dark navbar-toggler bg-dark">
        <div className="navbar-brand">
            Life Counter
        </div>
        <menu className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" to="">
                Login
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="play">
                Play
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="about">
                About
            </NavLink>
            </li>
        </menu>
        </nav>
      </header>

    <main>
      <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/play' element={<Play />} />
          <Route path='/about' element={<About />} />
          <Route path='/play/yugioh' element={<Yugioh/>}/>
          <Route path='/play/magic' element={<Magic/>}/>
          <Route path='*' element={<NotFound />} />
      </Routes>
    </main>

      <footer className="bg-dark text-white-50">
        <div className="container-fluid">
          <span className="text-reset">Thomas Gibby(s)</span>
          <NavLink className="text-reset" href="https://github.com/thomasgibby1-arch/startup">
            Source
          </NavLink>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}
