import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/Registration'>Registration</Link></li>
                        <li><Link to='/Getcustomer'>Get</Link></li>
                        <li><Link to='/Putcustomer'>update</Link></li>

                    </ul>
                    
                </nav>
            </header>
        </div>
    );
};

export default Header;