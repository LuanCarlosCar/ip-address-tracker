import React from'react';

import './styles.css';

const Map = () => {
    return(
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96890.01132321917!2d-74.03697684179684!3d40.63400899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b34ea34addb%3A0x2bdbba643603975e!2sBoro%20Park%20OB%2FGYN!5e0!3m2!1spt-BR!2sbr!4v1622739300577!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy"></iframe>
        </div>
    );
};

export default Map;