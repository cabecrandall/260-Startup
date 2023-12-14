import React from 'react';

import { Link } from 'react-router-dom';


export function Search() {
    return (
        <main>
            <center>
                <h2>Selected Clinics and Doctors Near You</h2>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th><Link to="intermountain">Intermountain Healthcare</Link></th>
                                <th>- 3 miles away - </th>
                                <th>$6000 Visit Cost With Your Insurance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to="mountainland">Mountainland Community Medical</Link></td>
                                <td>- 6 miles away - </td>
                                <td>$25 Visit Cost With Your Insurance</td>
                            </tr>
                            <tr>
                                <td><Link to="byu">BYU Health Center</Link></td>
                                <td>- 2 miles away - </td>
                                <td>$10 Visit Cost With Your Insurance</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </center>
        </main>

        
    );
}