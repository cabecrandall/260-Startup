import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export function Login({login}) {

    const [logHTML, setLogHTML] = React.useState(<div></div>);

    async function handleLogin(event) {
        event.preventDefault();
        
    
        // Get the values from the form
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        //get user from storage
        try {
        const user = await fetch('/user/' + username);
        const userJson = await user.json();
    
        
        const response = await fetch('auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: username, password: password })
        });
    
        const token = await response.json();
        const id = token.id;
    
        // Store the login information in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("profilePicture", userJson.profilePicture);
        localStorage.setItem("favorites", JSON.stringify(userJson.favorites));
        localStorage.setItem("history", JSON.stringify(userJson.history));
    
        location.href = "profile"
    
        // You can redirect to another page or perform other actions here
        console.log("Login successful!");
      }
      catch (error) {
        showIncorrectLogin("loginForm");
      }
    
    
        
    }

    console.log("login: "+ login);
    React.useEffect(() => {
    if (login) {
        console.log("logged in!");
        setLogHTML(
            <div>  </div>
        )
    }
    else {
        setLogHTML(
        <div>
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
                                <a href="profile">
                                <button type="submit" className="btn btn-lg btn-danger btn-block" onClick={(e) => handleLogin(e)}>Login</button>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                
            <div id="createAccount">
            Or <Link to="create">Create An Account</Link>
            </div>
            </center>
            </div>
        );
    }
}, [login]);


    return (
        <main>
        {logHTML}
        
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