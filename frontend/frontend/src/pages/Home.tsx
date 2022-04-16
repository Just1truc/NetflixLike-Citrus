import axios from 'axios';
import Flexbox from 'flexbox-react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const logo = require("./images/logo2.png");
const background = require('./images/netflix.jpg');

const Home = ():JSX.Element => {
    const [activated, setActivated] = useState("nope");
    const [mouse, setMouse] = useState(false);

    const navigate = useNavigate();

    function check_input(value: any) {
        var regex = new RegExp("^([a-zA-Z0-9+-|_~(){}$?]+@+[a-zA-Z0-9+-|_~(){}$?]+\\.+[a-zA-Z]+)$");
        if (regex.test(value) == true) {
            setActivated(value);
        } else
            setActivated("nope");
    }

    const redirectToRegister = () => {
        localStorage.setItem("teub", activated);
        navigate(`/register`);
    }

    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 1%, rgba(255, 255, 255, 0) 50%), linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0) 50%), " + `url(${background})`, position:"absolute", top:"0%", left:"0%", height:"100%", backgroundSize:"cover", backgroundRepeat: "no-repeat", width:"100%"}}>
                <Flexbox justifyContent='space-between'>
                    <img src={logo} height="100px" width="100px" style={{marginLeft:"1cm"}} />
                    <button className='zoom' style={{marginTop:"0.8cm", height:"40px", marginRight:"1cm", width:"100px", border:"none", backgroundColor:"red", color:"white", borderRadius:"7px", fontWeight:"bold"}} onClick={() => navigate(`/login`) }>Sign In</button>
                </Flexbox>
                <div style={{position:"absolute", width:"100%", display:"flex",justifyContent:"center", flexDirection:"column"}}>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                    </style>
                    <h1 style={{color:"white", marginTop:"150px", textAlign:"center", fontSize:"40px"}}>Unlimited movies, TV<br/>shows, and more.</h1>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
                    </style>
                    <div style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"-30px"}}>
                    <p style={{color:"white", textAlign:"center", fontSize:"20px", width:"300px"}}>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                        <input style={{backgroundColor:"white", padding:"20px", width:"300px", border:"none", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px", color:"#666", fontSize:"15px"}} placeholder="E-mail" onChange={(event) => check_input(event.target.value)} />
                        <button className='zoom' style={{backgroundColor:"red", border:"none", color:"white", width:"120px", borderTopRightRadius:"5px", borderBottomRightRadius:"5px", fontWeight:"bold", opacity:(activated === "nope" ? 0.5 : 1)}} disabled={activated === "nope"} onClick={() => redirectToRegister()} >Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
