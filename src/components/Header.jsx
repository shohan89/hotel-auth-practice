import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context',user);
    const handleLogOut = () =>{
        logOut()
            .then(()=>{})
            .catch(error => console.error(error));
    }
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
                <li>
                    <details>
                    <summary>
                        { user?.email ? <span>Welcome <small>{user.email}</small></span> : '' }
                    </summary>
                    <ul className="p-2 bg-base-100">
                        { user ?.email ? <li><Link onClick={ handleLogOut }>Logout</Link></li> : '' }
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;