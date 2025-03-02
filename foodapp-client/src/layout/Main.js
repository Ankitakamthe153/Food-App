import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.js";
const Main = () => {
    return(
       <>
         <Navbar/>
         <Outlet/>
         <footer>Footer</footer>
       </> 
     
    );
};
export default Main;