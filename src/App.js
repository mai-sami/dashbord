import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './Component/Sidebar';
import Home from './Component/Home';
// import Homes from './Component/Homes';
//  import Tickit from './Component/Homes';
import Poblem from './Component/Homes';
// import Invoicees from './Component/Sells/AllHome';
import Billsُxchanges from './Component/Sells/AllHome';
import InsertBillss from './Component/Sells/AllHome';

 
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/poblem">
            <div className="app">
              <Poblem />
              <Sidebar />
            </div>
          </Route>




          {/* <Route path="/teckit">
            <div className="app">
              <Tickit />
               <Sidebar />
            </div>
          </Route> */}
          {/* <Route path="/client">
            <div className="app">
              <Homes />
               <Sidebar />
            </div>
          </Route> */}
<Route path="/insert">
            <div className="app">
              <InsertBillss />
              <Sidebar />
            </div>
          </Route>


{/* <Route path="/bill">
            <div className="app">
              <Billsُxchanges />
              <Sidebar />
            </div>
          </Route> */}


{/* <Route path="/invoices">
            <div className="app">
              <Invoicees />
              <Sidebar />
            </div>
          </Route> */}





          {/* <Route path="/sell">
            <div className="app">
              <AllHome />
              <Sidebar />
            </div>
          </Route> */}





          <Route path="/">
            <div className="app">
              <Home />
              <Sidebar />
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
