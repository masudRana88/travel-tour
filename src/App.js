import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/pages/Home/HomePage/HomePage';
import Destinations from './components/pages/Destinations/Destinations';
import MyBooking from './components/pages/MyBooking/MyBooking';
import NavBar from './components/shared/NavBar/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/home">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/destinations">
            <Destinations></Destinations>
          </Route>
          <Route exact path="/my-booking">
            <MyBooking></MyBooking>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
