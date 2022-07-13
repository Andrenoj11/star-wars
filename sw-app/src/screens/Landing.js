import React from 'react';
import { useNavigate } from 'react-router'

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div>
            <h3 className='mt-5 mb-5'>
                Explore Planets in Star Wars
            </h3>
            <button onClick={ () => navigate('/planets') } type="button" className="btn btn-success">Check Planets</button>
        </div>
    );
}
