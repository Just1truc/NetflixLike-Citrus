import React, { useEffect, useState } from 'react';
import Flexbox from 'flexbox-react';
import DropDownList from './DropDownMenu';
import Navbar from './Navbar';
import NavItem from './NavItem';
import { text } from 'stream/consumers';
import { Container } from 'react-dom';
import DropDownBox from './DropDownBox';
import axios from 'axios';
import Movie from './Movie';
import Row from './Row';
import PopUp from './PopUp';
import './theme/row.css';
import { get } from 'https';
import { toast } from '@chakra-ui/react';
import { useRef } from 'react';

const logo = require('./images/logo2.png');
const magnifying_glass = require('./images/magnifying_glass.png');
const profile = require('./images/profile.png');
const bellicon = require('./images/bellIcon.png');
const arrow = require('./images/left_arrow.png');

const Browse = ():JSX.Element => {
    const [objects, setObjects] = useState([])
    const token = localStorage.getItem("token");
    let [movies, setMovies] = useState<any>([]);
    let [Series, setSeries] = useState<any>([]);
    const [visible, setVisible] = useState(false);
    const [focus, setFocus] = useState<any>({});
    const ref = useRef<any>();
    const ref2 = useRef<any>();
    console.log(token);

    function get_Objects() {
        console.log(token);
        axios.get('http://localhost:8080/browse', { headers: { 'Authorization' : "Bearer " + token }})
        .then((response) => {
            setObjects(response.data);
            const serie : any = [];
            const Movies : any = [];
            for (var item in response.data) {
                if (response.data[item]["type"] === "TV Show")
                    serie.push(<div style={{width:"210px"}}><img id={response.data[item]['show_id']} width="200px" height="300px" className='Movie-box' src={response.data[item]["picture"]}  style={{marginLeft:"5px", marginRight:"5px", objectFit:"cover"}} onClick={(event) => {setVisible(true); setFocus(event.currentTarget.id)}}></img></div>);
                else
                    Movies.push(<div style={{width:"210px"}}><img id={response.data[item]['show_id']} width="200px" height="300px" className='Movie-box' src={response.data[item]["picture"]}  style={{marginLeft:"5px", marginRight:"5px", objectFit:"cover"}} onClick={(event) => {setVisible(true); setFocus(event.currentTarget.id)}}></img></div>);
            }
            setMovies(Movies);
            setSeries(serie);
        })
        .catch((err) => {console.log(err)});
    }

    const scroll = (scrollOffset:any, ref:any) => {
        let i = 0;
        while (i < (scrollOffset >= 0?scrollOffset: scrollOffset*-1)) {
            i++;
            setTimeout(() => {ref.current.scrollLeft += (scrollOffset >= 0?1:-1)}, 500/(scrollOffset >= 0?scrollOffset: scrollOffset*-1)*i);
        }
    };

    useEffect(() => {
        get_Objects();
    }, []);

    const films = "Films & Movies";
    console.log(visible);

    return (
    <>
        <Navbar style={{position:"absolute"}}>
            <Flexbox flexDirection="row" justifyContent="space-between">
                <Flexbox justifyContent="flex-start">
                    <img src={logo} width="100px" height="100px"/>
                </Flexbox>
                <Flexbox flexDirection="row">
                    <Flexbox marginTop="0.7cm" marginRight="0.1cm">
                        <div className="search-box">
                          <button className="btn-search"><img src={magnifying_glass} width="40" height="40" margin-left="10" className="loupe"/><i className="fas fa-search"></i></button>
                          <input type="text" className="input-search"/>
                        </div>
                    </Flexbox>
                    <Flexbox marginTop="0.6cm" marginRight="2.5cm">
                        <NavItem src={bellicon}>
                            <div className="DropList">
                                <Flexbox flexDirection="column" justifyContent="center">
                                    <DropDownBox items="NianCat"></DropDownBox>
                                    <DropDownBox items="Sherlock"></DropDownBox>
                                    <DropDownBox items="oui"></DropDownBox>
                                    <DropDownBox items="POUTRE"></DropDownBox>
                                </Flexbox>
                            </div>
                        </NavItem>
                    </Flexbox>
                    <Flexbox marginTop="0.6cm" marginRight="2.5cm">
                        <NavItem src={profile}>
                            <div className="DropList">
                                <Flexbox flexDirection="column" justifyContent="center">
                                    <DropDownBox items="Profile"></DropDownBox>
                                    <DropDownBox items="Settings"></DropDownBox>
                                    <DropDownBox items="Accounts"></DropDownBox>
                                    <DropDownBox items="Sign Out"></DropDownBox>
                                    <DropDownBox items="Sign In"></DropDownBox>
                                </Flexbox>
                            </div>
                        </NavItem>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Navbar>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
        </style>
        <h1 style={{color:"white", marginLeft:"10%", marginTop:"80px"}}>{films}</h1>
        <div style={{width:"100%"}} className=".ScrollHori">
                <Flexbox flexDirection='row'>
                <img src={arrow} width="40px" height="50px" style={{marginTop:"110px", marginLeft:"2%"}} onMouseDown={(event) => {scroll(-500, ref)}} />
                <div style={{maxWidth:"90%", width:"90%", overflow:"scroll", marginLeft:"2%", marginRight:"2%", height:"310px"}} className="ScrollHori" ref={ref}>
                    <Flexbox flexDirection='row' key={movies}>
                        {movies}
                    </Flexbox>
                </div>
                <img src={arrow} width="40px" height="50px" className='flip-horizontaly' style={{marginTop:"110px", marginRight:"2%"}} onMouseDown={(event) => {scroll(500, ref)}} />
                </Flexbox>
        </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
        </style>
        <h1 style={{color:"white", marginLeft:"10%", marginTop:"80px"}}>Series</h1>
        <div style={{width:"100%"}} className=".ScrollHori">
                <Flexbox flexDirection='row'>
                <img src={arrow} width="40px" height="50px" style={{marginTop:"110px", marginLeft:"2%"}} onMouseDown={(event) => {scroll(-500, ref2)}} />
                <div style={{maxWidth:"90%", width:"90%", overflow:"scroll", marginLeft:"2%", marginRight:"2%", height:"310px"}} className="ScrollHori" ref={ref2}>
                    <Flexbox flexDirection='row' key={Series}>
                        {Series}
                    </Flexbox>
                </div>
                <img src={arrow} width="40px" height="50px" className='flip-horizontaly' style={{marginTop:"110px", marginRight:"2%"}} onMouseDown={(event) => {scroll(500, ref2)}} />
                </Flexbox>
        </div>
        <h1 style={{marginBottom:"15%"}}></h1>
        {(visible === true) ? (<PopUp onClose={() => {setVisible(false)}} Id={focus}/>) : (<></>)}
    </>
    );
}

export default Browse;