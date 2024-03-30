import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import JoinUs from '../profile/JoinUs'
import { useState, useEffect } from 'react';
import { RiStarSFill } from "react-icons/ri";
import H2 from '../profile/H2';
import OnlineCard from '../profile/OnlineCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function Login() {
    return (
        <>
            <section className='login'>
                <div className="loginContainer px-3 my-5">
                    <Row className='loginRow'>
                        <Col className='loginCol my-auto ' lg={6} md={12} sm={12}>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">

                                <InputGroup.Text id="inputGroup-sizing-default">
                                    Password
                                </InputGroup.Text>
                                <Form.Control
                                    aria-label="Default"
                                    type='password'
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="Password"
                                />
                            </InputGroup>

                            <Button className='pri text-capitalize loginBtn mt-4' variant='primary'>login</Button>
                            <div className="d-flex justify-content-center mt-4">
                                <p className='text-capitalize me-2'>you don't have an account ? </p>
                                <NavLink to='/signup' className='text-black text-capitalize signUp'> sign up</NavLink>
                            </div>
                        </Col>


                        <Col className='loginCol imgLogin' lg={6} md={12} sm={12}>
                            <img src="./loginImg/loginImg.png" alt="img" className='w-75' />
                        </Col>

                    </Row>
                </div>
            </section>

        </>
    )
}
