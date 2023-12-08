import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";
import './style.css';
import { CiHome, CiCalendar, CiDeliveryTruck, CiTrash, CiViewList, CiUser } from "react-icons/ci";
import { width } from '@mui/system';

function Navbar() {
    const style = ({ isActive }) => ({
        color: isActive ? '#fff' : '#545e6f',
        background: isActive ? 'linear-gradient(180deg, rgba(66,109,236,1) 0%, rgba(134,201,145,1) 100%)' : '#f0f0f0',
    })
    return (
            <div id='Navbar' className='row align-items-center'>
                <div className='icon-container'>
                    <NavLink to="/home" className="NavLink" style={style}>
                        <CiHome className='icon'></CiHome>
                    </NavLink>
                </div>
                <div className='icon-container'>
                    <NavLink to="/assign-task" className="NavLink" style={style}>
                        <CiViewList className='icon'></CiViewList>
                    </NavLink>
                </div>
                <div className='icon-container'>
                    <NavLink to="/member" className="NavLink" style={style}>
                        <CiUser className='icon'></CiUser>
                    </NavLink>
                </div>
                <div className='icon-container'>
                    <NavLink to="/mcp" className="NavLink" style={style}>
                        <CiTrash className='icon'></CiTrash>
                    </NavLink>
                </div>
                <div className='icon-container'>
                    <NavLink to="/vehicle" className="NavLink" style={style}>
                        <CiDeliveryTruck className='icon'></CiDeliveryTruck>
                    </NavLink>
                </div>
                <div className='icon-container'>
                    <NavLink to="/calendar" className="NavLink" style={style}>
                        <CiCalendar className='icon'></CiCalendar>
                    </NavLink>
                </div>
            </div>
    );
}
export default Navbar;