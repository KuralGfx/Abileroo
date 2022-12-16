import React from "react";
import {Routes,Route} from "react-router-dom";
import HomePage from "../components/pages/HomePage";

function Router(){
    return (<Routes>
    <Route>
    <HomePage/>
    </Route>
  </Routes>
    )
}
export default Router;