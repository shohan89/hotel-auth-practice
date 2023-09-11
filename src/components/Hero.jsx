import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.luxuryabode.com/mona/img/hotels.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Your Perfect Hotel Planer</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">
                    <Link to='/login'>Get Started</Link>
                </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;