import React from 'react'
import Button from '@material-ui/core/Button'
import './Home.css'

const Home = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
        Primary
            </Button>
            <Button variant="contained" color="secondary">
        Secondary
            </Button>
        </header>
        <p className="App-intro">Home page.</p>
    </div>
)

export default Home
