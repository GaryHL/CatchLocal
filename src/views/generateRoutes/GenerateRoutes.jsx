import "./generateRoutes.scss";
import { DiCoffeescript } from "react-icons/di";
import { BiDrink } from "react-icons/bi";
import { FaGifts } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaTheaterMasks } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function GenerateRoutes() {
   return (
      <div className="App">
         <div className="body">
            <h2 className="title">¿Qué deseas incluír en tu salida?</h2>
            <div className="all">
               <div className="container_name_route">
                  <h4>Ruta Bares</h4>
                  <BiDrink className="icon"></BiDrink>
               </div>
               <p>Las mejores tiendas de cafe de la zona las encuentras aquí</p>
               <input className="check" type="checkbox"></input>
            </div>
            <div className="all">
               <div className="container">
                  <h4>Ruta Compras</h4> <FaGifts className="icon"></FaGifts>
               </div>
               <div className="container1">
                  <p>
                     Las mejores tiendas de cafe de la zona las encuentras aquí
                  </p>
                  <input className="check" type="checkbox"></input>
               </div>
            </div>
            <div className="all">
               <div className="container">
                  <h4>Ruta Gastronomica</h4>
                  <MdOutlineFoodBank className="icon"></MdOutlineFoodBank>
               </div>
               <div className="container1">
                  <p>
                     Las mejores tiendas de cafe de la zona las encuentras aquí
                  </p>
                  <input className="check" type="checkbox"></input>
               </div>
            </div>
            <div className="all">
               <div className="container">
                  <h4>Ruta Cultural</h4>
                  <FaTheaterMasks className="icon"></FaTheaterMasks>
               </div>
               <div className="container1">
                  <p>
                     Las mejores tiendas de cafe de la zona las encuentras aquí
                  </p>
                  <input className="check" type="checkbox"></input>
               </div>
            </div>
         </div>
         <div className="Uni">
            <Link to="/map">
               <Button color="primary" className="button1" variant="contained">
                  Generar Ruta
               </Button>
            </Link>
         </div>
      </div>
   );
}
export default GenerateRoutes;
