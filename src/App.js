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
import Admin from './components/pages/Admin/Admin';
import BookNow from './components/pages/BookNow/BookNow';
import UpdateContext from './Context/UpdateContext/UpdateContext';
import DestinationProvider from './Context/DestinationProvider/DestinationProvider';
import Footer from './components/shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Page404 from './components/pages/404/Page404';
import PrivateRouter from './Hooks/PrivateRouter';
import LoginPage from './components/pages/LoginPage/LoginPage';
import AboutUs from './components/pages/AboutUs/AboutUs';

function App() {
  return (
    <>
      <AuthProvider>
      <DestinationProvider>
      <UpdateContext>
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
          <PrivateRouter exact path="/my-booking">
            <MyBooking></MyBooking>
          </PrivateRouter>
          <Route exact path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRouter exact path="/booking/:id">
            <BookNow></BookNow>
          </PrivateRouter>
          <Router exact path="/login">
            <LoginPage></LoginPage>        
          </Router>
          <Router exact path="/aboutus">
            <AboutUs></AboutUs>        
          </Router>
          <Route  path="*">
            <Page404></Page404>
          </Route>
          </Switch>
            <Footer></Footer>
          </Router>
      </UpdateContext>
      </DestinationProvider>
      </AuthProvider>
    </>
  );
}

export default App;
