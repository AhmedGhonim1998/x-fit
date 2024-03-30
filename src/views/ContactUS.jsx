import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap'
import Video from '../profile/Video'
import H2 from '../profile/H2'
import { useState, useEffect } from 'react';
import OnlineCard from '../profile/OnlineCard';
import CerFetch from '../profile/CerFetch';
import { FaSquarePhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function ContactUS() {
    return (
        <>
            <section className='contactUs px-3'>
                <Row className='contactRow my-5'>
                    <Col className='ContactCol my-auto' lg={6} md={12} sm={12}>
                        <h3 className='text-start text-capitalize'>contact details</h3>
                        <p>X-Fit aims to empower the community through fitness,
                            one workout at a time leading the future of fitness with
                            cutting-edge technology and expert-led wellness programs.</p>

                        <div className='d-flex justify-content-start phone'>
                            <FaSquarePhone className='my-auto me-3 contactIcons' />
                            <div className='phoneContent'>
                                <p className='text-capitalize mb-0'>phone</p>
                                <p className='mt-0'>+20 111-460-5984</p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-start phone'>
                            <FaEnvelope className='my-auto me-3 contactIcons' />
                            <div className='phoneContent'>
                                <p className='text-capitalize mb-0'>phone</p>
                                <p className='mt-0'>+20 111-460-5984</p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-start phone'>
                        <IoLocationSharp className='my-auto me-3 contactIcons'/>

                            <div className='phoneContent'>
                                <p className='text-capitalize mb-0'>phone</p>
                                <p className='mt-0'>+20 111-460-5984</p>
                            </div>
                        </div>
                    </Col>

                    <Col className='loginCol imgLogin mt-3' lg={6} md={12} sm={12}>
                            <img src="./loginImg/loginImg.png" alt="img" className='w-75' />
                        </Col>
                </Row>
            </section>
        </>
    )
}
