import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const useAuth = () => useContext(AuthContext);

export default useAuth;