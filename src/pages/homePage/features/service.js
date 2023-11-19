import React from 'react'
import AcService from '../../../assets/images/home/AC_servives.webp'
import Dust from '../../../assets/images/home/Dust_cleaning.webp'
import Handyman from '../../../assets/images/home/handyman.webp'
import Plumbing from '../../../assets/images/home/plumbing.webp'

function Service() {
  return (
    <div>
       <section className="services_section">
        <div className="page_width">
          <h2>
            Explore our <span>Services</span>
          </h2>
          <div className="service_card">
            <div className="service">
              <div className="service_img">
                <img src={AcService} alt="" />
              </div>
              <div className="overlay">
                <div className="booking">
                  <h2>
                    AC Cleaning
                  </h2>
                  <button>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="service_img">
                <img src={Dust} alt="" />
              </div>
              <div className="overlay">
                <div className="booking">
                  <h2>
                    Dust Cleaning
                  </h2>
                  <button>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="service_img">
                <img src={Handyman} alt="" />
              </div>
              <div className="overlay">
                <div className="booking">
                  <h2>
                    Handyman
                  </h2>
                  <button>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="service_img">
                <img src={Plumbing} alt="" />
              </div>
              <div className="overlay">
                <div className="booking">
                  <h2>
                    Plumbing
                  </h2>
                  <button>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
