import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
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
import SingUp from './components/pages/SingUp/SingUp';

function App() {
  return (
    <>
      <AuthProvider>
      <DestinationProvider>
      <UpdateContext>
    <BrowserRouter>
          <NavBar></NavBar>   
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/home" element={<HomePage></HomePage>} />
        <Route path="/destinations" element={<Destinations/>} />
        <Route path="/my-booking" element={<MyBooking/>} />
        <Route path="/admin" element={<PrivateRouter><Admin/></PrivateRouter>} />
        <Route path="/booking/:id" element={<PrivateRouter><BookNow/></PrivateRouter>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/singup" element={<SingUp/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
          <Footer></Footer>
    </BrowserRouter>
      </UpdateContext>
      </DestinationProvider>
      </AuthProvider>
    </>
  );
}

export default App;
