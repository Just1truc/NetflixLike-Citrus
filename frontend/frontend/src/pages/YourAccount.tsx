import axios from "axios";
import { useEffect, useState } from "react"
import Flexbox from 'flexbox-react';
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CloseButton from "./closeButton";
import { JsonObjectExpression } from "typescript";
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";

const logo = require('./images/logo2.png')
const background = require('./images/netflix.jpg')

const ChangeWindow = (props: any) : JSX.Element => {    
    const [password, setPassword] = useState<any>(false);
    const [value, setValue] = useState<any>(false);
    const [confirmValue, setConfirmValue] = useState<any>(false);
    const token = localStorage.getItem("token");

    function sendUpdate() {
        var params : any = {};
        params[props.Type.toLowerCase()] = value;
        console.log("envoi");
        console.log(props.Type.toLowerCase());
        axios.post("http://localhost:8080/YourAccount/update", {"password" : password}, {params : params, headers : {Authorization : "Bearer " + token}})
        .then((response) => {
            props.onClose();
        })
        .catch((error) => {
            if (error.response.status == 500)
                toast.error("Server error", {pauseOnHover:false, closeButton:false})
            else if (error.response.status == 400)
                toast.error("Wrong password", {pauseOnHover:false, closeButton:false})
        })
    }

    function testPassword(value: any) {
        var regex = new RegExp("^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+$");
        if (regex.test(value) == true)
            return value;
        else
            return false;
    }

    return (
        <>
            <div style={{backgroundColor:"black", opacity:0.7, position:"fixed", height:"100%", width:"100%"}}></div>
            <div style={{ width:"100%", height:"100%"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundColor:"#141414", position:"fixed", top:"10%", height:"80%", width:"80%", borderRadius:"40px", maxWidth:"600px"}}>
                        <Flexbox flexDirection="row" justifyContent="flex-end" style={{position:"relative"}}>
                            <div style={{position:"fixed", marginRight:"3%"}}>
                                <CloseButton onClick={props.onClose}/>
                            </div>
                        </Flexbox>
                        <Flexbox justifyContent="center" style={{marginTop:"150px", display:"flex", height:"40%"}}>
                            <div style={{ width:"70%", marginLeft:"-20px"}}>
                                <input type="password" style={{backgroundColor:"#252525", border:"none", color:"white", height:"60px", width:"100%", borderRadius:"15px", paddingLeft:"20px", maxWidth:"500px", marginTop:"30px", fontSize:"16px"}} placeholder="Password" onChange={(event) => setPassword(testPassword(event.target.value))}/>
                                <input type={props.Type === "Password" ? "password" : "text"} style={{backgroundColor:"#252525", border:"none", color:"white", height:"60px", width:"100%", borderRadius:"15px", paddingLeft:"20px", maxWidth:"500px", marginTop:"30px", fontSize:"16px"}} placeholder={"New " + props.Type} onChange={(event) => setValue(props.test(event.target.value))} />
                                <input type={props.Type === "Password" ? "password" : "text"} style={{backgroundColor:"#252525", border:"none", color:"white", height:"60px", width:"100%", borderRadius:"15px", paddingLeft:"20px", maxWidth:"500px", marginTop:"30px", fontSize:"16px"}} placeholder={"Confirm New " + props.Type} onChange={(event) => setConfirmValue(props.test(event.target.value))} />
                                <Button className="zoom" style={{backgroundColor:"red", border:"none", color:"white", height:"60px", width:"100%", borderRadius:"15px", maxWidth:"500px", marginTop:"50px", marginLeft:"10px", fontSize:"22px", fontWeight:"bold", opacity:(password !== false && confirmValue !== false && value !== false && confirmValue === value ? 1 : 0.5)}} onClick={() => sendUpdate()} disabled={!(password !== false && confirmValue !== false && value !== false && confirmValue === value)} >Modify</Button>
                            </div>
                        </Flexbox>
                    </div>
                </div>
            </div>
        </>
    )
}

const Info = (props : any) : JSX.Element => {
    return (
        <>
            <Flexbox flexDirection="row">
                <p style={{color:"white", fontSize:"24px", fontWeight:"bold"}}>{props.text}</p>
                <p style={{color:"white", fontSize:"24px", marginLeft:"15px"}}>{props.val}</p>
            </Flexbox>
        </>
    )
}

const Account = (props: any) : JSX.Element => {

    injectStyle();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [password, setPassword] = useState(false);
    const [email, setEmail] = useState(false);
    const [name, setName] = useState(false);
    const [firstname, setFirstname] = useState(false);

    const [account, setAccount] = useState<any[]>([{"email": "", "name" : "", "password" : "", "firstname" : ""}]);


    function RedirectToBrowse() {
        navigate(`/browse`);
    }

    function getAccount() {
        axios.get('http://localhost:8080/YourAccount', {headers : {'Authorization' : "Bearer " + token}})
        .then((response) => {
            console.log(response.data);
            setAccount(response.data);
        })
        .catch((err) => console.log(err));
    }

    function getEmail(value: any) {
        var regex = new RegExp("^([a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@+[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+\\.+[a-zA-Z]+)$");
        if (regex.test(value) == true)
            return value;
        else
            return false;
    }

    function getPassword(value: any) {
        var regex = new RegExp("^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+$");
        if (regex.test(value) == true)
            return value;
        else
            return false;
    }

    function getFirstname(value: any) {
        if (value !== "")
            return value;
        else
            return false;
    }

    function getName(value: any) {
        if (value !== "")
            return value;
        else
            return false;
    }

    useEffect(() => {
        getAccount();
    }, []);

    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 1%, rgba(255, 255, 255, 0) 50%), linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0) 50%), " + `url(${background})`, height:"100%", backgroundSize:"cover", backgroundRepeat: "no-repeat", position:"absolute", top:"0%", left:'0%', width:"100%"}}>
                <div style={{position:"fixed", backgroundColor:"#141414", opacity:0.5, width:"100%", height:'100%'}}>
                </div>
                <div style={{marginTop:"180px", position:"absolute", marginLeft:"100px", height:"50%"}}>
                    <h1 style={{color:"white"}}> Your Account </h1>
                    <Flexbox flexDirection="row" style={{marginTop:"50px"}}>
                        <div style={{height:"100%"}}>
                            <Info text="Your Name :" val={account[0]["name"]}></Info>
                            <Info text="Your Email :" val={account[0]["email"]}></Info>
                            <Info text="Your Firstname :" val={account[0]["firstname"]}></Info>
                            <Info text="Your Password :" val={account[0]["password"]}></Info>
                        </div>
                        <div style={{width:"20%", height:"308px"}}>
                            <Button className="zoom" style={{height:"50px", marginTop:"15px",border:"none", fontFamily:"sans-serif", fontSize:"16px", marginLeft:"1cm", backgroundColor:"red", fontWeight:"bold", borderRadius:"7px", color:"white", width:"200px"}} onClick={() => setName(true)} >Change Name</Button>
                            <Button className="zoom" style={{height:"50px", marginTop:"25px",border:"none", fontFamily:"sans-serif", fontSize:"16px", marginLeft:"1cm", backgroundColor:"red", fontWeight:"bold", borderRadius:"7px", color:"white", width:"200px"}} onClick={() => setEmail(true)} >Change Email</Button>
                            <Button className="zoom" style={{height:"50px", marginTop:"25px",border:"none", fontFamily:"sans-serif", fontSize:"16px", marginLeft:"1cm", backgroundColor:"red", fontWeight:"bold", borderRadius:"7px", color:"white", width:"200px"}} onClick={() => setFirstname(true)} >Change Firstname</Button>
                            <Button className="zoom" style={{height:"50px", marginTop:"25px",border:"none", fontFamily:"sans-serif", fontSize:"16px", marginLeft:"1cm", backgroundColor:"red", fontWeight:"bold", borderRadius:"7px", color:"white", width:"200px"}} onClick={() => setPassword(true)} >Change Password</Button>
                        </div>
                    </Flexbox>
                    <Button className="zoom" style={{height:"50px", marginTop:"50px", width:"20%", color:"white", backgroundColor:"red", border:"none", borderRadius:"7px", fontWeight:"bold", fontSize:"16px"}} onClick={() => {props.setConnection(); localStorage.clear(); navigate(`/`)}} >Disconnect</Button>
                </div>
                <div style={{position:"fixed", height:"120px", backgroundColor:"#181818", border:"solid #181818", width:"100%", top:"0%"}}>
                    <img src={logo} height="100px" width="100px" style={{marginLeft:"1cm", marginTop:"0.3cm"}} onClick={() => RedirectToBrowse()}/>
                </div>
                {password === true ? <ChangeWindow onClose={() => setPassword(false)} Type={"Password"} test={getPassword}></ChangeWindow> : <></>}
                {firstname === true ? <ChangeWindow onClose={() => setFirstname(false)} Type={"Firstname"} test={getFirstname}></ChangeWindow> : <></>}
                {name === true ? <ChangeWindow onClose={() => setName(false)} Type={"Name"} test={getName}></ChangeWindow> : <></>}
                {email === true ? <ChangeWindow onClose={() => setEmail(false)} Type={"Email"} test={getEmail}></ChangeWindow> : <></>}
            <ToastContainer theme="dark" position="bottom-right"/>
            </div>
        </>
    )
}

export default Account;