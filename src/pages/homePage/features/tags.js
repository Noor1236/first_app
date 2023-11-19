import React from 'react'
import Star from '../../../assets/images/home/after_banner/start.svg'
import Dollor from '../../../assets/images/home/after_banner/dollar.svg'
import Users from '../../../assets/images/home/after_banner/users.svg'

const Tags = () => {
    return (
        <div>
            <section className="after_banner">
                <div className="page_width">
                    <div className="tags">
                        <div className="tag">
                            <div className="inner_tag">
                                <img src={Star} alt="" />
                            </div>
                            <h3>24/7 Service</h3>
                        </div>
                        <div className="tag">
                            <div className="inner_tag">
                                <img src={Dollor} alt="" />
                            </div>
                            <h3>Reasonable Rates</h3>
                        </div>
                        <div className="tag">
                            <div className="inner_tag">
                                <img src={Users} alt="" />
                            </div>
                            <h3>Experienced Team</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tags
