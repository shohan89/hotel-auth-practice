import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <h3 className='text-3xl font-bold mb-3'>Registration</h3>
            <form onSubmit={ handleSubmit }>
                <input type="text" name='name' placeholder="Type name here" className="input input-bordered input-success w-full max-w-xs mb-6" /> <br />
                <input type="email" name='email' placeholder="Type your email here" className="input input-bordered input-success w-full max-w-xs mb-6" /><br />
                <input type="password" name='password' placeholder="Type your password here" className="input input-bordered input-success w-full max-w-xs" /><br />
                <button className="btn btn-outline btn-success mt-4 mr-4">Signup</button>
                <button className="btn btn-outline btn-success mt-4">Signup With Google</button>
            </form>
        </div>
    );
};

export default Registration;