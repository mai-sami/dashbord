import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './Component/Sidebar';
import Home from './Component/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>

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
