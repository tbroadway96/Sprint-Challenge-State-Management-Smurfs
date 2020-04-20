import React, { useState, useEffect } from "react";
import axios from 'axios'
import SmurfContext from '../contexts/SmurfContext'
import Smurf from './Smurf'
import SmurfForm from './SmurfForm'
import "./App.css";

const App = () => {
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      setSmurfs(res.data)
    })
    .catch(err => console.log(err))
  }, [])

    return (
      <SmurfContext.Provider value={smurfs}>
        <div className="App">
          <h1>Smurf Village</h1>
          <SmurfForm />
          <div className='smurfs'>
            <Smurf />
          </div>
        </div>
      </SmurfContext.Provider>
    );
}

export default App;
