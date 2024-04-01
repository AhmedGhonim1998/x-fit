import React from 'react'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap'
import Video from '../profile/Video'
import H2 from '../profile/H2'
import { useState, useEffect } from 'react';
import OnlineCard from '../profile/OnlineCard';
import CerFetch from '../profile/CerFetch';
import { Link, NavLink } from 'react-router-dom';

const head = [
    'Building and Repairing Tissues:',
    'Enzymatic Activity:',
    'Immune Function:',
    'Transportation of Molecules:',
    'Cell Signaling:',
    'Hormonal Function:',
    ];

    const par = [
        'Proteins are essential for the growth, development, and repair of tissues in the body.They form the structural basis of cells.',

        'Many enzymes, which are biological catalysts that facilitate chemical reactions in the body, are proteins. Enzymes are involved in metabolism digestion andvarious other biochemical processes',

        'Some proteins, such as antibodies, are vital components of the immune system.Antibodies help the body defend against pathogens like bacteria and viruses.',
        'Percy Lavon Julian: chemist',

        'Proteins facilitate the transportation of molecules within the body. For example  hemoglobin, a protein found in red blood cells, transports oxygen from the lungs to other tissues and organs.',

        'Proteins act as signaling molecules and receptors, helping cells communicate with each other. Signaling proteins play a role in regulating various physiologicalprocesses, including growth and development.',

        
        ];
export default function CardHealth({imgsrc , parContent , headline}) {
    const items = head.map(heads=><li><h4 className='mt-5'>{heads}</h4>
    {par.map(pars=><li>{pars}</li>)}
    </li>)
    return (
        <>

            <h4 className='text-start text-capitalize ps-3'>articles</h4>
            <div className='d-flex justify-content-start ps-3 mb-5'>
                <NavLink className='nav-link text-capitalize' to='/'>home page</NavLink>
                <NavLink className='nav-link text-capitalize ms-3' to='/getcoach'>get a coach</NavLink>
            </div>


            <Card className='mb-5'>
                <Card.Body>
                    <Card.Text className='text-capitalize'>
                        good health starts with good Knowledge
                        <H2 content={parContent} name={headline}/>
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={imgsrc}/>
                <Card.Body>
                    <ul>
                        {items}
                    </ul>
                </Card.Body>
            </Card>


        </>
    )
}
