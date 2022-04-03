import { useState } from "react";
const bellicon = require('./images/bellIcon.png')

const DropDownList = ({items} : any, object : any):JSX.Element => {
    const [showMenu, setState] = useState('hide');
    var tab = [];
    for (let i of items) {
        tab.push(<button>{i.name}</button>)
    }
    return (
    <div>
        <img src={bellicon} width="50" height="50" onClick={showMenu === 'hide' ? () => setState('show') : () => setState('hide')}/>
        {showMenu === 'show' && (
            <div className="DropDownList">
                {tab}
            </div>
        )}
        {showMenu === 'hide' && (
            null
        )}
    </div>
    );
}

export default DropDownList;