import React from 'react'
import { Container, Row , Col , Button , Spinner , Card} from 'react-bootstrap'
import Video from '../profile/Video'
import H2 from '../profile/H2'
import  { useState, useEffect } from 'react';
import OnlineCard from '../profile/OnlineCard';
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
    return (
        <>
        {/***********************************start no pain section****************************************/}
            <section className='noPain'>
                <div className='px-5 noPainMiddle'>
                    <Row className='noPainMiddleRow'>
                        <Col lg={4} md={12} sm={12} className='py-5 my-auto'>
                            <h1>No Pain</h1>
                            <p>we believe that fitness is no just distination
                            it's a journey Our-state-of-the-art-facility is
                            designed to inspire and empower you to reach
                            your health and wellness goals. 
                            </p>
                            <Button variant='secondary' className='noPainBtn sec'>Explore More</Button>
                        </Col>
                        <Col lg={4} md={12} sm={12} className='imageCol'>
                            <img src="./image/image.png" alt="img" className='noPainimg'/>
                        </Col>
                        <Col lg={4} md={12} sm={12} className='py-5 my-auto'>
                            <h1>No Gain</h1>
                            <Video/>
                        </Col>
                    </Row>
                </div>
            </section>
        {/***********************************end no pain section****************************************/}
        {/***********************************start good knowledge section*******************************/}
        <section className='goodKnowledge'>
            <H2 content='Good Health for Starts with Good Knowledge'/>
            <Row className='goodKnlowledgeRow px-5 mt-3 mb-5'>
            {posts.length > 0 ?
                        posts.map(posts =>
                            <Col lg={3} md={6} sm={12} key={posts.id} className='my-3'>
                                <Card className="h-100 goodCardknow py-4">
                                    
                                    <Card.Img variant="top" src={posts.image} loading="lazy"  className='cardImageKnow mx-auto'/>
                                        <Card.Text className='text-center'>{posts.des}</Card.Text>
                                </Card>
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
        {/***********************************start a view coach***************************************/}
            </div>
        </section>
        </>
    )
}
