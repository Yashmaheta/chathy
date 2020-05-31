import React from 'react'

import './Infobar.css';
 import closeIcon from '../icons/closeIcon.png';
import onlineIcon from '../icons/onlineIcon.png';
import logo from '../icons/logo.png';
const Infobar = ({room}) =>
(
    <div className="infoBar">
        <div className="leftInnerContainer">
        <img className="logo" src={logo} alt="logo"/>
        <img className="onlineIcon" src={onlineIcon} alt="online image"/>
        <h3> {room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close image"/></a>
        </div>
    </div>

);

export default Infobar;