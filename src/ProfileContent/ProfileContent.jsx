import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import JoinUs from '../profile/JoinUs'
import { useState, useEffect } from 'react';
import { RiStarSFill } from "react-icons/ri";
import H2 from '../profile/H2';
import OnlineCard from '../profile/OnlineCard';
import cover from '/ProfileImages/cover.png'

export default function ProfileContent({ Imgsrc, coachName, link }) {
    let scrollUp=()=>{
        window.scroll(0,0);
    }
    return (
        <>
            <section className='profile px-3'>
                <div className="profileUp mb-3">
                    <div className="profileContent">
                        <h3 className='text-start text-capitalize'>profile</h3>

                        <div className="homeLinks d-flex justify-content-start">
                            <NavLink to='/' className='nav-link text-capitalize me-2'>home</NavLink>
                            <NavLink to='/getcoach' className='nav-link text-capitalize'>getcoach</NavLink>
                        </div>
                    </div>
                </div>

                <div className="profileDown">
                    <Card className='profileCard'>
                        <Card.Img variant="top" src={cover} />
                        <Card.Body className='d-flex justify-content-between'>
                            <div className="profileImg d-flex justify-content-start">
                                <img src={Imgsrc} alt="img" className='proImg' />
                                <div className="disContent my-auto ms-2">
                                    <h5 className='text-start text-capitalize'>{coachName}</h5>
                                    <p className='text-capitalize'>online training coach</p>

                                </div>
                            </div>
                            <div className="buttonImg my-auto">
                                <Link to={link} onClick={scrollUp}>
                                    <Button variant='primary' className='pri ms-auto text-capitalize'>see plans</Button>
                                </Link>

                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </>
    )
}
