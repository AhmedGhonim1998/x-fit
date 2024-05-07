import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/damyan.png'
import ProfileDesc from '../ProfileContent/ProfileDesc'
import CoachesOffers from '../Offers/CoachesOffers'
export default function DamyanPlan() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="damyan wayne" link='/getcoach/damyan-wayne/damyan-plan'/>
            <CoachesOffers  offer1="3 month"  offer2="6 month" offer3="12 month" saving1="save 15%" saving2="save 20%" saving3="save 24%"  partnerSav1="save 32%" partnerSav2="save 20%" Friends="save 17%" priceOffer='Starting from 6000 EGP'saving4='save 25%'/>
        </>
    )
}
