import React,{ useContext} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="content-container">
            <div className="header">
                <Link className="header__title" to="/"><h1>BlogSpot</h1></Link>
                <p className="header__subtitle">A spot for your thoughts.</p>
            </div>
        </div>
    );
}

export default Header;