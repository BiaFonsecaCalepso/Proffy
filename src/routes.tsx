import React from "react";
import {BrowserRouter, Route} from "react-router-dom" //páginas para se locomover/navegação dentro do site.
import Home from "./pages/Home"
//import TeacherList from "./pages/TeacherList"
import TeacherForm from "./pages/TeacherForm"

function Routes () {
    return (<BrowserRouter>
        <Route path="/" exact component={Home}/> {/*path / == home*/}
        <Route path="/form" component={TeacherForm}/>
        {/* <Route path="/teachers" component={TeacherList}*/}
        
    </BrowserRouter>)
}
export default Routes