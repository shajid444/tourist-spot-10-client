import { useContext } from "react";
import { AuthContext } from "../component/FirebaseProvider/FirebaseProvider";


const useAuth = () => {
    const all = useContext(AuthContext)
    return all
        
    
};

export default useAuth;