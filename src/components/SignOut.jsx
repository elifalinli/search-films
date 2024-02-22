import { useAuth } from "../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
    const navigate = useNavigate();
    const {user, isAuthenticated, logout} = useAuth()
    const handleSubmit = (e) => {
        e.preventDefault();
        logout();
        navigate('/')
      }
  return (
    
       <div className="flex h-5 items-center space-x-2">
          <button onClick={handleSubmit}
          className="bg-[#80669d] hover:bg-red-400 text-white font-bold py-2 mx-5 px-3 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign out
       
        </button>
        </div>
  
  )
}

export default SignOut
