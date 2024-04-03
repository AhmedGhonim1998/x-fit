import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import { NavLink , Link} from "react-router-dom";
import JoinUs from '../profile/JoinUs'
import  { useState, useEffect } from 'react';
import { RiStarSFill } from "react-icons/ri";
import H2 from '../profile/H2';
import OnlineCard from '../profile/OnlineCard';
export default function GetCoach() {

    const [coaches, setCoaches] = useState([]);

    let getCoaches = () => {
        fetch("./fakeApi/coachesData.json")
            .then(res => res.json())
            .then(data => setCoaches(data))
    }
    useEffect(()=>
    {
        getCoaches()
    },[])
    return (
        <>
            {/****************************start lose weight section*****************************************/}
            <section className='loseWeight'>
                <div className='loseWeightContainer pt-5 px-3'>
                    <Row className='loseweightRow'>
                        <Col className='loseWeightCol my-auto' lg={8} md={12} sm={12}>
                            <p className='text-capitalize mb-5 mt-4'>online personal training</p>
                            <h4 className='text-capitalize text-start w-75 mb-5'>lose weight, build muscle, get healthy. whatever your
                                fitness goal, we have a coach for you!</h4>
                            <div className='chechoutLoseWeight'>
                                <JoinUs />
                            </div>
                        </Col>

                        <Col className='loseWeightCol' lg={4} md={12} sm={12}>
                            <img src="./image/loseWeight.png" alt="img" className='loseWeightImg' />
                        </Col>
                    </Row>
                </div>
            </section>
            {/****************************end lose weight section*****************************************/}
            {/****************************start our trainers section**************************************/}
            <section className='ourTrainers py-5'>
                <div className='ourTrainersContainer'>
                    <div className="upperTrainers">
                        <div className='d-flex justify-content-center headingContainer mx-auto'>
                            <div className='firstHead@'>
                            <h2 className='text-capitalize text-center'>meet</h2>
                            </div>
                            <div className='ms-2 h2Trainers'>
                                <h2 className='text-capitalize text-center '>our trainers</h2>
                            </div>
                        </div>
                        <h4 className='text-start text-capitalize ps-3'>fitness & nutrition coaches</h4>
                        <div className='d-flex justify-content-start ps-3'>
                            <NavLink className='nav-link text-capitalize' to='/'>home page</NavLink>
                            <NavLink className='nav-link text-capitalize ms-3' to='/getcoach'>get a coach</NavLink>
                        </div>
                    </div>

                    <div className="lowerTrainers">
                        <Row className='lowerTrainersRow px-3'>
                        {coaches.length > 0 ?
                            coaches.map(coaches =>
                            <Col lg={4} md={6} sm={12} key={coaches.id} className='my-3'>
                                <Card className="h-100 goodCardknow cardCoaches py-4">
                                    
                                    <Card.Img variant="top" src={coaches.image} loading="lazy"  className='cardImageKnow mx-auto'/>
                                    <Card.Text className='text-center coachName text-capitalize'>{coaches.name}</Card.Text>
                                    <hr />
                                    <div className='cardBody d-flex justify-content-center'>
                                        <p>{coaches.rating}</p>
                                        <RiStarSFill className='mt-1 star'/>
                                        <p>{coaches.peopleCoached}</p>
                                    </div>
                                    <Link to={coaches.link} className='mx-auto'>
                                    <Button variant='primary' className='sec ptnPlans text-capitalize mx-auto' >view profile</Button>
                                    </Link>
                                </Card>
                            </Col>
                        )
                        :
                        <Spinner animation="grow" className="m-auto" />
                    }
                        </Row>
                    </div>
                </div>
            </section>

            {/***********************************start a view coach***************************************/}
                <section className='viewCoach mb-5'>
                    <div className='viewCoachConatiner'>
                            <H2 content='Looking for other coaches?'/>
                        <div className='downViewCoach'>
                            <OnlineCard/>
                        </div>
                    </div>
                </section>
        {/***********************************end a view coach***************************************/}
        </>
    )
}
