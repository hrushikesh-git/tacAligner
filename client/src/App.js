import './App.css';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from './Components/Home';
import {Landing} from './Components/Admin/Landing';


const Routing = () => {
  return(
    <Switch>
      <Route exact path="/" ><Home /></Route>
      <Route  path="/admin" ><Landing /><Home /></Route>
    </Switch>
  )
} 

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
