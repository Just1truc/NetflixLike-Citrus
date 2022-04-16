import { EventEmitter } from "stream";
import { Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
import { css } from 'glamor';
import styled from 'styled-components';

const background = require('./images/netflix.jpg');

const Login = (props: any) : JSX.Element => {
    injectStyle();
    const navigate = useNavigate();
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [mouse, setMouse] = useState(false);
    const [error, setErrorValue] = useState(false);

    function check_email(value: any) {
        var regex = new RegExp("^([a-zA-Z0-9+-|_~(){}$?]+@+[a-zA-Z0-9+-|_~(){}$?]+\\.+[a-zA-Z]+)$");
        if (regex.test(value) == true)
            setEmail(value);
        else
            setEmail(false);
    }

    function check_password(value: any) {
        var regex = new RegExp("^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+$");
        if (regex.test(value) == true)
            setPassword(value);
        else
            setPassword(false);
    }

    function sendRequest() {
        console.log(email);
        console.log(password);
        if (email != false && password != false) {
            axios.post('http://localhost:8080/login', {"email": email, "password" : password})
            .then((response) => {
                if (response.status == 200) {
                    localStorage.setItem("token", response.data["token"]);
                    console.log(localStorage.getItem("token"));
                    props.setToken();
                    navigate(`/browse`)
                }
            })
            .catch((err) => {
                toast.error("This account does not exist or the password is not valid", {pauseOnHover:false, closeButton:false});
            });
        }
    }

    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 1%, rgba(255, 255, 255, 0) 50%), linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0) 50%), " + `url(${background})`, height:"1000px", backgroundSize:"cover", backgroundRepeat: "no-repeat"}}>
                <div style={{backgroundColor:"black", position:"absolute", opacity:"0.6", height:"60%", width:"20%", top:"20%", left:"40%", right:'40%', borderRadius:"10px", minWidth:"300px"}}>
                </div>
                <div style={{height:"60%", position:'absolute', width:"20%", top:"20%", left:"40%", right:'40%', minWidth:"300px"}}>
                    <div style={{marginTop:"10%"}}>
                    <h1 style={{color:"white", fontSize:"25px", textAlign:"left", marginLeft:"10%", minWidth:"240px"}}>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                        </style>
                        Sign In
                    </h1>
                    <Input type='text' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px"}} placeholder="E-mail" onChange={(event) => {check_email(event.target.value)}}></Input>
                    <input type='password' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px"}} placeholder="Password" onChange={(event) => {check_password(event.target.value)}}></input>
                    {error ? <h1 style={{color:"red", fontSize:"15px", marginLeft:'10%', maxWidth:"80%"}}>Ce compte n'existe pas ou le mot de passe est invalide</h1> : <></>}
                    <Button className="zoom" style={{backgroundColor:"red", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px", fontSize:"100%", borderRadius:"5px", marginTop:"10%", fontWeight:"bold", opacity:(!email || !password) ? 0.5 : 1}} disabled={email == false || password == false} onClick={() => {sendRequest()}} >Sign In</Button>
                    <div style={{marginTop:"0.5cm", marginLeft:"10%"}}>
                        <Flexbox flexDirection="row">
                            <Flexbox justifyContent="space-between" style={{width:"100%"}}>
                                <Flexbox justifyContent="flex-start" style={{width:"100%", marginTop:"4%"}}>
                                <input type="checkbox" style={{backgroundColor:"white", border:"none"}}></input>
                                <style>
                                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');
                                </style>
                                <p style={{color:"#737373", marginLeft:'3%', fontSize:"12px"}}>Remember me</p>
                                </Flexbox>
                                <Flexbox justifyContent="flex-end" style={{width:"100%", marginTop:"4%", marginRight:"10%"}}>
                                    <p style={{color:"#737373", marginLeft:'3%', fontSize:"12px"}}>Need help?</p>
                                </Flexbox>
                            </Flexbox>
                        </Flexbox>
                        <Flexbox flexDirection="row">
                        <p style={{color:"#737373", marginLeft:'3%', fontSize:"14px"}}>First time using Citrus?</p>
                        <Link to="/" style={{textDecoration:"none", height:"40px"}}>
                            <p style={{color:"white", fontSize:"14px", marginLeft:"4px"}}>Sign up</p>
                        </Link>
                        </Flexbox>
                    </div>
                    </div>
                </div>
                <ToastContainer theme="dark" position="bottom-right"/>
            </div>
        </>
    )
}

export default Login;