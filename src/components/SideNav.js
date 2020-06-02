import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="/download.jfif" style={{height:300, width:350}} />
                        </div>
                        <h3 className="blue-text">BlogSpot</h3>
                    </div>
                </li>
                <li><div class="divider"></div></li>
                <li><Link to="/create">Add a blog</Link></li>
                <li><Link to="/">List all blogs</Link></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
    );
}

export default SideNav;