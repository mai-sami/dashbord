import React from 'react'
import '../Css/Home.css'
import Header from './Header'
  import Client from './Clients/Client'
import SupportTickets from './Clients/SupportTickets'
import ProblemClient from './Clients/ProblemClient'

// export default function Homes() {
//     return (
//         <div className="home">
//           <Header />
//           <Client />

//         </div>
//     )
// }

 
// export default function Tickit() {
//     return (
//         <div className="home">
//           <Header />
//           <SupportTickets />

//         </div>
//     )
// }

export default function Poblem() {
    return (
        <div className="home">
          <Header />
          <ProblemClient />

        </div>
    )
}
