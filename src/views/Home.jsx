import React from 'react'
import { Container, Row , Col , Button , Spinner , Card} from 'react-bootstrap'
import Video from '../profile/Video'
import H2 from '../profile/H2'
import  { useState, useEffect } from 'react';
import OnlineCard from '../profile/OnlineCard';
import CerFetch from '../profile/CerFetch';
import { Link } from 'react-router-dom';

import JoinUs from '../profile/JoinUs';
export default function Home() {
    const [posts, setPosts] = useState([]);

    let getposts = () => {
        fetch("./fakeApi/knowledge.json")
            .then(res => res.json())
            .then(data => setPosts(data))
    }
    useEffect(()=>
    {
        getposts()
    },[])

    let scrollUp=()=>{
        window.scroll(0,0);
    }
    return (
        <>
        {/***********************************start no pain section****************************************/}
            <section className='noPain'>
                <div className='px-5 noPainMiddle'>
                    <Row className='noPainMiddleRow'>
                        <Col lg={4} md={12} sm={12} className='py-5 my-auto painCol'>
                            <h1 className='mb-5'>No Pain</h1>
                            <p>We believe that fitness is no just distination
                            it's a journey Our-state-of-the-art-facility is
                            designed to inspire and empower you to reach
                            your health and wellness goals. 
                            </p>
                            <Button variant='secondary' className='noPainBtn sec mt-4'>Explore More</Button>
                        </Col>
                        <Col lg={4} md={12} sm={12} className='imageCol'>
                            <img src="./image/image.png" alt="img" className='noPainimg'/>
                        </Col>
                        <Col lg={4} md={12} sm={12} className='py-5 my-auto video'>
                            <h1>No Gain</h1>
                            <Video/>
                        </Col>
                    </Row>
                </div>
            </section>
        {/***********************************end no pain section****************************************/}
        {/***********************************start good knowledge section*******************************/}
        <section className='goodKnowledge my-5 mx-4'>
            <H2 content='Good Health for Starts with Good Knowledge' name="w-100 goodhealthH2"/>
            <Row className='goodKnlowledgeRow px-5 mt-3 mb-5'>
            {posts.length > 0 ?
                        posts.map(posts =>
                            <Col lg={3} md={6} sm={12} key={posts.id} className='my-3'>
                                <Link to={posts.link} className='nav-link' onClick={scrollUp}>
                                    <Card className="h-100 goodCardknow py-4" to={posts.link}>
                                        
                                        <Card.Img variant="top" src={posts.image} loading="lazy"  className='cardImageKnow mx-auto'/>
                                            <Card.Text className='text-center'>{posts.des}</Card.Text>
                                    </Card>
                                </Link>
                                
                            </Col>
                        )
                        :
                        <Spinner animation="grow" className="m-auto" />
                    }
            </Row >
        </section>
        {/***********************************end good knowledge section*******************************/}
        {/***********************************start a view coach***************************************/}
        <section className='viewCoach'>
            <div className='viewCoachConatiner'>
                    <H2 content='Your perfect coach is just a few steps away'/>
                    <h4 className='text-center'>Find the ideal coach for your goals & interests</h4>
                <div className='downViewCoach'>
                    <OnlineCard/>
                </div>
            </div>
        </section>
        {/***********************************end a view coach***************************************/}
        {/***********************************start certifications***********************************/}
        <section className='certifications mx-4'>
            <div className='cerConatiner'>
                <Row className='cerRow px-4'>
                    <CerFetch/>
                </Row>
            </div>
        </section>
        {/***********************************start certifications***********************************/}
        {/***********************************start join  us***********************************/}
        <section className='joinUs px-5 my-5'>
            <Row className='joinRow'>
                <Col lg={6} md={12} sm={12} className='my-auto joinCol ps-5'>
                    <h2 className='font-weight-bold text-start mb-4'>Why Join Us ?</h2>
                    <p className='w-75 mb-4 loseWeightPar'>Lose weight, build muscle, get healthy.
                    Whatever your fitness goal, we have a coach
                    for you!</p>
                    <div className='mt-4 checkOutClass'>
                        <JoinUs/>
                    </div>
                </Col>

                <Col lg={6} md={12} sm={12} className='joinImage'>
                    <img src="./image/coaches.png" alt="img" className='imageJoin'/>
                </Col>
            </Row>
        </section>
        {/***********************************start join  us***********************************/}
        </>
    )
}
