import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/albert.png'
import CoachesOffers from '../Offers/CoachesOffers'
export default function AlbertPlan() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="albert grayson" link="/getcoach/albert-grayson/albert-plan"/>
            <CoachesOffers offer1="10 weeks"  offer2="20 weeks" offer3="30 weeks" saving1="save 10%" saving2="save 15%" saving3="save 24%"  partnerSav1="save 23%" partnerSav2="save 28%" Friends="save 15%"/>

        </>
    )
}
