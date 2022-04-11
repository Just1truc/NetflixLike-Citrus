import axios from "axios";
import { useEffect, useState } from "react";
import CloseButton from "./closeButton";
import Flexbox from 'flexbox-react';

const PopUp = (props: any) : JSX.Element => {

    const [object, setObject] = useState<any>([{"picture" : "No info", "title" : "No info", "description":"No info", "cast" : "No info", "listed_in" : "No info", "release_year" : "No info", "duration" : "No info", "country" : "No info", "director" : "No info"}])
    const token = localStorage.getItem("token");

    function getObjects() {
        axios.get('http://localhost:8080/browse', { params: {jbv : props.Id}, headers: { 'Authorization' : "Bearer " + token }})
        .then((response) => {
            setObject(response.data);
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
            console.log(err.status)
        });
    }

    useEffect(() => {
        getObjects();
    }, [])

    return (
        <>
            <div style={{position:"fixed", top:"0px", width:"100%", height:"140%", backgroundColor:"black", opacity:0.5}}></div>
            <div style={{position:"fixed", height:"100%", width:"100%", top:"0%", left:"0%", backgroundColor:"#141414", borderRadius:"30px"}}>
                <Flexbox justifyContent="flex-end">
                <div style={{marginRight:"3%"}}>
                    <CloseButton onClick={props.onClose}/>
                </div>
                </Flexbox>
                <Flexbox flexDirection="row">
                    <img src={object[0]["picture"]} height="450px" width="300px" style={{objectFit:"cover", marginLeft:"100px", borderRadius:"30px"}}/>
                    <div style={{marginLeft:"5%", width:"60%"}}>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                        </style>
                        <h1 style={{color:"white", width:"100%"}}>{object[0]["title"]}</h1>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
                        </style>
                        <p style={{color:"white", fontSize:"20px"}}>{object[0]["description"]}</p>
                        <Flexbox flexDirection="row" style={{height:"35px"}}>
                            <style>
                                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
                            </style>
                            <p style={{color:"#949494", fontSize:"20px"}}>Genre:</p>
                            <p style={{color:"white", fontSize:"20px", marginLeft:"5px", width:"80%"}}>{object[0]["listed_in"]}</p>
                        </Flexbox>
                        <Flexbox flexDirection="row" style={{height:"35px"}}>
                            <style>
                                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
                            </style>
                            <p style={{color:"#949494", fontSize:"20px"}}>Release year:</p>
                            <p style={{color:"white", fontSize:"20px", marginLeft:"5px", width:"80%"}}>{object[0]["release_year"]}</p>
                        </Flexbox>
                        <Flexbox flexDirection="row" style={{height:"35px"}}>
                            <style>
                                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
                            </style>
                            <p style={{color:"#949494", fontSize:"20px"}}>Duration:</p>
                            <p style={{color:"white", fontSize:"20px", marginLeft:"5px", width:"80%"}}>{object[0]["duration"]}</p>
                        </Flexbox>
                        <Flexbox flexDirection="row" style={{height:"35px"}}>
                            <style>
                                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
                            </style>
                            <p style={{color:"#949494", fontSize:"20px"}}>Pays:</p>
                            <p style={{color:"white", fontSize:"20px", marginLeft:"5px", width:"80%"}}>{object[0]["country"]}</p>
                        </Flexbox>
                    </div>
                </Flexbox>
                <div style={{marginLeft:"100px", marginTop:"30px"}}>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
                    </style>
                    <Flexbox flexDirection="row">
                        <p style={{color:"white", fontSize:"25px"}}>A propos de </p>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
                        </style>
                        <p style={{color:"white", marginLeft:"7px", fontWeight:"bold", fontSize:"25px"}}>{object[0]["title"]}</p>
                    </Flexbox>
                    <Flexbox flexDirection="row" style={{height : "100%"}}>
                        <p style={{color:"#949494", fontSize:"20px"}}>Cast:</p>
                        <p style={{color:"white", fontSize:"20px", marginLeft:"5px", width:"80%"}}>{object[0]["cast"]}</p>
                    </Flexbox>
                    <Flexbox flexDirection="row" style={{height: "100%"}}>
                        <p style={{color:"#949494", fontSize:"20px"}}>Director:</p>
                        <p style={{color:"white", fontSize:"20px", marginLeft:"5px", width:"80%"}}>{object[0]["director"]}</p>
                    </Flexbox>
                </div>
            </div>
        </>
    )
}

export default PopUp;