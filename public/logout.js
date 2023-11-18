
async function queryUser() {
    try {
        let username = null;
        const response = await fetch("/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        });

        const data = await response.json();
        username = data.username;

        if (!username) {
        throw new Error("no username found!")
        }
        
        const options = document.getElementById("options");
        const newOption = document.createElement("li");
        newOption.className = "nav-item";
        newOption.innerHTML = `<a style="font-size: 2em;" class="nav-link" id="logout">Logout</a>`;
        options.appendChild(newOption);
        const logoutButton = document.getElementById("logout");
        logoutButton.addEventListener("click", logout);
    }
    catch {
        console.log("User is not logged in");
    }
}

queryUser();

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


