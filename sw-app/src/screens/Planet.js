import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router';
import { Spinner } from '../components/Spinner';

export default function Planet() {
    const [planet, setPlanet] = useState([])

    const location = useLocation()
    const planetId = location.pathname.split('/planets/')[1]

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://swapi.dev/api/planets/${planetId}`,
        })
            .then(res => {
                console.log(res)
                if (res?.status === 200) {
                    setPlanet(res?.data)
                }
            })
            .catch(err => {
                console.log(err, '[Error Message]');
            });

    }, [])

    const renderDetails = () => {
        if (planet.length === 0) {
            return <Spinner />
        }

        return (
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td scope="row">Name</td>
                        <th>{ planet?.name }</th>
                    </tr>
                    <tr>
                        <td scope="row">Population</td>
                        <th>{ planet?.population }</th>
                    </tr>
                    <tr>
                        <td scope="row">Diameter</td>
                        <th>{ planet?.diameter }</th>
                    </tr>
                    <tr>
                        <td scope="row">Terrain</td>
                        <th>{ planet?.terrain }</th>
                    </tr>
                    <tr>
                        <td scope="row">Gravity</td>
                        <th>{ planet?.gravity }</th>
                    </tr>
                    <tr>
                        <td scope="row">Rotation Period</td>
                        <th>{ planet?.rotation_period }</th>
                    </tr>
                    <tr>
                        <td scope="row">Orbital Period</td>
                        <th>{ planet?.orbital_period }</th>
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <h3 className='mt-5 mb-5'>Planet Details</h3>
            <div className='planet-detail'>
                { renderDetails() }
            </div>
        </div>
    );
}
