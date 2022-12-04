import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import map from "../../assets/img/mapimg.png";
import "./map.scss";
import { RiMapPin2Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import coffe from "../../assets/img/coffe.png";
import product from "../../assets/img/product.png";
import ComentCard from "../../components/comentCard/ComentCard";
import Perfil from "../../assets/img/perfil.webp"
import Perfil2 from "../../assets/img/perfil2.webp"

const Map = () => {
   const [openShop, setOpenShop] = useState(false);
   return (
      <React.Fragment>
         <NavBar></NavBar>
         <div className="map">
            <h2>Tu ruta está lista, buen viaje :D</h2>
            <div className="container_map">
               <img src={map}></img>
               <div className="container_first_pin">
                  <RiMapPin2Fill className="first_pin" />
               </div>
               <div
                  className="container_second_pin"
                  onClick={() => setOpenShop(!openShop)}
               >
                  <RiMapPin2Fill className="second_pin" />
               </div>
               <div className="container_last_pin">
                  <RiMapPin2Fill className="last_pin" />
               </div>
            </div>
            <p>Tu destino actual es: lorem fistrum... </p>
            <button>Iniciar</button>
         </div>
         <div className={openShop ? "container_shop open" : "container_shop"}>
            <GrClose onClick={() => setOpenShop(!openShop)} />
            <img src={coffe} alt="cafetería" />
            <h4>Simple - coffee</h4>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
               accumsan ultricies tincidunt. Fusce nisi dui, gravida non viverra
               id, egestas ac est. Aliquam pulvinar commodo elit, nec volutpat
               dolor aliquam feugiat.
            </p>
            <h4>¿Qué tenemos para tí?</h4>
            <img src={product} alt="estrella" />
            <p>Nuestro atractivo principal</p>
            <h4>¿Qué opinan de nosotros?</h4>
            <ComentCard
            src={Perfil}
            user="Adrían Suñe"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu venenatis erat. Phasellus fermentum.  🙌"
            />
            <ComentCard
            src={Perfil2}
               user="Mario Lopez"
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu venenatis erat. Phasellus fermentum.  🤣🤣🤣"
            />
         </div>
      </React.Fragment>
   );
};

export default Map;
