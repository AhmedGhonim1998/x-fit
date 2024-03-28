import React from 'react'
import { Col , Button , Spinner , Card} from 'react-bootstrap'
import  { useState, useEffect } from 'react';
export default function CerFetch() {
    const[cer , setCer]=useState([]);
    function getCer(){
        fetch("./fakeApi/certifications.json")
        .then(res => res.json())
        .then(data => setCer(data))
    }

useEffect(()=>{
    getCer()
},[])
    return (
        <>
            {cer.length > 0 ?
                        cer.map(cer =>
                            <Col lg={4} md={12} sm={12} key={cer.id} className='my-3'>
                                <Card className="h-100 cerCard py-4">
                                    
                                    <Card.Img variant="top" src={cer.image} loading="lazy"  className='cerImg mx-auto'/>
                                    <Card.Title className='text-center cerTitle'>{cer.title}</Card.Title>
                                    <Card.Text className='text-center'>{cer.des}</Card.Text>
                                </Card>
                            </Col>
                        )
                        :
                        <Spinner animation="grow" className="m-auto" />
                    }
        </>
    )
}
