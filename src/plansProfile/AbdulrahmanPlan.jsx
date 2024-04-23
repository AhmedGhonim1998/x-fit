import React from 'react'
import ProfileContent from '../ProfileContent/ProfileContent'
import proImg from '/ProfileImages/abdoprof.png'
import CoachesOffers from '../Offers/CoachesOffers'
export default function AbdulrahmanPlan() {
    return (
        <>
            <ProfileContent Imgsrc={proImg} coachName="abdullah ibrahim" link="/getcoach/abdulrahman-ibrahim/abdulrahman-plan"/>
            <CoachesOffers offer1="3 month"  offer2="6 month" offer3="12 month" saving1="save 12%" saving2="save 16%" saving3="save 24%"  partnerSav1="save 23%" partnerSav2="save 26%" Friends="save 17%" priceOffer="4500 EGP /Month" saving4="save 23%"/>
        </>
    )
}
