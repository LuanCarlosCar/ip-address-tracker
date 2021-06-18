import React from 'react';

import './styles.css';

const Header = () => {
    return(
        <header class="header">
            <h1>IP Address Tracker</h1>
            <form>
                <input type="text" placeholder="Search for any IP address or domain..." /> 
                <button type="submit">&gt;</button>
            </form>
       </header>
    )
};

export default Header;

