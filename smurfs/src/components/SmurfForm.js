import React, { useState } from 'react'
import axios from 'axios'

const SmurfForm = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [height, setHeight] = useState()

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const handleHeightChange = (e) => {
        setHeight(e.target.value + 'cm')
    }

    const onSubmit = () => {
        axios.post('http://localhost:3333/smurfs', {
            name: name,
            age: age,
            height: height
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
 
    return (
        <form className='form' onSubmit={onSubmit()}>
            <label>Name:</label>
            <input 
                onChange={e => handleNameChange(e)} 
            />
            <span style={{margin: '5px'}}/>
            <label>Age:</label>
            <input 
                onChange={e => handleAgeChange(e)}
            />
            <span style={{margin: '5px'}}/>
            <label>Height:</label>
            <input 
                onChange={e => handleHeightChange(e)}
            />
            <span style={{margin: '5px'}}/>
            <button type='submit'>Add Smurf</button>
        </form>
    )
}

export default SmurfForm;
