import { useEffect, useState } from "react";
import { Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ConditionalLink from "./ConditionnalLink";
import Flexbox from 'flexbox-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { resourceUsage } from "process";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

const background = require("./images/netflix.jpg");


const Register = () : JSX.Element => {
    injectStyle();
    let email = localStorage.getItem("teub");
    if (email === null)
        email = "";
    const [mailValue, setValueMail] = useState(email)
    const [mail, setEmail] = useState(email);
    const [password, setPassword] = useState("bs");
    const [firstname, setFirstname] = useState("bs");
    const [name, setName] = useState("bs");
    const [mouse, setMouse] = useState(false);
    const [test, setValueTest] = useState(false);
    const [error, setError] = useState("none");
    const naviguate = useNavigate();

    function getEmail(value: any) {
        setValueMail(value);
        var regex = new RegExp("^([a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@+[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+\\.+[a-zA-Z]+)$");
        if (regex.test(value) == true)
            setEmail(value);
        else
            setEmail("bs");
    }

    function getPassword(value: any) {
        var regex = new RegExp("^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+$");
        if (regex.test(value) == true)
            setPassword(value);
        else
            setPassword("bs");
    }

    function getFirstname(value: any) {
        setFirstname(value);
    }

    function getName(value: any) {
        setName(value);
    }

    const sendRequest = () => {
        console.log({"email": mail, "password" : password, "firstname" : firstname, "name" : name});
        axios.post("http://localhost:8080/register", {"email": mail, "password" : password, "firstname" : firstname, "name" : name})
        .then((response) => {
            if (response.status === 200) {
                localStorage.setItem("token", response.data["token"])
                naviguate(`/browse`);
            } else {
                setError("true");
            }
        })
        .catch((err) => {
            toast.error("Le mail, nom ou prenom existent déjà", {pauseOnHover:false, closeButton:false});
        })
        console.log(error);
    }

    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 1%, rgba(255, 255, 255, 0) 50%), linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0) 50%), " + `url(${background})`, height:"1000px", backgroundSize:"cover", backgroundRepeat: "no-repeat", width:"100%"}}>
                <div style={{backgroundColor:"black", opacity:0.8, position:"absolute", height:"100%", width:"600px"}}></div>
                <div style={{position:"absolute", height:"100%", width:"600px"}}>
                    <h1 style={{color:"white", marginLeft:"10%", marginTop:"20%"}}>S'inscrire</h1>
                    <input type='text' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px"}} placeholder="Email" value={String(mailValue)} onChange={(event) => {getEmail(event.target.value)}}></input>
                    <input type='password' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px"}} placeholder="Mot de passe" onChange={(event) => {getPassword(event.target.value)}}></input>
                    <Flexbox flexDirection="row">
                        <input type='text' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"35%", marginLeft:"10%", height:"50px"}} placeholder="Prénom" onChange={(event) => {getFirstname(event.target.value)}}></input>
                        <input type='text' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"40%", marginLeft:"5%", height:"50px"}} placeholder="Nom" onChange={(event) => {getName(event.target.value)}}></input>
                    </Flexbox>
                    {error === "none" ?
                        <></>
                    : <h1 style={{color:"red", marginLeft:"10%", fontSize:"15px"}}>Le mail, nom ou prenom existent déjà</h1>}
                    <div style={{width:"25%", height:"60px", minWidth:"100px", marginLeft:"35%", borderRadius:"5px", marginTop:"3%"}}>
                        <input type="button" style={{backgroundColor:"#e10712", width:"100%", color:"white", border:(mouse ? "solid white" : "none"), height:"60px", minWidth:"100px", justifyContent:"center", borderRadius:"5px", fontWeight:"bold", opacity:((mail === "bs" || password === "bs" || firstname === "bs" || name === "bs") ? 0.5 : 1)}} value="Commencer >" disabled={!(mail != "bs" && password != "bs" && firstname != "bs" && name != "bs")} onMouseOver={(event) => {setMouse(true)}} onMouseOut={(event) => setMouse(false)} onClick={() => {sendRequest()}} />
                    </div>
                </div>
                <ToastContainer theme="dark" position="bottom-right"/>
            </div>
        </>
    )
}

export default Register;
