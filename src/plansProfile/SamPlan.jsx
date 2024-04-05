import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/dawda.png'
import ProfileDesc from '../ProfileContent/ProfileDesc'
import CoachesOffers from '../Offers/CoachesOffers'
export default function SamPlan() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="samuel dawda" link='/getcoach/samuel-dawda/samuel-plan'/>
            <CoachesOffers offer1="20 week"  offer2="30 week" offer3="40 week" saving1="save 15%" saving2="save 30%" saving3="save 35%"  partnerSav1="save 32%" partnerSav2="save 20%" Friends="save 17%"/>
        </>
    )
}
