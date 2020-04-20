import React, { useContext } from 'react'
import SmurfContext from '../contexts/SmurfContext'

const Smurf = () => {
    const smurfs = useContext(SmurfContext)

    return (
        smurfs.map(smurf => {
            return (
                <div className='smurf'>
                    <h3>{smurf.name}</h3>
                    <h4>{smurf.age} yrs</h4>
                    <h4>{smurf.height}</h4>
                </div>
            )
        })
    )
}

export default Smurf;