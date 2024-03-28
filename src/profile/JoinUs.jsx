import React from 'react'
import { IoIosCheckbox } from "react-icons/io";
export default function JoinUs() {
    return (
        <>
                    <div className='d-flex justify-content-arround'>
                        <IoIosCheckbox className='me-2 mt-1 checkRight' />
                        <p>Get personalized training plans</p>
                    </div>
                    <div className='d-flex justify-content-arround'>
                        <IoIosCheckbox className='me-2 mt-1 checkRight' />
                        <p>Unlimited calls with coach</p>
                    </div>
                    <div className='d-flex justify-content-arround'>
                        <IoIosCheckbox className='me-2 mt-1 checkRight' />
                        <p>Nutrition plans made for your lifestyle</p>
                    </div>
        </>
    )
}
