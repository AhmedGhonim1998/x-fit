import React from 'react'
import privacyImg from '/privacyPolicy/privacy.png'
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap'
export default function PrivacyPolicy() {
    return (
        <>
            <section className='privacyPolicy px-3'>
                <div className="privacyContainer px-3">
                    <Row className='privacyRow'>
                        <Col className='privacyCol my-auto' lg={6} md={12} sm={12}>
                            <h1 className='text-capitalize text-start mb-5'>privacy policy</h1>
                        </Col>
                        <Col className='privacyCol' lg={6} ms={12} sm={12}>
                            <img src={privacyImg} alt="img" className='privacyImg' />
                        </Col>
                    </Row>
                    <div className="privacyContent mt-5">
                        <div className="policy mb-5">
                            <h3 className='text-capitalize text start intro'>introduction</h3>
                            <p>X-Fit informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.

                                We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy</p>
                        </div>


                        <div className="policy mb-5">
                            <h3 className='text-capitalize text start intro'>information collection and use</h3>
                            <p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, phone number, postal address, and other information ("Personal Information")</p>
                        </div>

                        <div className="policy mb-5">
                            <h3 className='text-capitalize text start intro'>cookies</h3>
                            <p>cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.

                                Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site</p>
                        </div>

                        <div className="policy mb-5">
                            <h3 className='text-capitalize text start intro'>security</h3>
                            <p>the security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
                        </div>


                        <div className="policy mb-5">
                            <h3 className='text-capitalize text start intro'>changes to This privacy policy
</h3>
                            <p>we reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
