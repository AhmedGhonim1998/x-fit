import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import JoinUs from '../profile/JoinUs'
import  { useState, useEffect } from 'react';
import { RiStarSFill } from "react-icons/ri";
import H2 from '../profile/H2';
import OnlineCard from '../profile/OnlineCard';
export default function AboutUs() {
    return (
        <>
            {/****************************start about us  section*****************************************/}
                <section className='aboutUS py-5'>
                    <div className="aboutUsConatiner px-3">
                        <Row className='aboutUSRow'>
                            <Col className='aboutUsCol imgCol' lg={4} md={12} sm={12}>
                                <img src="./aboutUsImgs/firstAbout.png" alt="img" className='aboutImg mb-5' />
                            </Col>

                            <Col className='aboutUsCol my-auto' lg={8} md={12} sm={12}>
                                <h3 className='text-start text-capitalize mt-2'>about us</h3>
                                <p className=''>X-Fit is an online platform that is founded in 2023. It offers online coaching
                                services to athletes with variety of top professional coaches. We believe
                                fitness and a healthy lifestyle should be accessible to everyone, regardless
                                of their background, budget, or location. We're passionate about connecting
                                people with the knowledge, support, and guidance they need to achieve
                                their unique health and wellness goals.</p>
                            </Col>
                        </Row>
                        <hr />
                    </div>
                </section>
            {/****************************end about us  section*****************************************/}
            {/****************************start our mission  section************************************/}
            <section className='aboutUS py-5'>
                    <div className="aboutUsConatiner px-3">
                        <Row className='aboutUSRow'>
                            <Col className='aboutUsCol my-auto' lg={8} md={12} sm={12}>
                                <h3 className='text-start text-capitalize'>our mission</h3>
                                <p className='mb-3'>X-Fit aims to empower the community through fitness, one workout at a time
                                leading the future of fitness with cutting-edge technology and expert-led wellness
                                programs.</p>
                            </Col>

                            <Col className='aboutUsCol imgCol' lg={4} md={12} sm={12}>
                                <img src="./aboutUsImgs/secondAbout.png" alt="img" className='aboutImg mb-5' />
                            </Col>
                        </Row>
                        <hr />
                    </div>
                    
                </section>
            {/****************************end our mission  section*****************************************/}
            {/****************************start vision  section********************************************/}
            <section className='aboutUS py-5'>
                    <div className="aboutUsConatiner px-3">
                        <Row className='aboutUSRow'>
                            <Col className='aboutUsCol imgCol' lg={4} md={12} sm={12}>
                                <img src="./aboutUsImgs/thirdAbout.png" alt="img" className='aboutImg mb-5' />
                            </Col>

                            <Col className='aboutUsCol my-auto' lg={8} md={12} sm={12}>
                                <h3 className='text-start text-capitalize'>vision</h3>
                                <p className=''>Our Vision is to create a global movement where people of all backgrounds, ages
                                , and fitness levels can come together to support and uplift each other on their
                                journey to better health.</p>
                            </Col>
                        </Row>
                        
                    </div>
                </section>
            {/****************************end vision  section********************************************/}

        </>
    )
}
