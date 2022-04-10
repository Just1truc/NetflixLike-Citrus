import axios from "axios";
import { useEffect, useState } from "react";
import CloseButton from "./closeButton";
import Flexbox from 'flexbox-react';

const PopUp = (props: any) : JSX.Element => {

    const [object, setObject] = useState<any>([{"picture" : "ok", "title" : "ok", "description":"ok"}])
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
            <div style={{position:"absolute", top:"0px", width:"100%", height:"100%", backgroundColor:"black", opacity:0.5}}></div>
            <div style={{position:"absolute", height:"100%", width:"80%", left:"10%", top:"10%", backgroundColor:"#161616", borderRadius:"30px"}}>
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
                    </div>
                </Flexbox>
            </div>
        </>
    )
}

export default PopUp;