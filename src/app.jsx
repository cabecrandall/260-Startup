import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Search } from './search/search';
import { About } from './about/about';
import { Page } from './page/page';


export default function App() {
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
                                <NavLink style={{ fontSize: '2em' }} className="nav-link" to="profile" id="profile">
                                    My Profile
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={{ fontSize: '2em' }} className="nav-link" to="about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path='/home' element={<Home />} exact />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/search/intermountain' element={<Page props={"intermountain"}/>} />
                    <Route path='/search/mountainland' element={<Page props={"mountainland"}/>} />
                    <Route path='/search/byu' element={<Page props={"byu"}/>} />
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