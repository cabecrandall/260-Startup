// Function to handle form submission
function handleLogin(event) {
    event.preventDefault();

    // Get the values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Store the login information in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    location.href = "profile.html"

    // You can redirect to another page or perform other actions here
    console.log("Login successful!");
}

function setProfilePicture(event) {
    event.preventDefault();
    const file = document.getElementById("profilePicture").files[0];
    console.log(file + "  uhhhh")
    if (file) {
      // Read the selected file and set it as the profile picture
      const reader = new FileReader();
      reader.onload = function (e) {
        const profilePicture = e.target.result;
        // Store the profile picture in localStorage
        localStorage.setItem('profilePicture', profilePicture);
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
    signupForm.addEventListener("submit", handleLogin);
    signupForm.addEventListener("submit", setProfilePicture);
    console.log("found signup form")
}
