import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/abdoprof.png'
import CoachesOffers from '../Offers/CoachesOffers'
export default function AbdulrahmanPlan() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="abdullah ibrahim" link="/getcoach/abdulrahman-ibrahim/abdulrahman-plan"/>
            <CoachesOffers offer1="12 week"  offer2="20 week" offer3="52 week" saving1="save 12%" saving2="save 12%" saving3="save 24%"  partnerSav1="save 23%" partnerSav2="save 26%" Friends="save 17%"/>
        </>
    )
}
