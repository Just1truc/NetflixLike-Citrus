import { EventEmitter } from "stream";
import { Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import { useState } from "react";

const background = require('./images/netflix.jpg');

const Login = () : JSX.Element => {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    function check_email(value: any) {
        var regex = new RegExp("^([a-zA-Z0-9+-|_~(){}$?]+@+[a-zA-Z0-9+-|_~(){}$?]+\\.+[a-zA-Z]+)$");
        var regex2 = new RegExp("^[0-9 ]$")
        if (regex.test(value) == true || regex2.test(value))
            setEmail(true);
        else
            setEmail(false);
    }

    function check_password(value: any) {
        var regex = new RegExp("^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+$");
        if (regex.test(value) == true)
            setPassword(true);
        else
            setPassword(false);
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
                        S'identifier
                    </h1>
                    <Input type='text' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px"}} placeholder="E-mail ou numéro de téléphone" onChange={(event) => {check_email(event.target.value)}}></Input>
                    <input type='password' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px"}} placeholder="Mot de passe" onChange={(event) => {check_password(event.target.value)}}></input>
                    <Button style={{backgroundColor:"red", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px", fontSize:"100%", borderRadius:"5px", marginTop:"10%", fontWeight:"bold", opacity:(!email || !password) ? 0.5 : 1}} disabled={email && password}>S'identifier</Button>
                    <div style={{marginTop:"0.5cm", marginLeft:"10%"}}>
                        <Flexbox flexDirection="row">
                            <Flexbox justifyContent="space-between" style={{width:"100%"}}>
                                <Flexbox justifyContent="flex-start" style={{width:"100%", marginTop:"4%"}}>
                                <input type="checkbox" style={{backgroundColor:"white", border:"none"}}></input>
                                <style>
                                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');
                                </style>
                                <p style={{color:"#737373", marginLeft:'3%', fontSize:"12px"}}>Se souvenir de moi</p>
                                </Flexbox>
                                <Flexbox justifyContent="flex-end" style={{width:"100%", marginTop:"4%", marginRight:"10%"}}>
                                    <p style={{color:"#737373", marginLeft:'3%', fontSize:"12px"}}>Besoin d'aide?</p>
                                </Flexbox>
                            </Flexbox>
                        </Flexbox>
                        <Flexbox flexDirection="row">
                        <p style={{color:"#737373", marginLeft:'3%', fontSize:"14px"}}>Première visite sur Citrus?</p>
                        <Link to="/" style={{textDecoration:"none", height:"40px"}}>
                            <p style={{color:"white", fontSize:"14px", marginLeft:"4px"}}>Inscrivez-vous.</p>
                        </Link>
                        </Flexbox>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;