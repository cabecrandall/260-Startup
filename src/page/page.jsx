import React from 'react';

export function Page(props) {
    console.log(props.props);
    if (props.props === "byu") {
    return (
        <main>
            <center id="center">
                <h1>
                    BYU Health Center
                </h1>
                <img id="img" src="https://media.licdn.com/dms/image/C5103AQGvgr4Le__jdg/profile-displayphoto-shrink_800_800/0/1517066368060?e=2147483647&v=beta&t=ojh1wI4MDyNJJcQAgFMRTd7OJXCPi-izhuNIbiRvVyI" alt="Profile picture" className="rounded-profile-pic" />
                <br/><br/>
                <div className="medical-info">
                    <h2>General Visit Pricing (Websocket Placeholder)</h2>
                    <table style={{ columnGap: '1cm' }}>
                        <tr>
                            <td>No Insurance</td>
                            <td>NOT AVAILABLE</td>
                        </tr>
                        <tr>
                            <td>DMBA</td>
                            <td>$10</td>
                        </tr>
                        <tr>
                            <td>Medicare</td>
                            <td>IMPOSSIBLE</td>
                        </tr>
                    </table>
                    <br/><br/>
                </div>

                <br/><br/>
                <div className="medical-info" id="reviews">
                    <h2>General Practice Reviews</h2>
                    <li>★☆☆☆☆ They were not very Christlike - Helaman</li>
                    <li>★☆☆☆☆ They spit upon me and stoned me :( - Lehi</li>
                    <a id="bottom" href="index.html">See Reviews for Other Specialties</a>
                    <br/><br/>
                </div>
            </center>
        </main>
    );
    }
    else if (props.props === "intermountain") {
        return (
            <main>
                <center id="center">
                    <h1>
                        Intermountain Healthcare
                    </h1>
                    <img id="img" src="https://mma.prnewswire.com/media/1080236/Intermountain_Health_Logo.jpg?p=facebook" alt="Profile picture" width="400"></img>
                    <br /><br />
                    <div className="medical-info">
                        <h2>General Visit Pricing (Websocket Placeholder)</h2>
                        <table style={{ columnGap: '1cm' }}>
                            <tr>
                                <td>No Insurance</td>
                                <td>$6000</td>
                            </tr>
                            <tr>
                                <td>DMBA</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <td>Medicare</td>
                                <td>$1000</td>
                            </tr>
                        </table>
                        <br /><br />
                    </div>

                    <br /><br />
                    <div className="medical-info" id="reviews">
                        <h2>General Practice Reviews</h2>
                        <li>★★★★★ They were very Christlike - Helaman</li>
                        <li>★★★★★ They healed my broken heart - Lehi</li>
                        <a id="bottom" href="index.html">See Reviews for Other Specialties</a>
                        <br /><br />
                    </div>
                </center>
            </main>
        );
    }
    else {
        return (
            <main>
                <center id="center">
                    <h1>
                        Mountainland Community Medical
                    </h1>
                    <img id="img" src="https://static.wixstatic.com/media/9c7a98_12600f063f854bbd928f5ad7491ef39f~mv2.png/v1/fill/w_600,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c7a98_12600f063f854bbd928f5ad7491ef39f~mv2.png" alt="Profile picture" width="400"></img>
                    <br /><br />
                    <div className="medical-info">
                        <h2>General Visit Pricing (Websocket Placeholder)</h2>
                        <table style={{ columnGap: '1cm' }}>
                            <tr>
                                <td>No Insurance</td>
                                <td>$25</td>
                            </tr>
                            <tr>
                                <td>DMBA</td>
                                <td>$10</td>
                            </tr>
                            <tr>
                                <td>Medicare</td>
                                <td>$100</td>
                            </tr>
                        </table>
                        <br /><br />
                    </div>

                    <br /><br />
                    <div className="medical-info" id="reviews">
                        <h2>General Practice Reviews</h2>
                        <li>★★★★★ They were very Christlike - Helaman</li>
                        <li>★★★★★ They healed my broken heart - Lehi</li>
                        <a id="bottom" href="index.html">See Reviews for Other Specialties</a>
                        <br /><br />
                    </div>
                </center>
            </main>
        );
    }
}