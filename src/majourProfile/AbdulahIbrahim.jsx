import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/abdoprof.png'
import ProfileDesc from '../ProfileContent/ProfileDesc'
export default function AbdulahIbrahim() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="abdullah ibrahim" link="/getcoach/abdulrahman-ibrahim/abdulrahman-plan"/>
            <ProfileDesc peopleCoached='244 people coached' reviews='4.9 review' aboutHim='Hi, I am Abdullrahman Ibrahim , Online training coach expert from Institute of nutrition and 
fitness sciences (INFS). My passion is to help people change their lives in the
simplest and most sustainable way. Please send a dm or email at a.ibra@gmail.com
for any enquiry before enrolling'/>
        </>
    )
}
