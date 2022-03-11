import React from "react";
import {BrowserRouter, Route} from "react-router-dom" //páginas para se locomover/navegação dentro do site.
import Home from "./pages/Home"
//import TeacherList from "./pages/TeacherList"
//import TeacherForm from "./pages/TeacherForm"

function Routes () {
    return (<BrowserRouter>
        <Route path="/" component={Home}/> {/*path / == home*/}
        {/* <Route path="/teachers" component={TeacherList}/>
        <Route path="/form" component={TeacherForm}/> */}
    </BrowserRouter>)
}
export default Routes