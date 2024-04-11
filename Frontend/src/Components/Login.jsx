import  { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/Authprovider";
import googleimg from "../assets/google-logo.svg";

const Login = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || { from: { pathname: "/" } }; //yaha par hum login karne ke baad kaha jana hai wo define kar rahe hai jisme location.state se hume location ki state mil rahi hai or agar wo nahi hai to hume / par jana hai
  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login Successfully");
        navigate(from, { replace: true }); 
      })
      .catch((error) => {
        console.log(error);
        const errormsg = error.message;
        setError(errormsg);
      });
  };

  const handleRegister = () => {
    signInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User Created Successfully");
        navigate(from, { replace: true }); //yaha par hum navigate ka use karke login karne ke baad kaha jana hai wo define kar rahe hai
      })
      .catch((error) => {
        console.log(error);
        const errormsg = error.message;
        setError(errormsg);
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogIn}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                </div>

                {error? "Invalid Email or Password(^_^)":" "}
                <p>
                  If you dont have  an account please{" "}
                  <Link to={"/sign-up"} className="text-blue-700 underline">
                    Signup
                  </Link>{" "}
                  here..!!
                </p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                    Log in
                  </button>
                </div>
              </form>

              <hr />
              <div className="flex w-full items-center flex-col mt-5 gap-3">
                <button onClick={handleRegister} className=" block ">
                  {" "}
                  <img
                    src={googleimg}
                    alt=""
                    className="w-12 h-12 inline-block"
                  />{" "}
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
