import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap'
import img from "/image/x-fitLogo.png"
export default function Footer() {
    let scrollUp = () => {
        window.scroll(0, 0);
    }
    return (
        <>
            <footer className='px-3'>
                <Row className='footerRow py-4'>
                    <Col className='footerCol footerFlex' lg={4} md={12} sm={12}>
                        <img src={img} alt="img" className='footerImg' />
                        <p className='text-white ms-3'>BE fit with X-FIT</p>

                        <div className='FooterIcons'>
                            <div className='d-flex justify-content-start ms-2'>
                                <FaEnvelope className='mt-1 text-white me-3' />
                                <p className='text-white'>support@x-fit.co</p>
                            </div>

                            <div className='d-flex justify-content-start align-items-start ms-2'>
                                <FaPhoneVolume className='mt-1 text-white me-3' />
                                <p className='text-white'>+20 xxx-xxx-xxx</p>
                            </div>

                            <div className='d-flex justify-content-start ms-2 socialMedaiIcons'>
                                <FaFacebookF className='text-white me-4' />
                                <FaInstagramSquare className='text-white' />
                                <FaLinkedinIn className='text-white ms-4' />
                            </div>
                        </div>
                        <p className='text-white mt-4 ms-3'>&#169;2024 All rights reserved</p>
                    </Col>

                    <Col lg={8} md={12} sm={12} className='my-auto'>
                        <Row className='secFooterRow'>
                            <Col lg={4} md={12} sm={12} className='secCol footerFlex'>
                                <h4 className='text-white text-uppercase mb-3 head4'>Company</h4>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/aboutus' onClick={scrollUp}>about us</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/contactus' onClick={scrollUp}>become a coach</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/contactus' onClick={scrollUp}>help & support</NavLink>
                                <NavLink className="text-capitalize text-white nav-link" to='/contactus' onClick={scrollUp}>contact us</NavLink>
                            </Col>

                            <Col lg={4} md={12} sm={12} className='secCol footerFlex'>
                                <h4 className='text-white text-uppercase mb-3 head4'>services</h4>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/getcoach' onClick={scrollUp}>online coaching</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/getcoach' onClick={scrollUp}>Corporate Wellness</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/getcoach' onClick={scrollUp}>weight loss diet plan</NavLink>
                            </Col>


                            <Col lg={4} md={12} sm={12} className='secCol footerFlex'>
                                <h4 className='text-white text-uppercase mb-3 head4'>legal</h4>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/terms-conditions' onClick={scrollUp}>terms & conditions</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/privacy-policy' onClick={scrollUp}>privacy policy</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/payment-method' onClick={scrollUp}>payment method</NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </footer>
        </>
    )
}
