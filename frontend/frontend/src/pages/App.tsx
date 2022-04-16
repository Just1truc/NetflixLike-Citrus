import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home";
import Login from "./Login";
import YourAccount from "./YourAccount";
import { useState } from "react";
import Register from './Register';
import Page404 from "./Page404";
import { decodeToken, isExpired } from 'react-jwt';

const App = () : JSX.Element => {

    const [connected, setConnected] = useState(false);

    const getItem = () : string | null | undefined => {
        let token = localStorage.getItem("token");
        if (!(token === undefined)) {
            let decoded = decodeToken(String(token));
            let isexpired = isExpired(String(token));
            if (isexpired === true || decoded === undefined) {
                console.log("expired");
                return undefined;
            } else {
                return token;
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
                <Route path="/" element={(setUp() === true) ? <Navigate to="/browse"/> : <Home/>}/>
                <Route path="/browse" element={(setUp() === true) ? <Browse/> : <Navigate to="/"/>} />
                <Route path="/YourAccount" element={(setUp() === false) ? <Navigate to="/"/> : <YourAccount setConnection={() => setConnected(false)}/>} />
                <Route path="/login" element={<Login setToken={() => setConnected(true)}/>} />
                <Route path="/register" element={<Register setToken={() => setConnected(true)}/>} />
                <Route element={<Page404/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    </>
    )
};

export default App;
