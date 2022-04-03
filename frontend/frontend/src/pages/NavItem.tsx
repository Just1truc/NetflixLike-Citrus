import { useState } from "react";

const NavItem = (props : any):JSX.Element => {
    const [open, setOpen] = useState(false);

    return (
        <div className="NavItem">
            <img src={props.src} width="50px" height="50px" onClick={() => setOpen(!open)}/>
            {open && props.children}
        </div>
    );
}

export default NavItem;