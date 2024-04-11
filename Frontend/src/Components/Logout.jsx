import  { useContext } from "react";
import { AuthContext } from "../contects/Authprovider";
import {useLocation,useNavigate} from "react-router-dom"

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || { pathname: "/" };
  
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Logout Successful");
        navigate(from,{replace:true});
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        onClick={handleLogout}
        className="bg-blue-600 px-8 py-2 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
