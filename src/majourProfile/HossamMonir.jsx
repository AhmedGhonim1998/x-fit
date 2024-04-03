import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/hossam.png'
import ProfileDesc from '../ProfileContent/ProfileDesc'
export default function HossamMonir() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="Hossam Monir" />
            <ProfileDesc peopleCoached='150 people coached' reviews='4.5 review' aboutHim='Hi, I am Hossam Monir , Online training coach expert from Institute of nutrition and 
fitness sciences (INFS). My passion is to help people change their lives in the
simplest and most sustainable way. Please send a dm or email at hoss.monira@gmail.com
for any enquiry before enrolling'/>
        </>
    )
}
