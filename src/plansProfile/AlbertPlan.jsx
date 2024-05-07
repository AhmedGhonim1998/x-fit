import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/albert.png'
import CoachesOffers from '../Offers/CoachesOffers'
export default function AlbertPlan() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="albert grayson" link="/getcoach/albert-grayson/albert-plan"/>
            <CoachesOffers offer1="3 month"  offer2="6 month" offer3="12 month" saving1="save 15%" saving2="save 20%" saving3="save 24%"  partnerSav1="save 23%" partnerSav2="save 28%" Friends="save 15%" priceOffer='Starting from 5450 EGP'saving4='save 30%'/>

        </>
    )
}
