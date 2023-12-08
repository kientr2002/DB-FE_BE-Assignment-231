import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './style.css';
import { BiMessageRounded, BiBell, BiCog, BiMenu } from "react-icons/bi";

function Header() {
    return (
        <div className='container'>
            <div id='header' className='row align-items-center'>
                <div className='col-4'><BiMenu className='icon'/></div>
                <div className='col-8'>
                    <div className='row justify-content-end align-items-center'>
                        <div className='col-1'><BiMessageRounded className='icon col-1' /></div>
                        <div className='col-1'><BiBell className='icon col-1'/></div>
                        <div className='info-container col-3'>
                            <div className='row align-items-center'>
                                <div className='avatar col-3'>
                                    <img src={require('./AVATAR.png')} alt='avatar'></img>
                                </div>
                                <div className='info col-9'>
                                    <h5 className='name'>Nguyen Van A</h5>
                                    <p className='position'>Back Officer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-1'><BiCog className='icon col-1'/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;