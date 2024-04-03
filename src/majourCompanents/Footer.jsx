import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row , Col , Button , Spinner , Card} from 'react-bootstrap'
import img from "/image/x-fitLogo.png"
export default function Footer() {
    return (
        <>
            <footer className='px-3'>
                <Row className='footerRow py-4'>
                    <Col className='footerCol' lg={4} md={12} sm={12}>
                        <img src={img} alt="img" className='footerImg'/>
                        <p className='text-white ms-3'>BE fit with X-FIT</p>

                        <div className='FooterIcons'>
                            <div className='d-flex justify-content-start ms-2'>
                            <FaEnvelope className='mt-1 text-white me-3'/>
                            <p className='text-white'>xfit.support@gmail.com</p>
                            </div>

                            <div className='d-flex justify-content-start align-items-start ms-2'>
                            <FaPhoneVolume className='mt-1 text-white me-3'/>
                            <p className='text-white'>+20 111-460-5984</p>
                            </div>

                            <div className='d-flex justify-content-start ms-2'>
                            <FaFacebookF className='text-white me-4'/>
                            <FaInstagramSquare className='text-white'/>
                            <FaLinkedinIn className='text-white ms-4' />
                            </div>
                        </div>
                        <p className='text-white mt-4 ms-3'>&#169;2024 All rights reserved</p>
                    </Col>

                    <Col lg={8} md={12} sm={12} className='my-auto'>
                        <Row className='secFooterRow'>
                            <Col lg={4} md={12} sm={12} className='secCol'>
                                <h4 className='text-white text-uppercase mb-3'>Company</h4>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/aboutus'>about us</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/becomeacoach'>become a coach</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/contactus'>help & support</NavLink>
                                <NavLink className="text-capitalize text-white nav-link" to='/contactus'>contact us</NavLink>
                            </Col>

                            <Col lg={4} md={12} sm={12} className='secCol'>
                                <h4 className='text-white text-uppercase mb-3'>services</h4>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/getcoach'>online coaching</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/becomeacoach'>Corporate Wellness</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/getcoach'>weight loss diet plan</NavLink>
                            </Col>


                            <Col lg={4} md={12} sm={12} className='secCol'>
                                <h4 className='text-white text-uppercase mb-3'>legal</h4>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/terms-conditions'>terms & conditions</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/privacy'>privacy policy</NavLink>
                                <NavLink className="text-capitalize text-white nav-link mb-2" to='/refund'>refund policy</NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </footer>
        </>
    )
}
