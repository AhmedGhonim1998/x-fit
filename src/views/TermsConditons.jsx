import React from 'react'
import { Container, Row , Col , Button , Spinner , Card} from 'react-bootstrap'
import Video from '../profile/Video'
import H2 from '../profile/H2'
import  { useState, useEffect } from 'react';
import OnlineCard from '../profile/OnlineCard';
import CerFetch from '../profile/CerFetch';
import { Link } from 'react-router-dom';

import JoinUs from '../profile/JoinUs';

export default function TermsConditons() {
  return (
    <>
      <section className='terms'>
        <div className="termsContainer px-5 py-5 my-5 mx-5">
          <p>These terms and conditions create a contract between you and Apple (the "Agreement"). Please read the Agreement carefully. To confirm your understanding
          and acceptance of the Agreement, click "Agree."</p>
          <h4 className='text-uppercase mt-4'>a. introduction to our service</h4>
          <p className='mt-2'>This Agreement governs your use of Apple's services ("Services"), through which you can buy, get, license, rent or subscribe to content, Apps (as defined below),
          and other in-app services (collectively, "Content"). Content may be offered through the Services by Apple or a third party. Our Services are available for your
          use in your country or territory of residence ("Home Country"). By creating an account for use of the Services in a particular country or territory you are specifying
          it as your Home Country. To use our Services, you need compatible hardware, software (latest version recommended and sometimes required) and internet access
          (tees may apply). Our Services' performance may be affected by these factors. </p>

          <h4 className='text-uppercase mb-4'>b . using outr services </h4>
          <h4 className='text-uppercase'>payments, taxes, and refunds</h4>
          <p className='mt-2'>You can acquire Content on our Services for free or for a charge, either of which is referred to as a "Transaction." Each Transaction is an electronic contract
          between you and Apple, and/or you and the entity providing the Content on our Services. However, if you are a customer of Apple Distribution international
          Ltd, Apple Distribution international Ltd. is the merchant of record for the Content you acquire from certain Services (eg. Apple Books, App Store, etc.) a
          displayed on the product page and/or during the acquisition process for the relevant Service, in such case, you acquire the Content from Apple Distribution</p>
        </div>
      </section>
    </>
  )
}
