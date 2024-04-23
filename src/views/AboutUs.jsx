import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import JoinUs from '../profile/JoinUs'
import  { useState, useEffect } from 'react';
import { RiStarSFill } from "react-icons/ri";
import H2 from '../profile/H2';
import OnlineCard from '../profile/OnlineCard';
import ourValues from '/aboutUsImgs/ourValues.png';

const values = [
    {
        tail :'Community:',
        par:' Fostering a sense of belonging and support among members, creating a space where people feel comfortable working out together.'
    },
    {
        tail:'Health and Wellbeing:',
        par:'Emphasizing a holistic approach to fitness that considers physical, mental, and emotional well-being. This could include offering a variety of classes, workshops, or having a registered dietician on staff',
    },
    {
        tail:'Integrity:',
        par:' Conducting business with honesty and transparency, such as fair pricing and clear membership contracts.'
    },
    {
        tail:'Professionalism:',
        par:'The staff is knowledgeable, certified, and conducts themselves with good manners.'
    },
    {
        tail:'Respect:',
        par:'Everyone is treated with dignity and consideration, regardless of fitness level, age, or background.'
    }
];
export default function AboutUs() {
    const valueDelails = values.map((item , index)=>(<li key={index} className='list mb-3'><h5>{item.tail}</h5>{item.par}</li>))
    return (
        <>
            {/****************************start about us  section*****************************************/}
                <section className='aboutUS py-5'>
                    <div className="aboutUsConatiner px-5">
                        <Row className='aboutUSRow'>
                            <Col className='aboutUsCol imgCol' lg={4} md={12} sm={12}>
                                <img src="./aboutUsImgs/firstAbout.png" alt="img" className='aboutImg mb-5' />
                            </Col>

                            <Col className='aboutUsCol my-auto' lg={8} md={12} sm={12}>
                                <h3 className='text-start text-capitalize mt-2'>about us</h3>
                                <p className='aboutFont'>X-Fit is an online platform that is founded in 2023. It offers online coaching
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
                    <div className="aboutUsConatiner px-5">
                        <Row className='aboutUSRow'>
                            <Col className='aboutUsCol my-auto' lg={8} md={12} sm={12}>
                                <h3 className='text-start text-capitalize'>our mission</h3>
                                <p className='mb-3 aboutFont'>Our mission is to create meaningful connections between coaches and athletes. We believe that personalized guidance, expert coaching, and unwavering support are essential for every fitness journey. By fostering these connections, we empower athletes to achieve their health and wellness goals, regardless of their background, budget, or location. Together, we build a community where fitness transcends physical boundaries and transforms lives.</p>
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
                    <div className="aboutUsConatiner px-5">
                        <Row className='aboutUSRow'>
                            <Col className='aboutUsCol imgCol' lg={4} md={12} sm={12}>
                                <img src="./aboutUsImgs/thirdAbout.png" alt="img" className='aboutImg mb-5' />
                            </Col>

                            <Col className='aboutUsCol my-auto' lg={8} md={12} sm={12}>
                                <h3 className='text-start text-capitalize'>vision</h3>
                                <p className='aboutFont'>Our Vision is to create a global movement where people of all backgrounds, ages
                                , and fitness levels can come together to support and uplift each other on their
                                journey to better health.</p>
                            </Col>
                        </Row>
                        <hr />
                    </div>
                </section>
            {/****************************end vision  section********************************************/}
            {/****************************start our values  section************************************/}
            <section className='aboutUS py-5'>
                    <div className="aboutUsConatiner px-5">
                        <Row className='aboutUSRow'>
                            <Col className='aboutUsCol my-auto' lg={8} md={12} sm={12}>
                                <h3 className='text-start text-capitalize mb-2'>Our values</h3>
                                <ul>
                                    {valueDelails}
                                </ul>
                            </Col>

                            <Col className='aboutUsCol imgCol my-auto mb-0' lg={4} md={12} sm={12}>
                                <img src={ourValues} alt="img" className='aboutImg mb-5' />
                            </Col>
                        </Row>
                        
                    </div>
                    
                </section>
            {/****************************end our values  section*****************************************/}
        </>
    )
}
