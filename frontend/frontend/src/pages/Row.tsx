import Flexbox from 'flexbox-react';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const arrow = require('./images/left_arrow.png');

const Row = (props: any) : JSX.Element => {
    const ref = useRef<any>();
    const [scrollLeft, setScroll] = useState(0);
    const [element, setElement] = useState<any>([])

    const scroll = (scrollOffset:any) => {
        let i = 0;
        while (i < (scrollOffset >= 0?scrollOffset: scrollOffset*-1)) {
            i++;
            setTimeout(() => {ref.current.scrollLeft += (scrollOffset >= 0?1:-1)}, 500/(scrollOffset >= 0?scrollOffset: scrollOffset*-1)*i);
        }
    };

    function getItems() {
        const tab : any = [];
        for (let i = 0; i < props.items.length; i++) {
            tab.push(<img width="200px" height="300px" src={props.items[i]["picture"]} style={{marginLeft:"5px", marginRight:"5px", objectFit:"cover"}}></img>);
            console.log(props.items[i]["picture"]);
        }
        setElement(tab);
    }

    return (
        <>
            <div style={{width:"100%"}} className=".ScrollHori">
                <Flexbox flexDirection='row'>
                <img src={arrow} width="40px" height="50px" style={{marginTop:"110px", marginLeft:"2%"}} onMouseDown={(event) => {scroll(-200)}} />
                <div style={{maxWidth:"90%", width:"90%", overflow:"scroll", marginLeft:"2%", marginRight:"2%"}} className="ScrollHori" ref={ref}>
                    <Flexbox flexDirection='row' key={props.items}>
                        {props.items}
                    </Flexbox>
                </div>
                <img src={arrow} width="40px" height="50px" className='flip-horizontaly' style={{marginTop:"110px", marginRight:"2%"}} onMouseDown={(event) => {scroll(200)}} />
                </Flexbox>
            </div>
        </>
    )
}

export default Row;
