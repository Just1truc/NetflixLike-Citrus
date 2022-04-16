import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home";
import Login from "./Login";
import YourAccount from "./YourAccount";
import { useState } from "react";
import Register from './Register';
import { decodeToken, isExpired } from 'react-jwt';

const App = () : JSX.Element => {

    const [connected, setConnected] = useState(false);

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

    const setUp = () : boolean => {
        return (!(getItem() === undefined) || connected === true)
    }

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/browse" element={(setUp() === false) ? <Navigate to="/"/>:<Browse/>} />
                <Route path="/YourAccount" element={(setUp() === false) ? <Navigate to="/"/> : <YourAccount/>} />
                <Route path="/login" element={<Login setToken={() => setConnected(true)}/>} />
                <Route path="/register" element={<Register setToken={() => setConnected(true)}/>} />
            </Routes>
        </BrowserRouter>
    </>
    )
};

export default App;
