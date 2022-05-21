import React from 'react'
import { useNavigate } from 'react-router-dom'

import Listing from '../components/Listing/Listing'

const RealEstate = () => {
    let navigate = useNavigate()

    return (
        <div>
            <p>Real estate page</p>
            <Listing />
            <button onClick={() => { navigate("/map") }}>Got to map</button>
        </div>
    )
}

export default RealEstate