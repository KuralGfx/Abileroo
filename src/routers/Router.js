import React from "react";
import {Routes,Route} from "react-router-dom";
import ProductPage from "../components/containers/ProductContainer";
import HomePage from "../components/pages/HomePage";
import Shop from "../components/pages/Shop";


function Router(){
    return (<Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route path="/shop/:id" element={<Shop/>}/>
    <Route path="/product" element={<ProductPage/>}/>  
  </Routes>
    )
}
export default Router;