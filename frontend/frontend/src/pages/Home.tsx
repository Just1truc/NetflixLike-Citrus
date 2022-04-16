import axios from 'axios';
import Flexbox from 'flexbox-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const logo = require("./images/logo2.png");
const background = require('./images/netflix.jpg');

const Home = ():JSX.Element => {
    const [activated, setActivated] = useState("nope");
    const [mouse, setMouse] = useState(false);

    function check_input(value: any) {
        var regex = new RegExp("^([a-zA-Z0-9+-|_~(){}$?]+@+[a-zA-Z0-9+-|_~(){}$?]+\\.+[a-zA-Z]+)$");
        if (regex.test(value) == true) {
            setActivated(value);
        } else
            setActivated("nope");
    }

    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 1%, rgba(255, 255, 255, 0) 50%), linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0) 50%), " + `url(${background})`, height:"1000px", backgroundSize:"cover", backgroundRepeat: "no-repeat"}}>
                <Flexbox justifyContent='space-between'>
                <Flexbox justifyContent="flex-start" marginLeft='1cm'>
                    <img src={logo} width="120vw" height="120vw"/>
                </Flexbox>
                        <Flexbox justifyContent="flex-end" marginRight='1cm' marginTop='0.8cm'>
                            <Link to="/login" style={{textDecoration:"none", height:"40px"}}>
                                <input type="button" style={{backgroundColor:"#e10712", width:"25%", color:"white", border:"none", height:"40px", minWidth:"100px", justifyContent:"center", borderRadius:"5px", fontWeight:"bold"}} value="Sign In" />
                            </Link>
                        </Flexbox>
                </Flexbox>
                <div style={{position:"absolute", top:"17%", left:"30%", right:"30%"}}>
                    <h1 style={{color:"white", fontSize:"3vw", textAlign:"center", minWidth:"240px"}}>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                        </style>
                        Unlimited movies, TV<br/>shows, and more.
                    </h1>
                    <p style={{color:"white", textAlign:"center", fontSize:"1.5vw", minWidth:"240px"}}>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
                        </style>
                        Watch anywhere. Cancel anytime.
                    </p>
                    <p style={{color:"white", textAlign:"center", fontSize:"1vw", minWidth:"240px"}}>
                        Ready to watch? Enter your email<br/>
                        to create or restart your membership.
                    </p>
                    <form style={{justifyContent:"center"}}>
                      <label>
                        <input type="text" style={{backgroundColor:"white", border: "solid 1px grey", height:"60px", width:"100%", minWidth:"240px", color:"grey", borderRadius:"5px", fontSize:"120%" }} name="name" placeholder="E-mail" onChange={(event) => {check_input(event.target.value)}}/>
                      </label>
                      <Link to={{pathname: "/register"}} style={{width:"25%", height:"60px", minWidth:"100px", marginLeft:"35%", borderRadius:"5px", marginTop:"3%"}} onClick={(event) => {localStorage.setItem("teub", activated)}}>
                        <input type="button" className='zoom' style={{backgroundColor:"#e10712", width:"25%", color:"white", border:"none", height:"60px", minWidth:"100px", justifyContent:"center", borderRadius:"5px", marginTop:"3%", fontWeight:"bold", opacity:(activated === "nope" ? 0.5 : 1)}} value="Get started" disabled={!(activated != "nope")} />
                      </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home;
