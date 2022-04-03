import { EventEmitter } from "stream";
import { Input, Button } from '@chakra-ui/react';

const background = require('./images/netflix.jpg');

const Login = () : JSX.Element => {
    let state = {value:"Adresse e-mail"};
    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 1%, rgba(255, 255, 255, 0) 50%), linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0) 50%), " + `url(${background})`, height:"1000px", backgroundSize:"cover", backgroundRepeat: "no-repeat"}}>
                <div style={{backgroundColor:"black", position:"absolute", opacity:"0.6", height:"60%", width:"20%", top:"20%", left:"40%", right:'40%', borderRadius:"10px", minWidth:"240px"}}>
                </div>
                <div style={{height:"60%", position:'absolute', width:"20%", top:"20%", left:"40%", right:'40%', minWidth:"240px"}}>
                    <div style={{marginTop:"10%"}}>
                    <h1 style={{color:"white", fontSize:"1.8vw", textAlign:"left", marginLeft:"10%", minWidth:"240px"}}>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                        </style>
                        S'identifier
                    </h1>
                    <Input type='text' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px"}} placeholder="E-mail ou numéro de téléphone"></Input>
                    <Input type='text' className='Input-class' style={{backgroundColor:"#333333", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px"}} placeholder="Mot de passe"></Input>
                    <Button style={{backgroundColor:"red", color:"#FAFAFA", border:"none", width:"80%", marginLeft:"10%", height:"50px", fontSize:"100%", borderRadius:"5px", marginTop:"10%", fontWeight:"bold"}}>S'identifier</Button>
                    <div style={{marginTop:"0.5cm", marginLeft:"10%"}}>
                        <input type="checkbox"></input>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;