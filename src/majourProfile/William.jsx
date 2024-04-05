import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/willaim.png'
import ProfileDesc from '../ProfileContent/ProfileDesc'
export default function William() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="willaim games" link='/getcoach/william-games/william-plan'/>
            <ProfileDesc peopleCoached='78 people coached' reviews='4.2 review' aboutHim='Hi, I am Willaim Games , Online training coach expert from Institute of nutrition and 
fitness sciences (INFS). My passion is to help people change their lives in the
simplest and most sustainable way. Please send a dm or email at albert.grayson@gmail.com
for any enquiry before enrolling'/>
        </>
    )
}
