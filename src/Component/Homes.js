import React from 'react'
import '../Css/Home.css'
import Header from './Header'
  import Client from './Clients/Client'
import SupportTickets from './Clients/SupportTickets'
import ProblemClient from './Clients/ProblemClient'

 class Homes extends React.Component {
   render(){
    return (
        <div className="home">
          <Header />
          <Client />

        </div>
    )
}
}

 
 class Tickit extends React.Component {
   render(){
    return (
        <div className="home">
          <Header />
          <SupportTickets />

        </div>
    )
}
 }

 class  Poblem extends React.Component {
   render(){
    return (
        <div className="home">
          <Header />
          <ProblemClient />

        </div>
    )
}
 }

export  {Poblem, Tickit, Homes}