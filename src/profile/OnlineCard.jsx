import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
export default function OnlineCard() {
    let scrollUp=()=>{
        window.scroll(0,0);
    }
    return (
        <>
            <Card className='onlineCard mx-auto mt-5 my-auto'>
                        <Card.Img variant="top" src="./image/onlineMan.png" className='mx-auto'/>
                        <Card.Body className='text-center'>
                            <Card.Title className='TrainingTitle'>Online Personal Training</Card.Title>
                            <Card.Text>
                            1-on-1 online session
                            </Card.Text>
                            <Button variant="primary" className='sec'><NavLink to="/getcoach" className="nav-link text-capitalize" onClick={scrollUp}>view caoches</NavLink></Button>
                        </Card.Body>
            </Card>
        </>
    )
}
