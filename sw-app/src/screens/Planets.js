import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'
import { Spinner } from '../components/Spinner';

export default function Planets() {
    const [planets, setPlanets] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://swapi.dev/api/planets',
        })
            .then(res => {
                if (res?.status === 200) {
                    setPlanets(res?.data?.results)
                }
            })
            .catch(err => {
                console.log(err, '[Error Message]');
            });

    }, [])

    const handleClickPlanet = planet => {
        const planetUrl = planet?.url?.split('/')
        const planetId = planetUrl[planetUrl?.length - 2]

        navigate(`/planets/${planetId}`)
    }

    const renderPlanets = () => {
        if (planets.length === 0) {
            return <Spinner />
        }

        return planets?.map((planet, idx) => (
            <div className="card card-planet" key={ idx }>
                <div className="card-body">
                    <h5 className="card-title">{ planet?.name }</h5>
                    <button onClick={ () => handleClickPlanet(planet) } type="button" className="btn btn-primary">Details</button>
                </div>
            </div>
        ))
    }
    return (
        <div>
            <h3 className='mb-5 mt-5'>Planets in Star Wars</h3>
            <div className='planets-container'>
                { renderPlanets() }
            </div>
        </div>
    );
}
