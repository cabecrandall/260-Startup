
try {
    const response = fetch("", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const userData = await response.json();
    const username = userData.username;
    

    const options = document.getElementById("options");
    const newOption = document.createElement("li");
    newOption.className = "nav-item";
    newOption.innerHTML = `<a style="font-size: 2em;" class="nav-link" id="logout" href="index.html">Logout</a>`;
    options.appendChild(newOption);
  }
  catch {
    console.log("User is not logged in");
  }

function logout() {
    fetch('/auth/logout', {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 'Logged out') {
          window.location.href = '/';
        }
      });
  }

try {
    //add logout functionality
    const logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", logout);
  }
  catch (error) {
    console.log("logout button not created");
  }
  
