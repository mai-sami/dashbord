import React from 'react'
import '../Css/Home.css'
import Header from './Header'
import Statistics from './Statistics'
import ChartsHome from './ChartsHome'

function Home() {
    return (
        <div className="home">
          <Header />
          <Statistics />
          <ChartsHome />
        </div>
    )
}

export default Home
