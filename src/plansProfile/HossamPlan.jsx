import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/hossam.png'
import ProfileDesc from '../ProfileContent/ProfileDesc'
import CoachesOffers from '../Offers/CoachesOffers'
export default function HossamPlan() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="Hossam Monir" link='/getcoach/hossam-monir/hossam-plan'/>
            <CoachesOffers  offer1="3 month"  offer2="6 month" offer3="12 month" saving1="save 10%" saving2="save 15%" saving3="save 24%"  partnerSav1="save 32%" partnerSav2="save 20%" Friends="save 17%" priceOffer='3900 EGP/Month'saving4="save 20%" />
        </>
    )
}
