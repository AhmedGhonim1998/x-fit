import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/damyan.png'
import ProfileDesc from '../ProfileContent/ProfileDesc'
import CoachesOffers from '../Offers/CoachesOffers'
export default function DamyanPlan() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="damyan wayne" link='/getcoach/damyan-wayne/damyan-plan'/>
            <CoachesOffers offer1="15 week"  offer2="20 week" offer3="30 week" saving1="save 10%" saving2="save 15%" saving3="save 24%"  partnerSav1="save 32%" partnerSav2="save 20%" Friends="save 17%"/>
        </>
    )
}
