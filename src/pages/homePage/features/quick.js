import React from 'react'
import CallIcon from '../../../assets/images/icons/phone-removebg-preview.png'

const Quick = () => {
    return (
        <div>
            <section className="quick_service">
                <div className="page_width">
                    <div className="quick">
                        <h2>Quick Service On Emergency</h2>
                        <img src={CallIcon} alt="" />
                        <a href="tel:+971 58 67 47 123">+971 58 67 47 123</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Quick
