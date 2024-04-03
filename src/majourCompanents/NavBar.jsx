import React from 'react'
import { Container , Nav , Navbar , Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import Profile from '../profile/Profile';
import img from "/image/x-fitLogo.png"
export default function NavBar() {
    return (
        <div>
            <Navbar expand="md" className="bg-body-tertiary navBar px-3">
                
                    <Profile />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to="/" className='nav-link linkGroups'>Home</NavLink>
                            <NavLink to="/getcoach" className='nav-link linkGroups'>Get a Coach</NavLink>
                            <NavLink to="/aboutus" className='nav-link linkGroups'>About Us</NavLink>
                        </Nav>
                        <NavLink to="/login" className='nav-link me-3 linkGroups my-2'>Login</NavLink>
                        <Button variant='primary'className='contactNavBtn pri'>
                            <Link to='./contactus' className='nav-link '>Contact Us</Link>
                        </Button>
                    </Navbar.Collapse>
                
            </Navbar>
        </div>
    )
}
