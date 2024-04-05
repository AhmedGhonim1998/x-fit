import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap'
import fawry from '/paymentImages/fawry.png'
import instaPay from '/paymentImages/instaPay.png'
export default function PaymentMethod() {
    return (
        <>
            <section className='paymentMethod px-3'>
                <div className="paymentContainer">
                    <h1 className='text-center text-capitalize'>payment method</h1>
                    <div className='d-flex justify-content-center align-items-center paymentImages'>
                        
                            <img src={fawry} alt="img" className='me-5 fawry' />
                        

                        
                            <img src={instaPay} alt="img" className='ms-5 instapay'/>
                        
                    </div>

                </div>
            </section>
        </>
    )
}
