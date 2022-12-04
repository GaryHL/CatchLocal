import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../views/home/Home';
import Map from '../views/map/Map'
import GenerateRoutes from "../views/generateRoutes/GenerateRoutes";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/map" element={<Map/>}></Route>
            <Route path="/generate" element={<GenerateRoutes/>}></Route>
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
