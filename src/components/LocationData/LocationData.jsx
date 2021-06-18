import React from 'react';

import './styles.css';

const LocationData = () => {

    return(
        <div className="container">
        <div className="info-card">
            <section>
                <p>ip address</p>
                <h3>192.212.174.101</h3>
            </section>
            <span></span>

            <section>
                <p>location</p>
                <h3>Brooklyn,NY 1001</h3>
            </section>
            <span></span>

            <section>
                <p>timezone</p>
                <h3>UTC -05:00</h3>
            </section>
            <span></span>

            <section>
                <p>isp</p>
                <h3>SpaceX 
                    <br/>
                Starlink</h3>
            </section>

        {/* Aqui vao os dados do IP*/}
        </div>
        </div>
    );
};

export default LocationData;