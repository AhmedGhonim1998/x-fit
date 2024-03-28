import React from 'react'
import { Card ,Button} from 'react-bootstrap'
export default function OnlineCard() {
    return (
        <>
            <Card className='onlineCard mx-auto mt-5 my-auto'>
                        <Card.Img variant="top" src="./image/onlineMan.png" className='mx-auto'/>
                        <Card.Body className='text-center'>
                            <Card.Title>Online Personal Training</Card.Title>
                            <Card.Text>
                            1-on-1 online session
                            </Card.Text>
                            <Button variant="primary" className='sec'>View Coach</Button>
                        </Card.Body>
            </Card>
        </>
    )
}
