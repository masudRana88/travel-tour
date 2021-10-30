import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const LoginPage = () => {
    const {singInWithGoogle} = useAuth()
    return (
        <div className="row w-100 h-100vh">
            <div className="col-md-5 col-sm-5 mx-auto  mt-5 shadow-lg" style={{height: "18rem"}}>
                <div className="mt-5 text-center ">
                    <button className="btn mx-auto shadow" onClick={singInWithGoogle}><i class="bi bi-google"></i> Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;