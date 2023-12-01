import React from 'react'
import ServiceCard from '../../../global/components/serviceCard'
import { serviceData } from '../../../global/utils/data'


function Service() {
  return (
    <div>
      <section className="services_section">
        <div className="page_width">
          <h2>
            Explore our <span>Services</span>
          </h2>
          <div className="service_card">

            {
              serviceData.map((item, index) => {
                return (
                  <ServiceCard
                    img={item.img}
                    title={item.title}
                  />
                )
              })
            }

          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
