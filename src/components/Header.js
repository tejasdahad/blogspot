import React,{ useContext} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="nav-extended">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center black-text header__title"><h1>BLOGSPOT</h1></Link>
        </div>
        <div className="nav-content">
            <p className="center header__content">A spot for your thoughts. Let your feelings flow</p>
        </div>
      </nav>
    );
}

export default Header;