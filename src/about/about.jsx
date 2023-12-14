import React from 'react';

export function About() {
    return (
        <main>
            <p className="about">
                Medicost is an application that compares doctors all over a given area 
                (Provo, for example). A user creates an account, chooses their insurance, 
                and then can filter clinics and offices based on their healthcare needs. 
                This will include options for specific procedures, general practice doctors, 
                and ER rates for all known hospitals and clinics.
            </p>

            <p className="about" style={{margin: "0 0 20% 0"}}>
                Please <a href="https://account.venmo.com/settings/profile">Donate </a> 
                to Medicost if these services were helpful!
            </p>
        </main>
    
    );
}