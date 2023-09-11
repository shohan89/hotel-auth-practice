import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to= '/' className="btn btn-ghost normal-case text-xl">Hotel Auth</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/registration'>Registration</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;