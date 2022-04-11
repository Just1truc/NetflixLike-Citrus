import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home";
import Login from "./Login";
import { useState } from "react";
import Register from './Register';
import { decodeToken, isExpired } from 'react-jwt';

const App = () : JSX.Element => {

    const getItem = () : string | null | undefined => {
        let token = localStorage.getItem("token");
        if (token != undefined) {
            let decoded = decodeToken(String(token));
            let isexpired = isExpired(String(token));
            if (isexpired === true || decoded === undefined) {
                console.log("expired");
                return undefined;
            }
        }
        return token;
    }

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={(getItem() === undefined) ? <Home/>:<Navigate to="/browse"/>}/>
                <Route path="/browse" element={(getItem() === undefined) ? <Navigate to="/"/>:<Browse/>} />
                <Route path="/profile" element={<h1>profile</h1>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    </>
    )
};

export default App;
