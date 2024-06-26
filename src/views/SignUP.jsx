import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import { NavLink , Link} from "react-router-dom";
import JoinUs from '../profile/JoinUs'
import { useState, useEffect } from 'react';
import { RiStarSFill } from "react-icons/ri";
import H2 from '../profile/H2';
import OnlineCard from '../profile/OnlineCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function SignUP() {
    let scrollUp=()=>{
        window.scroll(0,0);
    }
    return (
        <>
        <section className='signUp px-3'>
            <Row className='loginRow my-5'>
                <Col className='loginCol my-auto ' lg={6} md={12} sm={12}>
                    <InputGroup className="mb-5">
                        <Form.Control aria-label="First name" placeholder='First Name' />
                        <Form.Control aria-label="Last name" placeholder='Last Name' />
                    </InputGroup>
                    <InputGroup className="mb-5">
                        <Form.Control
                            placeholder="Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>

                    <InputGroup className="mb-5">

                        
                        <Form.Control
                            aria-label="Default"
                            type='password'
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Password"
                        />
                    </InputGroup>

                    <InputGroup className="mb-5">

                        
                        <Form.Control
                            aria-label="Default"
                            type='password'
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Re-Type Your Password"
                        />
                    </InputGroup>
                    <Link to='/login'>
                    <Button className='pri text-capitalize loginBtn mt-4' variant='primary' onClick={scrollUp}>sign up</Button>
                    </Link>


                    <div className="d-flex justify-content-center mt-4">
                        <p className='text-capitalize me-2'>you have already account ? </p>
                        <NavLink to='/login' className='text-black text-capitalize signUp' onClick={scrollUp}> login</NavLink>
                    </div>
                </Col>


                <Col className='loginCol imgLogin' lg={6} md={12} sm={12}>
                    <img src="./loginImg/loginImg.png" alt="img" className='w-75' />
                </Col>

            </Row>

        </section>
        </>
    )
}
