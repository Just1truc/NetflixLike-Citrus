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
import { useNavigate } from 'react-router-dom';

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
    const [searchVal, setSearchValue] = useState("");

    const [movieSelect, setMovieSelect] = useState(false);
    const [serieSelect, setSerieSelect] = useState(false);
    const [movieChoosen, setChoosenMovie] = useState(false);
    const [serieChoosen, setChoosenSerie] = useState(false);
    const navigate = useNavigate();

    const [out, setOutput] = useState<any>([]);

    const ref = useRef<any>();
    const ref2 = useRef<any>();
    const searchRef = useRef<any>();

    function RedirectToAccount() {
        navigate(`/YourAccount`);
    }

    function Search(value: any) {
        axios.get('http://localhost:8080/browse/search', {headers : { 'Authorization' : "Bearer " + token }, params:{ qr : value }})
        .then((response) => {
            const data : any = [];
            for (var item in response.data)
                data.push(<div style={{width:"210px"}}><img id={response.data[item]['show_id']} width="200px" height="300px" className='Movie-box' src={response.data[item]["picture"]}  style={{marginLeft:"5px", marginRight:"5px", objectFit:"cover"}} onClick={(event) => {setVisible(true); setFocus(event.currentTarget.id)}}></img></div>)
            setOutput(data);
        })
    }

    function get_Objects() {
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

    return (
    <>
        <div ref={searchRef} style={{width:"100%", height:"100%"}}>
        {(searchVal === "" && movieChoosen === false && serieChoosen === false) ? 
        (<><style>
                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                </style><h1 style={{ color: "white", marginLeft: "10%", marginTop: "200px" }}>{films}</h1><div style={{ width: "100%" }} className=".ScrollHori">
                        <Flexbox flexDirection='row'>
                            <img src={arrow} width="40px" height="50px" style={{ marginTop: "110px", marginLeft: "2%" }} onMouseDown={(event) => { scroll(-500, ref); } } />
                            <div style={{ maxWidth: "90%", width: "90%", overflow: "scroll", marginLeft: "2%", marginRight: "2%", height: "310px" }} className="ScrollHori" ref={ref}>
                                <Flexbox flexDirection='row' key={movies}>
                                    {movies}
                                </Flexbox>
                            </div>
                            <img src={arrow} width="40px" height="50px" className='flip-horizontaly' style={{ marginTop: "110px", marginRight: "2%" }} onMouseDown={(event) => { scroll(500, ref); } } />
                        </Flexbox>
                    </div><style>
                        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                    </style>
                    <h1 style={{ color: "white", marginLeft: "10%", marginTop: "80px" }}>Series</h1><div style={{ width: "100%" }} className=".ScrollHori">
                        <Flexbox flexDirection='row'>
                            <img src={arrow} width="40px" height="50px" style={{ marginTop: "110px", marginLeft: "2%" }} onMouseDown={(event) => { scroll(-500, ref2); } } />
                            <div style={{ maxWidth: "90%", width: "90%", overflow: "scroll", marginLeft: "2%", marginRight: "2%", height: "310px" }} className="ScrollHori" ref={ref2}>
                                <Flexbox flexDirection='row' key={Series}>
                                    {Series}
                                </Flexbox>
                            </div>
                            <img src={arrow} width="40px" height="50px" className='flip-horizontaly' style={{ marginTop: "110px", marginRight: "2%" }} onMouseDown={(event) => { scroll(500, ref2); } } />
                        </Flexbox>
                    </div></>
        ) : 
        ((searchVal != "" && movieChoosen === false && serieChoosen === false) ? (<>
            <Flexbox flexWrap='wrap' style={{marginTop:"200px", marginRight:"10%", marginLeft:"10%"}}>
                {!visible ? out : <></>}
            </Flexbox>
        </>) : (
        (movieChoosen === true) ?
        (<>
            <div style={{marginTop:"180px", marginRight:"5%", marginLeft:"6%"}}>
            <h1 style={{color:"white"}}>Movies</h1>
            <Flexbox flexWrap='wrap'>
                {!visible ? movies : <></>}
            </Flexbox>
            </div>
        </>): (
        (serieChoosen === true) ? (
            <>
                <div style={{marginTop:"180px", marginRight:"5%", marginLeft:"6%"}}>
                <h1 style={{color:"white"}}>Series</h1>
                <Flexbox flexWrap='wrap'>
                    {!visible ? Series : <></>}
                </Flexbox>
                </div>
            </>
        ) : (<></>)
        )
        )
        )}
        <div style={{position:"fixed", height:"120px", backgroundColor:"#181818", border:"solid #181818", width:"100%", top:"0%"}}>
            <Flexbox flexDirection='row' justifyContent='space-between' style={{marginTop:"20px"}}>
                <Flexbox flexDirection='row'>
                    <img src={logo} height="100px" width="100px" style={{marginLeft:"1cm"}} onClick={(event) => {setSearchValue(""); setChoosenMovie(false); setChoosenSerie(false)}}/>
                    <div style={{marginTop:"0.6cm"}}>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');
                        </style>
                        <Flexbox flexDirection='row'>
                            <p style={{color:(movieSelect ? "white" : "#747474"), marginLeft:"1cm"}} onMouseOver={() => {setMovieSelect(true)}} onMouseOut={() => {setMovieSelect(false)}} onClick={() => {setChoosenSerie(false); setChoosenMovie(true)}} >Movies</p>
                            <p style={{color:(serieSelect ? "white" : "#747474"), marginLeft:"0.5cm"}} onMouseOver={() => {setSerieSelect(true)}} onMouseOut={() => {setSerieSelect(false)}} onClick={() => {setChoosenSerie(true); setChoosenMovie(false)}} >Series</p>
                        </Flexbox>
                    </div>
                </Flexbox>
                <Flexbox flexDirection='row' style={{marginRight:"1cm", marginTop:"0.7cm"}}>
                    <div className="search-box">
                        <button className="btn-search"><img src={magnifying_glass} width="40" height="40" margin-left="10" className="loupe"/><i className="fas fa-search"></i></button>
                        <input type="text" className="input-search" placeholder='Search' value={searchVal} onChange={(event) => {setSearchValue(event.target.value); Search(event.target.value)}}/>
                    </div>
                    <img height="50px" width="50px" src={profile} onClick={() => RedirectToAccount()}/>
                </Flexbox>
            </Flexbox>
        </div>
        <h1 style={{marginBottom:"15%"}}></h1>
        <div style={{height:"100%"}}>
            {(visible === true) ? (<PopUp onClose={() => {setVisible(false)}} Id={focus}/>) : (<></>)}
        </div>
        </div>
    </>
    );
}

export default Browse;