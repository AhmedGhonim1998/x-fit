import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import person from "/ProfileImages/person.png";
import star from "/ProfileImages/star.png"
import i2023 from "/ProfileImages/img2023.png";
import i2021 from "/ProfileImages/img2021.png";
import { FaCheckSquare } from "react-icons/fa";

const contain = [
    {
        tail :'plans designed only for you',
        par:'Personalized fitness & nutrition consultation tailor-made for beginners—including diet plans, training programs, and weekly 1-on-1 guidance'
    },
    {
        tail:'Accountability and Progress Tracking',
        par:'Your coach will set up in-depth weekly calls with you according to your schedule and discuss your progress. Your coach will guide you with course corrections as needed',
    },
    {
        tail:'Continuous Support',
        par:'Your coach is always just a phone call or message away (Sundays closed)'
    },
    {
        tail:'X-FIT CVD Compensation Policy',
        par:'In the unfortunate event of an eligible enrolled client’s death due to Cardiovascular Diseases (CVDs), the nominated beneficiary is eligible for compensation. All existing clients who have completed a minimum of 6 month period in a row and continue to stay active are eligible. Check T&C for details'
    }
];


export default function CoachesOffers({ offer1, offer2, offer3, saving1, saving2, saving3, partnerSav1, partnerSav2, Friends }) {
    const items = contain.map(items=><li className='mb-5'><h5><FaCheckSquare className='checkinPlan me-3'/>
    {items.tail}</h5><p>{items.par}</p></li>)


    return (
        <>
            <section className='description mt-3'>
                <div className="descContent px-3 mb-5">
                    <Row className='descRow'>
                        <Col className='descCol' lg={6} md={12} sm={12}>
                            <h4>Choose your transformation package</h4>
                            <p className='text-capitalize trainingCoach mb-5'>online training coach</p>
                            <Card body className='my-auto cardRev cardRecomend'>
                                <p className='mx-auto text-capitalize text-center pt-3  text-white parRecommend'>recomended for you</p>
                                <Card className='cardOffer'>
                                    <Card.Body className='p-3 transformPlan'>
                                        <Card.Title className='text-capitalize mb-5'>transformation plan</Card.Title>
                                        <div className="offerContainer d-flex justify-content-start mb-2">
                                            <div className="weeks twelveWeek me-3">
                                                <p className='text-capitalize text-center'>{offer1}</p>
                                            </div>

                                            <div className="weeks twentyFourWeek me-3">
                                                <p className='text-capitalize text-center'>{offer2}</p>
                                            </div>

                                            <div className="weeks fiftyTowWeek me-3">
                                                <p className='text-capitalize text-center'>{offer3}</p>
                                            </div>
                                        </div>

                                        <div className="offerContainer d-flex justify-content-start">
                                            <div className="save me-3">
                                                <p></p>
                                            </div>

                                            <div className="saveing text-capitalize me-3">
                                                <p className='text-uppercase text-center'>{saving1}</p>
                                            </div>

                                            <div className="saveing text-capitaliz me-3">
                                                <p className='text-uppercase text-center'>{saving2}</p>
                                            </div>
                                        </div>

                                        <p className='text-start mt-4'>200$/Week</p>
                                    </Card.Body>
                                </Card>

                            </Card>


                            <Card className='cardOffer mt-4'>
                                <Card.Body className='p-3 transformPlan partnerPlan'>
                                    <Card.Title className='text-capitalize mb-5'>partner transformation plan</Card.Title>
                                    <div className="offerContainer d-flex justify-content-start mb-2">
                                        <div className="weeks twelveWeek me-3">
                                            <p className='text-capitalize text-center'>{offer1}</p>
                                        </div>

                                        <div className="weeks twentyFourWeek me-3">
                                            <p className='text-capitalize text-center'>{offer2}</p>
                                        </div>

                                        <div className="weeks fiftyTowWeek me-3">
                                            <p className='text-capitalize text-center'>{offer3}</p>
                                        </div>
                                    </div>

                                    <div className="offerContainer d-flex justify-content-start ms-4">
                                        <div className="save me-3 saveing">
                                            <p className='text-uppercase text-center'>{saving3}</p>
                                        </div>

                                        <div className="saveing text-capitalize me-3">
                                            <p className='text-uppercase text-center'>{partnerSav1}</p>
                                        </div>

                                        <div className="saveing text-capitaliz me-3">
                                            <p className='text-uppercase text-center'>{partnerSav2}</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className='cardOffer mt-4'>
                                <Card.Body className='p-3 transformPlan partnerPlan'>
                                    <Card.Title className='text-capitalize mb-5'>partner transformation plan</Card.Title>
                                    <div className="offerContainer d-flex flex-column justify-content-start mb-2">
                                        <div className="weeks twelveWeek me-3">
                                            <p className='text-capitalize text-center'>{offer1}</p>
                                        </div>
                                        <div className="saveing text-capitalize me-3 mt-2">
                                            <p className='text-uppercase ms-2'>{Friends}</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className='descCol my-auto' lg={6} md={12} sm={12}>
                            <Card body className='cardRev'>
                                <h4 className='mb-5 mt-4'>What you will get in 12 weeks plan?</h4>
                                <ul>
                                    {items}
                                </ul>
                            </Card>

                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
