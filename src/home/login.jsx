import React from 'react';
import {Button} from 'react-bootstrap';

export function Login() {
    return (
        <main>
            <center>
                <h2>Welcome!</h2>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form method="get" action="profile.html" id="loginForm">
                                <div className="form-row">
                                    <div className="form-group col">
                                        <br/>
                                        <input type="text" id="username" className="form-control" placeholder="Your username here" />
                                    </div>
                                    <div className="form-group col">
                                        <br/>
                                        <input type="password" id="password" className="form-control" placeholder="Your password here" />
                                    </div>
                                </div>
                                <a href="profile.html">
                                <button type="submit" className="btn btn-lg btn-danger btn-block">Login</button>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                
            <div id="createAccount">
            Or <a href="createAccount.html">Create An Account</a>
            </div>

            </center>
        <br/>
            <center>
                <h3>Search for hospitals by selecting your location below:</h3>
                <label>What Type of Assistance Do You Need?   </label>
            <select>
                <option>General Practice</option>
                <option>Orthopedic Surgery</option>
                <option>Emergency Care</option>
                <option>Dental</option>
                <option>Chiropractics</option>
                <option>Therapy</option>
                <option>Optometry</option>
                <option>Pediatry</option>
                <option>Gynecology</option>
                <option>Guy-necology ;&rpar;</option>
            </select>
            <br/><br/>
            <h3>Hospital Map</h3>

            
            <iframe
                width="98%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3WQCUTtgocEnfkDL6bFVNcdD9FCmC5Fk&q=Provo+UT"
            ></iframe>

            <br/>
     
            <Button className="btn btn-lg btn-danger btn-rounded" id="search" onClick={() => { window.location.href = 'search' }}>Search This Area</Button>
     

            <br/><br/>

            </center>
            
            <div style={{ borderRadius: '0%', borderStyle: 'solid', borderColor: 'black' }}>
                <h3 id="actives">
                    Number of active users online:
                </h3>
                <ul id="currents">
                
                </ul>
            </div>
            
        
            
        </main>
    );
}