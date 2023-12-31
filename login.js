

// Function to handle form submission
async function handleLogin(event) {
    event.preventDefault();
    

    // Get the values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //get user from storage
    try {
    const user = await fetch('/user/' + username);
    const userJson = await user.json();

    
    response = await fetch('auth/login', {
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

    location.href = "profile.html"

    // You can redirect to another page or perform other actions here
    console.log("Login successful!");
  }
  catch (error) {
    showIncorrectLogin("loginForm");
  }


    
}

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
        const response = await fetch('/user', {
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

    location.href = "profile.html"

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

// Add a submit event listener to the form
try {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", handleLogin);
}
catch (error) {
    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", handleRegister);
    signupForm.addEventListener("submit", setProfilePicture);
    console.log("found signup form")
}



function showIncorrectLogin(parent) {
  const errorMessage = document.getElementById("errorMessage");
  if (!errorMessage) {
    const errorMessage = document.createElement("p");
    errorMessage.id = "errorMessage";
    if (parent === "loginForm") {
      errorMessage.innerText = "Incorrect username or password";
    }
    else {
      errorMessage.innerText = "Please upload a profile picture";
    }
    errorMessage.style.color = "red";
    const loginForm = document.getElementById(parent);
    loginForm.appendChild(errorMessage);
  }
}

