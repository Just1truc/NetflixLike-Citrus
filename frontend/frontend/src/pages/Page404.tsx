import { useNavigate } from "react-router-dom";

const background = require("./images/404image.jpg");

const Page404 = () : JSX.Element => {

    const navigate = useNavigate();

    return (
        <>
            <div style={{position:"absolute", top:"0%", left:"0%", width:"100%", height:"100%", backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}>
                <div style={{display:"flex", justifyContent:"center", height:"100%"}}>
                    <div>
                        <h1 style={{color:"white", marginTop:"250px", fontSize:"45px", textAlign:"center", height:"60px"}}>Lost Your Way?</h1>
                        <div style={{width:"100%", justifyContent:"center", display:"flex"}}>
                        <button className="zoom" style={{backgroundColor:"#fff", border:"none", height:"50px", width:"100px", borderRadius:"7px", color:"#666" }} onClick={() => navigate(`/`)} >Homepage</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page404;