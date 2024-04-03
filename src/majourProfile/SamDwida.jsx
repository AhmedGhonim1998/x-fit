import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/dawda.png'
import ProfileDesc from '../ProfileContent/ProfileDesc'
export default function SamDwida() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="samuel dawda" />
            <ProfileDesc peopleCoached='203 people coached' reviews='4.8 review' aboutHim='Hi, I am Samuel Dawda , Online training coach expert from Institute of nutrition and 
fitness sciences (INFS). My passion is to help people change their lives in the
simplest and most sustainable way. Please send a dm or email at Sam.daw@gmail.com
for any enquiry before enrolling'/>
        </>
    )
}
