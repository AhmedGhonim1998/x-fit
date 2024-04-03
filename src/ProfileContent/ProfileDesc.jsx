import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import JoinUs from '../profile/JoinUs'
import { useState, useEffect } from 'react';
import { RiStarSFill } from "react-icons/ri";
import H2 from '../profile/H2';
import OnlineCard from '../profile/OnlineCard';
import { IoPersonSharp } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";
import person from "/ProfileImages/person.png";
import star from "/ProfileImages/star.png"
import i2023 from "/ProfileImages/img2023.png";
import i2021 from "/ProfileImages/img2021.png";

export default function ProfileDesc({ peopleCoached, reviews, aboutHim }) {
    return (
        <>
            <section className='description mt-3'>
                <div className="descContent px-3 mb-5">
                    <Row className='descRow'>
                        <Col className='descCol' lg={6} md={12} sm={12}>
                            <Card body className='my-auto cardRev'>
                                <div className="contnt my-auto">
                                    <div className="contentUP d-flex justify-content-start">
                                        <img src={person} alt="img" />
                                        <p className='ms-2 my-auto text-capitalize'>{peopleCoached}</p>
                                    </div>

                                    <div className="contentUP d-flex justify-content-start mt-3">
                                        <img src={star} alt="img" />
                                        <p className='ms-2 my-auto text-capitalize'>{reviews}</p>
                                    </div>
                                </div>
                            </Card>


                            <Card body className='my-auto cardRev mt-4'>
                                <div className="contnt my-auto">
                                    <h5 className='text-start text-capitalize'>speciality</h5>
                                    <div className="contentUP d-flex justify-content-start">
                                        <div className='speciality'>
                                            <p className='text-capitalize text-center'>body building</p>
                                        </div>
                                        <div className='speciality ms-4 general'>
                                            <p className='text-capitalize text-center'>general well being</p>
                                        </div>
                                    </div>

                                    <div className="contentUP d-flex justify-content-start mt-3">
                                        <div className='speciality'>
                                            <p className='text-capitalize text-center'>weight gain</p>
                                        </div>
                                        <div className='speciality ms-4'>
                                            <p className='text-capitalize text-center'>weight loss</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card body className='my-auto cardRev mt-4'>
                                <div className="contnt my-auto">
                                    <h5 className='text-start text-capitalize'>interested in</h5>
                                    <div className="contentUP d-flex justify-content-start">
                                        <div className='speciality'>
                                            <p className='text-capitalize text-center'>calisthenics</p>
                                        </div>
                                        <div className='speciality ms-4'>
                                            <p className='text-capitalize text-center'>Bodybuilding</p>
                                        </div>
                                    </div>

                                    <div className="contentUP d-flex justify-content-start mt-3">
                                        <div className='speciality'>
                                            <p className='text-capitalize text-center'>spirituality</p>
                                        </div>
                                        <div className='speciality ms-4'>
                                            <p className='text-capitalize text-center'>Fitness</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>



                        <Col className='descCol' lg={6} md={12} sm={12}>
                            <h5 className='text-capitalize text-start mb-4 aboutMe'>about me</h5>
                            <Card body className='cardRev'>{aboutHim}</Card>

                            <Card body className='mt-4 cardRev'>
                                <Row>
                                    <Col lg={6} md={12} sm={12}>
                                        <Card className="h-100 cerCard py-4">

                                            <Card.Img variant="top" src={i2023} loading="lazy" className='cerImg mx-auto' />
                                            <Card.Title className='text-center cerTitle text-capitalize'>internationally certified coach</Card.Title>
                                            <Card.Text className='text-center'>Diploma in Nutrition & Fitness courses equivalent to 40 credits , 1200 CPD Hours and13.5 CEU</Card.Text>
                                        </Card>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <Card className="h-100 cerCard py-4">

                                            <Card.Img variant="top" src={i2021} loading="lazy" className='cerImg mx-auto' />
                                            <Card.Title className='text-center cerTitle text-capitalize'>student certificate Coach</Card.Title>
                                            <Card.Text className='text-center'>successfully completed requirements of the curriculum </Card.Text>
                                        </Card>
                                    </Col>
                                </Row>





                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
