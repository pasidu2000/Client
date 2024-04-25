import React from "react";
import Login from "./components/Login";
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/> }></Route>
            <Route path='/signup' element={<Signup/> }></Route>
            <Route path='/navbar' element={<NavBar/> }></Route>
        </Routes>
            
        </BrowserRouter>
    )
}
export default App
