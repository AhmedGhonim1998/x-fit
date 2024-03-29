import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import JoinUs from '../profile/JoinUs'

export default function GetCoach() {
    return (
        <>
            {/****************************start lose weight section*****************************************/}
            <section className='loseWeight'>
                <div className='loseWeightContainer pt-5 px-3'>
                    <Row className='loseweightRow'>
                        <Col className='loseWeightCol my-auto' lg={8} md={12} sm={12}>
                            <p className='text-capitalize mb-5 mt-4'>online personal training</p>
                            <h4 className='text-capitalize text-start w-75 mb-5'>lose weight, build muscle, get healthy. whatever your
                                fitness goal, we have a coach for you!</h4>
                            <div className='chechoutLoseWeight'>
                                <JoinUs />
                            </div>
                        </Col>

                        <Col className='loseWeightCol' lg={4} md={12} sm={12}>
                            <img src="./image/loseWeight.png" alt="img" className='loseWeightImg' />
                        </Col>
                    </Row>
                </div>
            </section>
            {/****************************end lose weight section*****************************************/}
            {/****************************start our trainers section**************************************/}
            <section className='ourTrainers'>
                <div className='ourTrainersContainer'>
                    <div className="upperTrainers">
                        <div className='d-flex justify-content-center headingContainer mx-auto'>
                            <div className='firstHead@'>
                            <h2 className='text-capitalize text-center'>meet</h2>
                            </div>
                            <div className='ms-2 h2Trainers'>
                                <h2 className='text-capitalize text-center '>our trainers</h2>
                            </div>
                        </div>
                        <h4 className='text-start text-capitalize ps-3'>fitness & nutrition coaches</h4>
                        <div className='d-flex justify-content-start ps-3'>
                            <NavLink className='nav-link text-capitalize' to='/'>home page</NavLink>
                            <NavLink className='nav-link text-capitalize ms-3' to='/getcoach'>get a coach</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
