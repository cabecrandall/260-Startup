import React from 'react';


export function Create() {

    async function handleRegister(event) {
        event.preventDefault();
    
        // Get the values from the form
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        const file = document.getElementById("profilePicture").files[0];
        console.log(file + "  uhhhh")
        if (file) {
          // Read the selected file and set it as the profile picture
          const reader = new FileReader();
          reader.onload = async function (e) {
            const profilePicture = e.target.result;
            // Store the profile picture in localStorage
            localStorage.setItem('profilePicture', profilePicture);
            // Send the profile picture to the server
            const user = {username: username, password: password, profilePicture: profilePicture, favorites: [], history: []}
            
            console.log("awaiting fetch for account creation")
            let response = await fetch('/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    
        response = await fetch('auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: username, password: password })
        });
    
        setTimeout(() => console.log("First"), 1000);
    
            // Redirect back to the profile page
            //window.location.href = 'profile.html';
          };
          reader.readAsDataURL(file);
    
        //send user to server
        
        
    
        // Store the login information in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("favorites", JSON.stringify([]));
        localStorage.setItem("history", JSON.stringify([]));
    
        location.href = "profile"
    
        // You can redirect to another page or perform other actions here
        console.log("Login successful!");
    }
    else {
        showIncorrectLogin("signupForm");
    }
    }
    
    async function setProfilePicture(event) {
        event.preventDefault();
        const file = document.getElementById("profilePicture").files[0];
        console.log(file + "  uhhhh")
        if (file) {
          // Read the selected file and set it as the profile picture
          const reader = new FileReader();
          reader.onload = async function (e) {
            const profilePicture = e.target.result;
            // Store the profile picture in localStorage
            localStorage.setItem('profilePicture', profilePicture);
            // Send the profile picture to the server
            const response = await fetch('/user/' + localStorage.getItem('username'), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ profilePicture: profilePicture })
            });
            // Redirect back to the profile page
            //window.location.href = 'profile.html';
          };
          reader.readAsDataURL(file);
          console.log("Final result: " + localStorage.getItem('profilePicture'))
        }
    }

    return (
        <main>
            <center>
                <form method="get" action="profile.html" id="signupForm">
                    <br />
                    <div className="container mt-5">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Input Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Input Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="profile_picture">Profile Picture</label><br />
                                <input type="file" className="form-control-file" id="profilePicture" name="profile_picture" accept="image/png, image/jpeg" 
                                onSubmit={(e) => setProfilePicture(e)}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={(e) => handleRegister(e)}>Create Account</button>
                        </form>
                    </div>

                    <br /><br />
                </form>
            </center>
        </main>
    );
}