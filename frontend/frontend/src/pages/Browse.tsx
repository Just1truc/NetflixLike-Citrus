import React from 'react';
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
import './theme/row.css';

const logo = require('./images/logo2.png');
const magnifying_glass = require('./images/magnifying_glass.png');
const profile = require('./images/profile.png');
const bellicon = require('./images/bellIcon.png');

const Browse = ():JSX.Element => {
    axios.get('http://localhost:8080/')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    const nbr = 50;
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
        <Row items="80"></Row>
    </>
    );
}

export default Browse;