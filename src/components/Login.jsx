import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result =>{
                const user = result.user;
                navigate('/');
                form.reset();
                navigate( from, { replace: true } );
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <h3 className='text-3xl font-bold mb-3'>Login</h3>
            <form onSubmit={ handleSignIn }>
                <input type="email" name='email' placeholder="Type your email here" className="input input-bordered input-success w-full max-w-xs mb-6" /> <br />
                <input type="password" name='password' placeholder="Type your password here" className="input input-bordered input-success w-full max-w-xs" /><br />
                <button className="btn btn-outline btn-success mt-4 mr-4">Login</button>
                <button className="btn btn-outline btn-success mt-4">Login With Google</button>
            </form>
        </div>
    );
};

export default Login;