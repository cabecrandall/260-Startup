import React from 'react';

export function Profile() {

    let username = 'floyd';
    let profilePicture = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/FloydLandis.jpg';
      // Retrieve the username from localStorage
      const storedUsername = localStorage.getItem('username');
      const storedProfilePicture = localStorage.getItem('profilePicture');
      const storedHistory = localStorage.getItem('visitedPages');
      const favorites = localStorage.getItem('favoritedPages');
    
      // Update the username element with the retrieved value
      if (storedUsername) {
        username = storedUsername;
      }
      if (storedProfilePicture) {
    // Convert the data URL (string) to a Blob
  
  
      // Set the image source to the loaded file content
      profilePicture = storedProfilePicture;
  }
  
    

  return (
    <main>
    <center>
      <h1 id="username">
        {username}
        </h1>
        
      <div className="profile-pic-container"><a href="https://en.wikipedia.org/wiki/Floyd_Landis">
        <img id="profilePicture" src={profilePicture} alt="Profile picture" class="rounded-profile-pic"/>
      </a>
      </div>
      <div className="lavender-box">
        <h2 className="purple-header">Favorited Clinics & Doctors *broken*</h2>
        <ul id="favorites">
          <li><a href="search.html">Add more!</a></li>
        </ul>
      </div>
      
      <div className="lavender-box">
        <h2 className="purple-header">Recently Searched *broken*</h2>
        <ul id="recents">
          
        </ul>
      </div>
      
    </center>
    

    
    


  </main>
  );
}