import React from "react";
import {Routes,Route} from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import Shop from "../components/pages/Shop";


function Router(){
    return (<Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route path="shop" element={<Shop/>}/>  
  </Routes>
    )
}
export default Router;