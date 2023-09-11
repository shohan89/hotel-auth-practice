import React, { useContext } from 'react';

const Login = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold mb-3'>Login</h3>
            <form>
                <input type="email" placeholder="Type your email here" className="input input-bordered input-success w-full max-w-xs mb-6" /> <br />
                <input type="password" placeholder="Type your password here" className="input input-bordered input-success w-full max-w-xs" /><br />
                <button className="btn btn-outline btn-success mt-4 mr-4">Login</button>
                <button className="btn btn-outline btn-success mt-4">Login With Google</button>
            </form>
        </div>
    );
};

export default Login;