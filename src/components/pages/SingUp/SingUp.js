import React, {useState} from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import LoginImage from "../../../images/login2.svg"
import Spiner from '../../shared/Spiner/Spiner';

const SingUp = () => {
    const { singInWithGoogle, singUpWithEmail, user, isLoding } = useAuth()
    
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    // goBack
    const goBack = () => {
        navigate(from)
    }
    console.log(from)
    // Sine up
    const hendleSingUp = (event) => {
        event.preventDefault();
        singUpWithEmail(email,password,name,goBack)
    }
    // Google Login
    const hendleGoogleLogin = () => {
        singInWithGoogle(goBack)
    }
    return (
        <div className="container alert alert-dismissible alert-primary my-5">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src={LoginImage} alt="" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <h3 className="text-center mt-3">Please Login</h3>
                    {/* Form */}
                    
                    <form className="my-auto" onSubmit={hendleSingUp}>
                         
                        {isLoding ? <Spiner /> : <>
                            <div className="mb-3 mt-4">
                            <label for="exampleName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleName" placeholder="Enter your Name" onBlur={(e)=>setName(e.target.value) } required/>
                        </div>
                         <div className="mb-3 mt-4">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your Email" onBlur={(e)=>setEmail(e.target.value) } required/>
                        </div>
                         <div className="mb-3 mt-4">
                            <label for="exampleInputPass" className="form-label">Password</label>
                            <input type="text" className="form-control" id="exampleInputPass" placeholder="Enter your password" onBlur={(e) => setPassword(e.target.value)} required/>
                        </div>
                        </>}
                         <div className="mb-3 mt-4">
                            <input className="btn btn-outline-primary" type="submit" value="Sing Up" />
                        </div>
                        <NavLink to="/login" className="nav-link p-0"><p>Have an Acconnt ...</p></NavLink>
                        <hr />
                    </form>
                    <div className="d-grid">
                        <button onClick={() => hendleGoogleLogin(from)} className="mx-auto btn btn-outline-primary"><i className="bi bi-google"></i> Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;