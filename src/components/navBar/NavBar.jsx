import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
   const [menu, setMenu] = useState(false);
   return (
      <React.Fragment>
         <nav className="container_navBar">
            <div className="nav">
               <Link to="/">
                  <h2 menu>Catch locals</h2>
               </Link>
               <AiOutlineMenu onClick={()=> setMenu(!menu)} />
            </div>
         </nav>
         <div className={menu ? "container_menu open" : "container_menu"}>
               <AiOutlineMenu  className="close" onClick={()=> setMenu(!menu)}/>
            <Link>Tu perfil</Link>
            <Link>Contacto</Link>
            <Link>Sobre nosotros</Link>
            <Link>Registrar negocio</Link>
         </div>
      </React.Fragment>
   );
};

export default NavBar;
