import React from 'react';

export function Profile() {
  return (
    <main>
    <center>
      <h1 id="username">
        Floyd Landis
        </h1>
        
      <div className="profile-pic-container"><a href="https://en.wikipedia.org/wiki/Floyd_Landis">
        <img id="profilePicture" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/FloydLandis.jpg" alt="Profile picture" class="rounded-profile-pic"/>
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