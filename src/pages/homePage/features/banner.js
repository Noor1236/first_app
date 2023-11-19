import React from 'react'
import BannerPic from '../../../assets/images/home/banner/banner.svg'

function Banner() {
  return (
    <div>
      <section className="banner_section">
        <div className="page_width">
          <div className="inner_banner">
            <div className="left_side">
              <span className="badge">Best in Dubai</span>
              <br />
              <p className="welcome">Welcome To </p>
              <h2>Home <span>Comfort</span></h2>
              <p>Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with
                home comfort professional experts.
              </p>
              <div className="btn">
                <button className="btn btn_1">Contact Us</button>
                <button className="btn btn_2">Learn More</button>
              </div>
            </div>
            <div className="right_side">
              <div className="right_img">
                <img src={BannerPic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
