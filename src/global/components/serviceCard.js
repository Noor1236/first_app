import React from 'react'
import ProductImg from '../../../src/assets/images/home/AC_servives.webp'

function ServiceCard({img , title}) {
  return (
    <div>
      <div className="service">
              <div className="service_img">
                <img src={img ? img : ProductImg} alt="" />
              </div>
              <div className="overlay">
                <div className="booking">
                  <h2>
                  {title ? title : "Ac Cleaning"}
                  </h2>
                  <button>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default ServiceCard
