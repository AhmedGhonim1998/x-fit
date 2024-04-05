import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/albert.png'
import ProfileDesc from '../ProfileContent/ProfileDesc'
export default function Albert() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="albert grayson" link="/getcoach/albert-grayson/albert-plan"/>
            <ProfileDesc peopleCoached='89 people coached' reviews='3.9 review' aboutHim='Hi, I am Albert Graysnon , Online training coach expert from Institute of nutrition and 
fitness sciences (INFS). My passion is to help people change their lives in the
simplest and most sustainable way. Please send a dm or email at albert.grayson@gmail.com
for any enquiry before enrolling'/>
        </>
    )
}
