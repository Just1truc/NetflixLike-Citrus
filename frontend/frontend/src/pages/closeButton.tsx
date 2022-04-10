import { useState } from "react";

const CloseButton = (props: any) : JSX.Element => {
    const [hover, setHover] = useState(false);

    return (
        <>
            <div style={{height:"80px", width:"80px", backgroundColor:(!hover) ? "#202020" : "#505050", borderRadius:"40px"}} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} onClick={() => props.onClick()}>
                <h1 style={{color:"white", fontSize:"50px", marginBottom:"10px", marginLeft:"32px"}}>-</h1>
            </div>
        </>
    )
}

export default CloseButton;