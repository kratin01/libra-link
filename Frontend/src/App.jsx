import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

import MyFooter from "./Components/Footer";



function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Navbar />
        <div className=" min-h-screen">

        <Outlet />
        </div>
        
        <MyFooter/>
      </div>
    </>
  );
}

export default App;
