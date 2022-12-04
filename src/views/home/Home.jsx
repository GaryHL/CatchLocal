import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./home.scss";
import { FaHandPeace } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <>
         <NavBar></NavBar>
         <div class="home">
            <h2>¿ Y qué hacemos hoy ?</h2>
            <span></span>
            <Link to="/generate">
               <button>
                  <FaHandPeace />
                  <h5>Salida individual</h5>
               </button>
            </Link>
            <Link to="/generate">
               <button>
                  <HiUserGroup />
                  <h5>Salida grupal</h5>
               </button>
            </Link>
         </div>
      </>
   );
};

export default Home;
