import React from 'react'
import { Container, Row , Col , Button , Spinner , Card} from 'react-bootstrap'
import JoinUs from '../profile/JoinUs'

export default function GetCoach() {
    return (
        <>
            {/****************************start lose weight section*****************************************/}
            <section className='loseWeight'>
                <div className='loseWeightContainer pt-5 px-3'>
                    <Row className='loseweightRow'>
                        <Col className='loseWeightCol my-auto' lg={8} md={12} sm={12}>
                            <p className='text-capitalize'>online personal training</p>
                            <h4 className='text-capitalize text-start w-75'>lose weight, build muscle, get healthy. whatever your
                            fitness goal, we have a coach for you!</h4>
                            <div className='chechoutLoseWeight'>
                                <JoinUs/>
                            </div>
                        </Col>

                        <Col className='loseWeightCol' lg={4} md={12} sm={12}>
                            <img src="./image/loseWeight.png" alt="img" className='loseWeightImg'/>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
