import React from 'react'
import Client from '../../../global/components/client'
import { clientData } from '../../../global/utils/data'

const OurClient = () => {
    return (
        <div>
            <section className="our_clients">
                <div className="page_width">
                    <div className="inner_client">
                        <h2>Our <span>Clients</span></h2>
                        <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof
                            of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous
                            online home services platform and provide our customers with the best of services and experience.
                        </p>
                        <div className="rev">

                            {
                                clientData.map((item, index) => {
                                    return (
                                      <Client
                                        name={item.name}
                                        img={item.img}
                                      />
                                    )
                                  })
                            }

    
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurClient
