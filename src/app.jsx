import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Search } from './search/search';
import { About } from './about/about';
import { Page } from './page/page';
import { Create } from './home/create';


export default function App() {

    function logout() {
        console.log("logging out");
    fetch('/auth/logout', {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 'Logged out') {
          window.location.href = '/home';
        }
      });
    }
    const [login, setLogin] = React.useState(true);
    const [profileRoute, setProfileRoute] = React.useState("profile");
    const [logoutOption, setLogoutOption] = React.useState("");
    
    let warning = "";
    const searchDisabled = false;
    let profileTo = "profile";
// hi!
        async function checkAuth() {
        try {
            let username = null;
            const response = await fetch("/me", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
        
            const data = await response.json();
            if (data.msg) {
                throw new Error(data.msg);
            }
            username = data.username;

            setLogin(true);
            console.log("the function is working");
            
            setLogoutOption(
                <li className="nav-item">
                                <NavLink style={{ fontSize: '2em' }} className="nav-link" to="home" onClick={logout}>
                                    Logout
                                </NavLink>
                            </li>
            );
          }
          catch {
            console.log("User is not logged in");
            setLogin(false);

            warning = (
                <p style={{color: "red"}}>Log in to use this feature!</p>
            );

            setProfileRoute("home");
        
            
          }}
        checkAuth();

    if (login) {
        
    }

    return (
        <BrowserRouter>
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <NavLink style={{ fontSize: '4em' }} className="navbar-brand" to="home">
                            Medicost
                        </NavLink>
                        <ul className="navbar-nav justify-content-end" id="options">
                            <li className="nav-item active">
                                <NavLink style={{ fontSize: '2em' }} className="nav-link" to="home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={{ fontSize: '2em' }} className="nav-link" to={profileRoute} id="profile">
                                    My Profile
                                </NavLink>
                                {warning}
                            </li>
                            <li className="nav-item">
                                <NavLink style={{ fontSize: '2em' }} className="nav-link" to="about">
                                    About
                                </NavLink>
                            </li>
                            {logoutOption}
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path='/home' element={<Home login={login}/>} exact />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/home/profile' element={<Profile />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/search/intermountain' element={<Page props={"intermountain"}/>} />
                    <Route path='/search/mountainland' element={<Page props={"mountainland"}/>} />
                    <Route path='/search/byu' element={<Page props={"byu"}/>} />
                    <Route path='/home/create' element={<Create />} />
                    <Route path='/create' element={<Create />} />
                </Routes>
                <footer>
                    <span className="text-reset" style={{ float: 'left' }}>Caleb Crandall</span><br />
                    <a href="https://github.com/cabecrandall/260-Startup">GitHub</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}