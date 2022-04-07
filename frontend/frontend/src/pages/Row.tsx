import Flexbox from 'flexbox-react';

const Row = (props: any) : JSX.Element => {
    const elements = [];

    for (let i = 0; i < props.items; i++) {
        elements.push(<div style={{border:"solid white", position:"relative", marginLeft:"10px", width:"50px", height:"100px", backgroundColor:"red"}}><h1>ok</h1></div>);
    }

    return (
        <>
            <div style={{maxWidth:"100%", overflow:"scroll"}}>
                <Flexbox flexDirection='row'>
                    {elements}
                </Flexbox>
            </div>
        </>
    )
}

export default Row;
