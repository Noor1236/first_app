import React from 'react'
import ReviewImg from '../../assets/images/home/review_img.png'
import { FaStar } from "react-icons/fa";


const Client = ({img , name}) => {
    return (
        <div>
            <div className="review">
                <div className="client">
                    <img src={img ? img : ReviewImg} alt="" />
                    <div className="month">
                        <h3>{name ? name :" Alena Herwitz "}</h3>
                        <div className="date">
                            <p className="ago">3 Months ago</p>
                            <FaStar className='gold-star' />
                            <FaStar className='gold-star' />
                            <FaStar className='gold-star' />
                            <FaStar className='gold-star' />
                            <FaStar className='gold-star' />
                            
                            
                        </div>
                    </div>
                </div>
                <p>We make sure that your safety is never compromised. This is why we hire all the staff under
                    the
                    roof of Home Comfort, just for your satisfaction.</p>
            </div>
        </div>
    )
}

export default Client
